import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
    schema: z.object({
        title: z.string(),
        startDate: z.date(),
        finishDate: z.date().nullable(),
        img: z.string(),
        technologies: z.array(z.string()),
        position: z.string()
    })
})

export const collections = {
    jobs,
}