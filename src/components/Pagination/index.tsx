import React from "react";
import styles from "./Pagination.module.css";

interface Props {
  postsPerPage: number;
  totalPosts: number | undefined;
  paginate: (number: number) => void;
}

const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];

  if (totalPosts) {
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <button
            className={styles.pagination__btn}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
