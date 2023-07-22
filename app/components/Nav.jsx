import Link from "next/link";
import "@styles/globals.css";
import Navlinks from "./Navlinks";

export default async function Nav() {
  const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

  const { data } = await fetch(graphqlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query getPosts {
          categories{
            id
            name
            slug
          }
        }
      `,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());

  let categories = data?.categories;

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link href="/">
          {/* <Image
            className="logo"
            src="/assests/logo.png"
            alt="logo"
            width={60}
            height={60}
          /> */}
          <h1 className="m-0 font-bold">Holistic Hub</h1>
        </Link>
      </div>
      <Navlinks categories={categories} />
    </nav>
  );
}
