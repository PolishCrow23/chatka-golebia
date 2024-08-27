import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        author: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        image: z.string().optional(),
        description: z.string().optional()
    }),
});

const meetupsCollection = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        pubDate: z.coerce.date(),
        image: z.string().optional(),
        description: z.string().optional()
    }),
});

const reportsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        author: z.coerce.string(),
        image: z.string(),
        description: z.string(),
        photos: z.string().optional()
    }),
});

const interventionsCollection = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        date: z.coerce.date().optional(),
        image: z.string().optional(),
        description: z.string().optional()
    }),
});

export const collections = {
    posts: postsCollection,
    meetups: meetupsCollection,
    updats: reportsCollection,
    interventions: interventionsCollection
};