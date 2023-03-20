import { notFound } from "next/navigation";
import Image from "next/image";
import style from "./style.module.css";

async function getPost(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function Page({ params }) {
  const { id, title, body } = await getPost(params.id);

  if (!title) {
    return notFound();
  }

  return (
    <div className={style.blogContainer}>
      <div className={style.cardImage}>
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt={title}
          fill
        />
      </div>
      <h1 className={style.title}>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Page;
