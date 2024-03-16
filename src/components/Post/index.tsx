import React from "react";
import { PostI } from "../../types/posts";

import styles from "./Post.module.css";

interface Props {
  item: PostI;
}

const Post: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.post}>
      <p className={styles.post__title}>{item.title}</p>
      <p className={styles.post__body}>{item.body}</p>
    </div>
  );
};

export default Post;
