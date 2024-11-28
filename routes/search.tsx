import { Handlers, PageProps } from "$fresh/server.ts";

// TODO: change this to articles tilte
// Make it case insensitive
const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <body className="h-lvh bg-just-mirage text-mocha-text">
      <div>
        <form className="">
          <input type="text" name="q" value={query} />
          <button type="submit">Search</button>
        </form>
        <ul>
          {results.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </body>
  );
}
