import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/students">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/students/new">
                Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
