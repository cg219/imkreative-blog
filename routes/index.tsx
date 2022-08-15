/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { HomeLayout, SettingsProps } from "../components/HomeLayout.tsx";
import { Post, PostProps } from "../components/Post.tsx";

interface GhostData {
  posts: Array<PostProps>;
  settings: SettingsProps;
}

export const handler: Handlers<GhostData> = {
  async GET(req, ctx) {
    const API_URL = Deno.env.get("IMK_API_URL");
    const API_KEY = Deno.env.get("IMK_API_KEY");
    const API_VERSION = "v4";
    const postFetch = await fetch(`${API_URL}/ghost/api/content/posts/?key=${API_KEY}&include=tags,authors`);
    const postData = await postFetch.json();
    const settingsFetch = await fetch( `${API_URL}/ghost/api/content/settings/?key=${API_KEY}`);
    const settingsData = await settingsFetch.json();

    return ctx.render({...postData, ...settingsData});
  }
};

export default function Home({ data }: PageProps<GhostData>) {
  return (
    <HomeLayout title="imkreative" nav={data.settings.secondary_navigation}>
      <div class="content">
        <h1 class="title">blog</h1>
        <div class="posts">
          {data.posts.map(({ title, excerpt, slug, published_at, updated_at }) => (
            <Post title={title} excerpt={excerpt} slug={slug} published_at={published_at} />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}
