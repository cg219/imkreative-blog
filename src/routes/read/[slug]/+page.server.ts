export async function load({ params }) {
    const url = Deno.env.get("IMK_REDIRECT_TO");
    const kv = await Deno.openKv();
    // const kv = await Deno.openKv("https://api.deno.com/databases/b410a3cf-acb8-4017-9008-8b12fddf1d4c/connect");
    const postsRes = await kv.get(["posts", params.slug])
    const posts = [postsRes.value] 
    const settingsRes = await kv.get(["settings"])
    const settings = settingsRes.value

    return {
        posts,
        settings,
        url
    }
}
