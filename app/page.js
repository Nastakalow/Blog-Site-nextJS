import BlogCard from "@/components/BlogCard";
import style from "./style.module.css";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

async function Home() {
  const { posts } = await getPosts();
  console.log(posts);
  return (
    <div className={style.blogsContainer}>
      {posts.map((post) => (
        <BlogCard key={post.key} {...post} />
      ))}
    </div>
  );
}

export default Home;
