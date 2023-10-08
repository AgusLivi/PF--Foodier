import React from "react";
import { useSelector } from "react-redux";
import styles from './Paginate.module.css'

function paginate({ currentPage, page, size }) {

  const productsAmount = useSelector((state) => state.productsAmount);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(productsAmount / size); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={styles.pagination}>
      {/* prev button */}
      {currentPage - 1 <= 0 ? (
        ""
      ) : (
        <button onClick={() => page(currentPage - 1)} className={styles.prevButton}>prev</button>
      )}
    
      {/* page buttons */}
      {pageNumber.map((n) => (
        <button
          key={n}
          onClick={() => page(n)}
          className={`${styles.pageButton} ${n === currentPage ? styles.active : ''}`}
        >
          {n}
        </button>
      ))}
    
      {/* next button */}
      {currentPage >= pageNumber.length ? (
        ""
      ) : (
        <button onClick={() => page(currentPage + 1)} className={styles.nextButton}>next</button>
      )}
    </div>
    
  );
}

export default paginate;
