import {
  Form,
  useLoaderData,
  Link,
  Outlet,
  useSubmit,
  useSearchParams,
} from "@remix-run/react";
import connectDb from "~/db/connectDb.server.js";

import Table from "../components/Table";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("search");
  const sortValue = url.searchParams.get("sort") ?? "title";
  const db = await connectDb();
  const snippets = await db.models.Snippet.find(
    searchQuery ? { title: { $regex: new RegExp(searchQuery, "i") } } : {}
  ).sort(sortValue == "title" ? { [sortValue]: 1 } : { [sortValue]: -1 });
  return snippets;
}

export async function action({ request }) {
  const formData = await request.formData();
  const db = await connectDb();
  const query = await db.models.Snippet.find({ title: formData.get("search") });
  const snippets = await loader();

  return snippets.filter(() => query[0].title);
}

export default function Index() {
  const snippets = useLoaderData();

  const submit = useSubmit();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function handleChange(event) {
    submit(event.currentTarget, { replace: true });
  }

  return (
    <>
      <Form method="get" className="mb-6" onChange={handleChange}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Sort by:
        </label>
        <input name="search" value={search} hidden />
        <select
          name="sort"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={"title"}
        >
          <option value="title">Title</option>
          <option value="favorite">Favorite</option>
          <option value="date">Date</option>
        </select>
      </Form>
      <Table snippets={snippets}></Table>
    </>
  );
}
