export async function load() {
    const API_URL = Deno.env.get("IMK_API_URL");
    const API_KEY = Deno.env.get("IMK_API_KEY");
    const API_VERSION = "v4";
    const url = Deno.env.get("IMK_REDIRECT_TO");
    const postFetch = await fetch(`${API_URL}/ghost/api/content/posts/?key=${API_KEY}&include=tags,authors`);
    const postData = await postFetch.json();
    const settingsFetch = await fetch( `${API_URL}/ghost/api/content/settings/?key=${API_KEY}`);
    const settingsData = await settingsFetch.json();
    const posts = postData.posts
    const settings = settingsData.settings

    return {
        posts,
        settings,
        url
    }
}
