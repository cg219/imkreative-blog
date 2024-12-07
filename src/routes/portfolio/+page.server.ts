import { createClient } from "@sanity/client"

const client = createClient({
    projectId: "l36upe1t",
    dataset: "imkreative",
    useCdn: false,
    apiVersion: "2024-12-06"
})

export async function load() {
    const projects = await client.fetch(`*[_type == 'site'] {
        date,
        active,
        role,
        agency,
        technology,
        url,
        name,
        client,
        "thumbnail": thumbnail["asset"]-> {url}
    } | order(date desc)`)

    console.log(projects)
    
    return { projects }
}
