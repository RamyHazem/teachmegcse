import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${offset > 0 ? `sticky` : ``}`}>
      <Link to="/">
        <div className="logo">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8739FA"
              d="M48.5,-27C57.5,-12.5,55.6,9.2,45.7,26.5C35.8,43.8,17.9,56.6,-2,57.8C-21.9,59,-43.9,48.5,-58.3,28.6C-72.6,8.7,-79.5,-20.6,-68.5,-36.2C-57.5,-51.8,-28.8,-53.8,-4.5,-51.3C19.8,-48.7,39.6,-41.5,48.5,-27Z"
              transform="translate(100 100)"
            />
          </svg>
          <button className="home-btn">teachmegcse</button>
        </div>
      </Link>
      <div className="control-buttons">
        <Link to="/past-papers">
          <button>Past Papers</button>
        </Link>
        <Link to="/IGCSE">
          <button>Study Notes</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
