import { defineCollection, } from "astro:content";
import { z } from 'astro/zod';
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/meetups" }),
  schema: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    description: z.string().optional()
  }),
});

const reportsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reports" }),
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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/interventions" }),
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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pigeons" }),
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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/adoptions" }),
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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/stories" }),
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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/foundationPigeons" }),
  schema: z.object({
    pigeon_name: z.string(),
    species: z.string(),
    breed: z.string().optional(),
    gender: z.string(),
    birthday: z.coerce.date(),
    status: z.string(),
    arrival_date: z.coerce.date(),
    pubImage: z.string(),
    sideImage1: z.string().optional(),
    sideImage2: z.string().optional(),
    sideImage3: z.string().optional(),
    sideImage4: z.string().optional(),
    sideImage5: z.string().optional(),
    sideImage6: z.string().optional(),
    description: z.string().optional(),
    special_needs: z.string().optional(),
    personality: z.string().optional(),
    personality_traits: z.array(z.string()).optional(),
    likes: z.array(z.string()).optional(),
    dislikes: z.array(z.string()).optional(),
    in_relationship: z.string().optional()
  }),
});

const templatesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/templates" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubImage: z.string(),
    author: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

const monthlyReportsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/monthlyReports" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    image: z.string(),
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
  foundationPigeons: foundationPigeonsCollection,
  templates: templatesCollection,
  monthlyReports: monthlyReportsCollection
};
