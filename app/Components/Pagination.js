import Link from 'next/link';

export default function Pagination({ currentPage, totalResults, query }) {
  const page = Number(currentPage);
  const totalPages = Math.ceil(totalResults / 10);

  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages = [];
    const pagesToShow = 5;
    const half = Math.floor(pagesToShow / 2);

    if (totalPages <= pagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= half + 1) {
      for (let i = 1; i < pagesToShow; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    } else if (page >= totalPages - half) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - pagesToShow + 2; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = page - half + 1; i <= page + half - 1; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
          <Link className="page-link" href={`/Home?s=${query}&page=${page - 1}`} aria-label="Previous">
            <i className="bi bi-chevron-left"></i>
          </Link>
        </li>

        {pageNumbers.map((num, index) => (
          <li
            key={index}
            className={`page-item ${page === num ? 'active' : ''} ${typeof num !== 'number' ? 'disabled' : ''}`}
          >
            {typeof num === 'number' ? (
              <Link className="page-link" href={`/Home?s=${query}&page=${num}`}>
                {num}
              </Link>
            ) : (
              <span className="page-link">...</span>
            )}
          </li>
        ))}

        <li className={`page-item ${page >= totalPages ? 'disabled' : ''}`}>
          <Link className="page-link" href={`/Home?s=${query}&page=${page + 1}`} aria-label="Next">
            <i className="bi bi-chevron-right"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}