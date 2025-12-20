import { createClient } from "npm:@sanity/client"

const client = createClient({
    projectId: "l36upe1t",
    dataset: "imkreative",
    useCdn: false,
    apiVersion: "2024-12-06"
})

export async function load() {
    const dataUrl = Deno.env.get("IMK_API_URL");
    const settingsRes = await fetch(`${dataUrl}/settings`)
    const settingsData = await settingsRes.json()
    const settings = settingsData.settings
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
    
    return { projects, settings }
}
