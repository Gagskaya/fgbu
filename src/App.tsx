import { useEffect, useState } from "react";

import { postsApi } from "./services/api/posts";
import { PostI } from "./types/posts";

import Pagination from "./components/Pagination";
import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  const [posts, setPosts] = useState<PostI[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    (async () => {
      const posts = await postsApi.fetchPosts();
      setPosts(posts);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        paginate={paginate}
      />

      <div className={styles.posts}>
        <p className={styles.posts__number}>Текущая страница : {currentPage}</p>
        {currentPosts?.map((item) => (
          <Post item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
