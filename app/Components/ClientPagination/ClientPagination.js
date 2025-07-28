'use client';

export default function ClientPagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>
            Previous
          </button>
        </li>
        {pageNumbers.map((num) => (
          <li key={num} className={`page-item ${currentPage === num ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(num)}>
              {num}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}