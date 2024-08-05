import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string().optional(),
        date: z.coerce.date().optional(),
        image: z.string().optional(),
        description: z.string().optional()
    }),
});

export const collections = {
    posts: postsCollection,
};