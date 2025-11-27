"use server"
import { neon } from "@neondatabase/serverless";
import { projects } from "./schema";
import { db } from ".";


export async function createProject (formData: FormData) {
    const title = formData.get("title") as string
    const github = formData.get("github") as string
    const demo = formData.get("demo") as string | null
    const promo = formData.get("promo") as string
    const theme = formData.get("theme") as string

    if (!title || !github || !demo || !promo || !theme){
        throw new Error("Erreur, champs manquants ou invalides")
    }

    const slug = title.toLowerCase().trim().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    await db.insert(projects).values({
        title,
        slug,
        urlGitHub: github,
        urlDemo: demo,
        promoId: Number(promo),
        categoryId: Number(theme),
    })

}

