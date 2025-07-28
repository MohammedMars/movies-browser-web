'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import './style.css';
export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('s') || '';
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      router.push(`/?s=${trimmedQuery}`);
    } else {
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSearch} className="mx-auto searchForm" >
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}