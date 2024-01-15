import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import sitemap from "@astrojs/sitemap";
import { readFile } from "fs/promises";
import netlify from "@astrojs/netlify";
import { spawn } from 'node:child_process';
import { dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

let jsonConfig = undefined;
let siteUrl = undefined;
let activeIntegrations = [];

/* === START: Read user-provided website configuration === */
try {
  jsonConfig = JSON.parse(await readFile("./src/data/website-config.json"));
  siteUrl = jsonConfig.general.siteUrl ?? undefined;

  const excludedPages = jsonConfig.sitemap.exclude.map(url => new URL(url, siteUrl).toString()) ?? [];
  const includedPages = jsonConfig.sitemap.include.map(url => new URL(url, siteUrl).toString()) ?? [];

  const sitemapIntegration = sitemap({
    filter: page => !excludedPages.includes(page),
    customPages: includedPages
  });

  activeIntegrations.push(sitemapIntegration);
} catch (err) {
  console.warn(err);
  console.warn("Error while processing website configuration");
  console.warn("`site` property is not set.");
  console.warn("Astro Sitemap integration and Schema.org extension won't be activated in this build.");
}
/* === END: Read user-provided website configuration === */

/* === START: Pagefind integration === */
const pagefindIntegration = {
  name: "inretromarcia:pagefind",
  hooks: {
    'astro:build:done': ({ dir }) => {
      if (!jsonConfig.general.pagefind) {
        return
      }

      // https://github.com/withastro/starlight/blob/292d47117ccd6afe77a77f1392824d544c7f1d55/packages/starlight/index.ts#L84
      const targetDir = fileURLToPath(dir);
      const cwd = dirname(fileURLToPath(import.meta.url));
      const relativeDir = relative(cwd, targetDir);
      return new Promise((resolve) => {
        spawn('npx', ['-y', 'pagefind', '--site', relativeDir], {
          stdio: 'inherit',
          shell: true,
          cwd,
        }).on('close', () => resolve());
      });
    }
  }
}
/* === END: Pagefind integration === */

const defaultIntegrations = [tailwind(), react(), keystatic(), pagefindIntegration];
activeIntegrations.push(defaultIntegrations);

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: activeIntegrations,
  output: 'hybrid',
  adapter: netlify()
});