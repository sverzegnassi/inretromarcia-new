import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

import sitemap from "@astrojs/sitemap";
import { readFile } from "fs/promises";

let siteUrl = undefined;
let activeIntegrations = []

try {
  const jsonConfig = JSON.parse(await readFile("./src/data/website-config.json"));
  siteUrl = jsonConfig.general.siteUrl ?? undefined

  const excludedPages = jsonConfig.sitemap.exclude.map(url => new URL(url, siteUrl).toString()) ?? []
  const includedPages = jsonConfig.sitemap.include.map(url => new URL(url, siteUrl).toString()) ?? []

  const sitemapIntegration = sitemap({
    filter: (page) => !excludedPages.includes(page),
    customPages: includedPages
  })
  activeIntegrations.push(sitemapIntegration)
} catch (err) {
  console.warn(err)
  console.warn("Error while processing website configuration")
  console.warn("`site` property is not set.")
  console.warn("Astro Sitemap integration and Schema.org extension won't be activated in this build.")
}

const defaultIntegrations = [tailwind(), react(), markdoc(), keystatic()]
activeIntegrations.push(defaultIntegrations)

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: activeIntegrations,
  output: 'hybrid'
});