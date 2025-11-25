import { db } from "@/src/db";
import { projects } from "@/src/db/schema";

export default async function ProjectsPage() {
  const allProjects = await db.select().from(projects)
  return (
    <main>
      <h1>ADAVERSE</h1>
      {allProjects.map((projects)=>(
        <div key={projects.id}>
          <h2>{projects.title}</h2>
        </div>
      ))}
    </main>
  );
}
