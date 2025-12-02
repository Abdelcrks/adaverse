import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    const repoUrl = req.nextUrl.searchParams.get("url")

    if (!repoUrl){
        return Response.json ({error : "Mauvaise url"}, {status : 400})
    }

    const parts = repoUrl.split("github.com/")[1] // je recup la 2eme partie avec [1]
    const [user, repo] = parts.split("/")

    const gitHubResponse = await fetch (`https://api.github.com/repos/${user}/${repo}`)
    const data = await gitHubResponse.json()

    const gitHubReadme = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/README.md`)

    let readmeText = null;

    if (gitHubReadme.ok) {
      readmeText = await gitHubReadme.text();   
    }

    console.log({
        language: data.language,
        updatedAt: data.updated_at,
        description: data.description,
        readme: readmeText,
    })

    return Response.json ({
        language: data.language,
        updatedAt: data.updated_at,
        description: data.description,
        readme: readmeText,
    })
}