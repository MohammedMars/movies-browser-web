import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1">404</h1>
      <h2>Movie Not Found</h2>
      <p className="lead text-body-secondary">
        Sorry, we couldn't find the movie you were looking for.
      </p>
      <Link href="/" className="btn btn-primary mt-3">
        Return to Movie Browser
      </Link>
    </div>
  );
}