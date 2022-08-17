/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { HomeLayout } from "../components/HomeLayout.tsx";
import { Post } from "../components/Post.tsx";
import { PostProps, SettingsProps } from "../utils/types.ts";
import { hit } from "../utils/pirsch.ts";

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

    hit(req, ctx);

    return ctx.render({...postData, ...settingsData});
  }
};

export default function Home({ data }: PageProps<GhostData>) {
  return (
    <HomeLayout title={data.settings.title}
      nav={data.settings.secondary_navigation}
      description={data.settings.description}
      twitterImage={data.settings.twitter_image}
      fbImage={data.settings.og_image}
      url={Deno.env.get('IMK_URL')} >
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
