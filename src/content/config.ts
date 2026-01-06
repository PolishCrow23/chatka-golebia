import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    description: z.string(),
    summary: z.string().optional(),
    tag: z.string().optional()
  }),
});

const meetupsCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
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
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.coerce.string(),
    image: z.string(),
    description: z.string(),
    photos: z.string().optional()
  }),
});

const pigeonsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    species: z.string(),
    distribution: z.string(),
    habitat: z.string(),
    diet: z.string(),
    image: z.string(),
    description: z.string()
  }),
});

const adoptionsCollection = defineCollection({
  schema: z.object({
    pigeon_name: z.string(),
    species: z.string(),
    breed: z.string(),
    gender: z.string(),
    age: z.number(),
    pubImage: z.string(),
    sideImage1: z.string().optional(),
    sideImage2: z.string().optional(),
    sideImage3: z.string().optional(),
    sideImage4: z.string().optional()
  }),
});

const storiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    description: z.string(),
    tag: z.string().optional()
  }),
});

const foundationPigeonsCollection = defineCollection({
  schema: z.object({
    pigeon_name: z.string(),
    species: z.string(),
    breed: z.string().optional(),
    gender: z.string(),
    birthday: z.coerce.date(),
    status: z.string(), // e.g., "available", "adopted", "in_care"
    arrival_date: z.coerce.date(),
    pubImage: z.string(),
    sideImage1: z.string().optional(),
    sideImage2: z.string().optional(),
    sideImage3: z.string().optional(),
    sideImage4: z.string().optional(),
    sideImage5: z.string().optional(),
    sideImage6: z.string().optional(),
    description: z.string(),
    special_needs: z.string().optional(),
    personality: z.string().optional(),
    personality_traits: z.array(z.string()).optional(),
    likes: z.array(z.string()).optional(),
    dislikes: z.array(z.string()).optional()
  }),
});

export const collections = {
  posts: postsCollection,
  meetups: meetupsCollection,
  reports: reportsCollection,
  interventions: interventionsCollection,
  pigeons: pigeonsCollection,
  adoptions: adoptionsCollection,
  stories: storiesCollection,
  foundationPigeons: foundationPigeonsCollection
};
