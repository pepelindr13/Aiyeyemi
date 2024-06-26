import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './FullScreenLoader';

const DelayedLink = ({ to, delay = 3000, children, setActiveLink, isActive }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setActiveLink(to); // Set the active link
      navigate(to);
    }, delay);
  };

  return (
    <>
      {loading && <Loader />}
      <a
        className={`text-decoration-none ${isActive ? 'nav-item-active' : 'nav-item'}`}
        href={to}
        onClick={handleClick}
      >
        {children}
      </a>
    </>
  );
};

export default DelayedLink;
