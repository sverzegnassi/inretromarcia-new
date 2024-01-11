import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        image: z.string().optional(),
        date: z.string().refine((value) => {
            // Using a regex to check if the string follows the 'YYYY-MM-DDTHH:mm' format
            return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value);
        }, {
            message: 'Invalid DateTimeLocal string format',
        }),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        linkTitle: z.string().optional(),
        toc: z.boolean().optional(),
        meta: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            canonicalURL: z.string().optional(),
            schema: z.string().optional(),
        }).optional(),
        socialCard: z.object({
            image: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
        }).optional(),
        codeInjection: z.object({
            pageHeader: z.string().optional(),
            pageFooter: z.string().optional(),
        }).optional(),
    }),
});

export const collections = {
    'corea-del-sud': postCollection,
};