import { extract } from "jsr:@std/front-matter/any"; //  to parse the front matter (metadata) and body from Markdown files.

// basically a struct
export interface Post {
  id: string;
  title: string;
  publishAt: Date;
  updatedAt: Date;
  snippet: string;
  content: string;
}

// takes id and return Post struct.
export async function loadPost(id: string): Promise<Post | null> {
  let text: string;
  // try catch is almost like match OK() Err() in rust
  try {
    text = await Deno.readTextFile(`./data/posts/${id}.md`);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return null;
    }
    throw err;
  }
  // if the try is Ok it will return a tuple 1. metadata(attrs) 2. content(body)
  const { attrs, body } = extract(text);
  const params = attrs as Record<string, string>;
  // convert the string dates from .md to Date
  const publishAt = new Date(params.publish_at);
  const updatedAt = new Date(params.updated_at);
  // returns Post struct
  return {
    id,
    title: params.title,
    publishAt,
    updatedAt,
    snippet: params.snippet,
    content: body,
  };
}

// reads dir /data/posts and takes all .md files and
// takes filename without .md and git it to loadPost function
export async function listPosts(): Promise<Post[]> {
  // empty Promise to hold all posts
  const promises = [];
  for await (const entry of Deno.readDir("./data/posts")) {
    const id = entry.name.replace(".md", "");
    promises.push(loadPost(id)); // for post in posts push into promises like Vec
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishAt.getTime() - a.publishAt.getTime()); // sort the posts by publish at date
  return posts.slice(0, 3); // returns sorted posts
}
