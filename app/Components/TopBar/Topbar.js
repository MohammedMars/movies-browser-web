'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css'
export default function Topbar() {
  const pathname = usePathname();
  const isHomeActive = pathname === '/';
  const isFavoritesActive = pathname === '/Favorites';
  const isContactActive = pathname === '/Contact';

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light shadow-sm fixed-top topbar`}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          🎬 Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isHomeActive ? 'active bold-darkred' : ''}`} href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isFavoritesActive ? 'active bold-darkred' : ''}`} href="/Favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isContactActive ? 'active bold-darkred' : ''}`} href="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}