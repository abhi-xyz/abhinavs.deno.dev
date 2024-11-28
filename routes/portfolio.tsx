import type { Handlers, PageProps } from "$fresh/server.ts";
import PortfolioHeader from "../islands/Header.tsx";
import { listPosts, type Post } from "../utils/just_posts.ts";
import type { State } from "../utils/just_state.ts";
import Footer from "../components/Footer.tsx";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};
function PostEntry(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t py-2">
      <a href={`/**/articles/${post.id}`} class="py-2 flex group gap-4">
        <div>
          <h2 class="font-bold group-hover:underline">{post.title}</h2>
          <p class="text-gray-600">{post.snippet}</p>
        </div>
      </a>
    </li>
  );
}

export default function PortfolioPage(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <>
      <body className=" h-lvh dark:bg-just-mirage bg-latte-crust dark:text-mocha-text text-latte-text">
        <PortfolioHeader />

        <div class="mx-auto max-w-3xl flex flex-col justify-center">
          <div className="h-4"></div>
          <div class="">
            <h1 className="text-3xl" id="hi">Hello, I'am</h1>
            <h1 className="text-6xl font-extrabold" id="hi">
              Abhinandh S
              <span class="text-just-red">
                .
              </span>
            </h1>
            <h1 class="pt-8 text-2xl font-sans font-bold">
              Welcome to my corner of Internet
              <span class="text-just-red">
                .
              </span>
            </h1>
            <h1 class="border-l-4 border-l-just-red pl-4 font-bold text-4xl mt-12">
              About Me
              <span class="text-just-red">
                .
              </span>
            </h1>
            <br />
            <p>
              I'm Abhinandh S. I am a 21 old guy from India, who loves computers
              and softwares.
            </p>
            <p>
              This place is home for all my psychological dysfunctioning. A
              place where I am in control, with no censorship or manupilation.
            </p>

            <div id="list articles" class="mx-auto max-w-3xl">
              <h1 class="border-l-4 border-l-just-red pl-4 font-bold text-4xl mt-12">
                Recent Posts
                <span class="text-just-red">
                  .
                </span>
              </h1>
              <ul class="mt-8">
                {posts.map((post) => <PostEntry post={post} />)}
              </ul>
            </div>
            <div className="border-b border-mocha-text"></div>
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}
