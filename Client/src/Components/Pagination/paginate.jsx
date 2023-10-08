import React from "react";
import { useSelector } from "react-redux";

function paginate({ currentPage, page, size }) {

  const productsAmount = useSelector((state) => state.productsAmount);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(productsAmount / size); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      {/* prev button */}
      {currentPage - 1 <= 0 ? (
        ""
      ) : (
        <button onClick={() => page(currentPage - 1)}>prev</button>
      )}

      {/* page buttons */}
      {pageNumber.map((n) => (
        <button
          key={n}
          onClick={() => page(n)}
        >
          {n}
        </button>
      ))}

      {/* next buttos */}
      {currentPage >= pageNumber.length ? (
        ""
      ) : (
        <button onClick={() => page(currentPage + 1)}>next</button>
      )}
    </div>
  );
}

export default paginate;
