import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        date: z.coerce.date().optional(),
        image: z.string().optional(),
        description: z.string().optional()
    }),
});

const meetupsCollection = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        date: z.coerce.date(),
        image: z.string().optional(),
        description: z.string().optional()
    }),
});

const newsCollection = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        date: z.coerce.date().optional(),
        image: z.string().optional(),
        description: z.string().optional()
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
    news: newsCollection,
    interventions: interventionsCollection
};