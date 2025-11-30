import { db } from "@/src/db";
import { eq } from "drizzle-orm";
import { categories } from "@/src/db/schema";
import { projects } from "@/src/db/schema";
import { ProjectCard } from "@/app/components/ProjectCard";

export default async function CategoriePage ({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params
    const [categorie] = await db
    .select()
    .from(categories)
    .where((eq(categories.name, slug)))

    console.log("categories possibles:", await db.select().from(categories));

    if(!categorie) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-lg">Catégorie introuvable</p>
            </main>
        )
    }
    const projectsOfCategory = await db
    .select()
    .from(projects)
    .where(eq(projects.categoryId, categorie.id))


    
    console.log("catégorie trouvé :", categorie);
    return(
        <main className="py-10">
            <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-8">{categorie.name}</h1>
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectsOfCategory.map((project) => (
                <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
            </div>
            </div>
        </main>
    )
}