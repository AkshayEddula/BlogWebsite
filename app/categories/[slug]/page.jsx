import PostTemplate from "@app/components/PostTemplate";
import { getCategoriesSlug } from "@app/services/categories";
import { getCategories } from "@app/services/getcategories";

export async function generateStaticParams() {
  const categories = (await getCategoriesSlug) || [];
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function page({ params }) {
  const { slug } = params;

  const { category } = await getCategories(slug);
  const catPost = category?.posts;

  return (
    <div className="categorypost">
      <div className="line">
        <hr />
      </div>
      <h1>posts</h1>
      {catPost.map((post) => (
        <PostTemplate post={post} />
      ))}
    </div>
  );
}
