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
      <a href={`/articles/${post.id}`} class="py-2 flex group gap-4">
        <div>
          <h2 class="font-bold group-hover:underline">{post.title}</h2>
          <p class="text-gray-600">{post.snippet}</p>
        </div>
      </a>
    </li>
  );
}

export default function HomePage(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <>
      <body className="h-lvh dark:bg-just-mirage bg-latte-crust dark:text-mocha-text text-latte-text">
        <PortfolioHeader />

        <div class="p-2 mx-auto max-w-3xl flex flex-col justify-center">
          <div className="h-4"></div>
          <div class="">
            <h1 className="max-tablet:text-2xl text-4xl" id="hi">
              Hello, I'am
            </h1>
            <h1
              className="max-tablet:text-4xl text-6xl font-extrabold font-mordern"
              id="hi"
            >
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
            <h1 class="border-l-4 border-l-just-red pl-4 font-bold max-tablet:text-3xl text-4xl mt-12">
              About Me
              <span class="text-just-red">
                .
              </span>
            </h1>
            <br />
            {
              /*

            <img
              src="https://activity-graph.herokuapp.com/graph?username=abhi-xyz&theme=tokyonight&hide_border=true"
              alt="GitHub Activity Graph"
              width="600"
            />
            <img
              src="https://github-contribution-stats.vercel.app/api/?username=abhi-xyz&theme=tokyonight&hide_border=true"
              alt="GitHub Contribution Graph"
              width="400"
            />

            <img
              src="https://github-readme-stats.vercel.app/api?username=abhi-xyz&show_icons=true&theme=tokyonight&hide_border=true"
              alt="GitHub Stats"
              width="400"
            />
            <img
              src="https://streak-stats.demolab.com/?user=abhi-xyz&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              width="400"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhi-xyz&layout=compact&theme=tokyonight&hide_border=true"
              alt="Top Languages"
              width="400"

            />
            */
            }

            <p>
              I'm Abhinandh S. I am a 21 old guy from India, who loves computers
              and softwares.
            </p>
            <p>
              This place is home for all my psychological dysfunctioning. A
              place where I am in control, with no censorship or manupilation.
            </p>

            <div id="list articles" class="mx-auto max-w-3xl">
              <h1 class="border-l-4 border-l-just-red pl-4 font-bold max-tablet:text-3xl text-4xl mt-12">
                Recent Posts
                <span class="text-just-red">
                  .
                </span>
              </h1>
              <ul class="mt-8">
                {posts.map((post) => <PostEntry post={post} />)}
              </ul>
            </div>
            <div className="border-b broder-latte-text dark:border-mocha-text">
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}
