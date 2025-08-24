import { createClient } from "npm:@sanity/client"

const client = createClient({
    projectId: "l36upe1t",
    dataset: "imkreative",
    useCdn: false,
    apiVersion: "2024-12-06"
})

export async function load() {
    const API_URL = Deno.env.get("IMK_API_URL");
    const API_KEY = Deno.env.get("IMK_API_KEY");
    const kv = await Deno.openKv();
    // const kv = await Deno.openKv("https://api.deno.com/databases/b410a3cf-acb8-4017-9008-8b12fddf1d4c/connect");
    // const settingsFetch = await fetch( `${API_URL}/ghost/api/content/settings/?key=${API_KEY}`);
    // const settingsData = await settingsFetch.json();
    // const settings = settingsData.settings;
    const settingsRes = await kv.get(["settings"])
    const settings = settingsRes.value
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
