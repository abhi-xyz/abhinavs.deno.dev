import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../../utils/posts.ts";
import { State } from "../../utils/state.ts";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function JustListArticles(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <body className="">
      <div class="px-4 mx-auto max-w-3xl">
        <h1 class="font-bold text-5xl mt-12">Abhi's Blog</h1>
        <ul class="mt-8">
          {posts.map((post) => <PostEntry post={post} />)}
        </ul>
      </div>
    </body>
  );
}

function PostEntry(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t">
      <a href={`/articles/${post.id}`} class="py-2 flex group gap-4">
        <div>
          <h2 class="font-bold group-hover:underline">{post.title}</h2>
          <p class="text-gray-600">{post.snippet}</p>
        </div>
      </a>
    </li>
  );
}
