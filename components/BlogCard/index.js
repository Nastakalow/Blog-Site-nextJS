import Link from "next/link";
import Image from "next/image";

import style from "./style.module.css";

function BlogCard({ id, title, body }) {
  return (
    <Link href={`/${id}`} className={style.card}>
      <div className={style.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card Image"
          fill
        />
      </div>
      <div className={style.cardBody}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
