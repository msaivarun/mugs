import React from 'react';
import './App.css';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(currentPage + 2, totalPages);

  // Display page numbers within the range
  for (let page = startPage; page <= endPage; page++) {
    pageNumbers.push(page);
  }

    pageNumbers.unshift(<button key="previous" onClick={() => onPageChange(currentPage - 1)}>&lt;</button>);
  

    pageNumbers.push(<button key="next" onClick={() => onPageChange(currentPage + 1)}>&gt;</button>);

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => onPageChange(pageNumber)} className={pageNumber === currentPage ? 'active' : ''}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
