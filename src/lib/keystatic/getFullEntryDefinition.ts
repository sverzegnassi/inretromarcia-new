import { createReader, type Entry } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import type { ImageMetadata } from 'astro';


interface Props {
    collectionName: string;
    slug: string;
}

export default async function (props: Props) {
    const { collectionName, slug } = props;

    const reader = createReader(process.cwd(), keystaticConfig);

    // FIXME: At the moment, only "coreaDelSud" collection is supported.
    type CollectionName = keyof typeof reader.collections;
    type CmsEntry = Entry<(typeof keystaticConfig)["collections"]["coreaDelSud"]>;

    const websiteConfig = await reader.singletons.websiteConfig.read();
    const organizationConfig = await reader.singletons.organization.read();
    const collectionConfig = reader.config.collections[collectionName as CollectionName];
    const cmsEntry = (await reader.collections[collectionName as CollectionName].read(slug)) as CmsEntry;

    // Extend Keystatic `coverImage` object with the properties returned by astro:assets
    type CoverImage = (Awaited<ReturnType<typeof reader.collections.coverImages.read>> & Partial<ImageMetadata>) | null;
    const coverImage: CoverImage = await reader.collections.coverImages.read(cmsEntry.image ?? "");
    
    if (coverImage?.file) {
        const coverImageAssets = import.meta.glob<{ default: ImageMetadata }>
            ('/src/assets/cover-images/**/file.{jpeg,jpg,png,gif,webp}');

        // In `dev` mode, AstroJS returns a `/@fs/<path>` URL, exposing the images
        // directly through Vite's `server.fs` abstraction.
        //
        // When running `astro build`, images undergo the optimization pipeline,
        // resulting in a final `/_astro/<file-name>.<hash>.<extension>` path
        // for the optimized resource.

        Object.assign(coverImage, (await coverImageAssets[coverImage.file]()).default)
    }

    // Extend Keystatic collection entry `socialCard` object with the properties returned by astro:assets
    type SocialCard = (typeof cmsEntry.socialCard & Partial<ImageMetadata>) | null;
    const socialCard: SocialCard = cmsEntry.socialCard
    
    if (socialCard?.image) {
        const assets = import.meta.glob<{ default: ImageMetadata }>
            ('/src/assets/social-cards/**/image.{jpeg,jpg,png,gif,webp}');

        Object.assign(socialCard, (await assets[socialCard.image]()).default)
    }

    // Extend Keystatic collection entry `tag` with the information from `tags` collection
    const tagsCollection = await reader.collections.tags.all();
    const tags = cmsEntry.tags.map((tag, index) => {
        const slug = tagsCollection
            .find((t) => t.entry.title === tag)
            ?.entry.breadcrumbUrl?.replace("src/content", "")
            .replace(".mdoc", "");

        // IMPORTANT: Google's Rich Results Validator requires all the breadcrumb items
        // to have a defined `breadcrumbUrl` (`item` property in Schema.org's BreadcrumbList).
        // Only the last breadcrumb item is exempted, since it may represent the current page.
        //
        // Currently, this code lacks explicit validation and depends on external tools,
        // such as Google Search Console, to identify any malformed breadcrumbs.
        //
        // TODO: Consider adding a `console.warn` for potential issues as a proactive measure.

        return {
            name: tag,
            position: index + 1,
            breadcrumbUrl: slug ? `${websiteConfig?.general.siteUrl}${slug}` : "",
        }
    })


    return {
        websiteConfig: websiteConfig,
        organizationConfig: organizationConfig,
        cmsEntry: cmsEntry,
        coverImage: coverImage,
        socialCard: socialCard,
        collectionLabel: collectionConfig.label,
        tags: tags
    }
}