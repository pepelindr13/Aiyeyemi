// DelayedLink.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from './FullScreenLoader';

const DelayedLink = ({ to, delay = 5000, children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(to);
    }, delay);
  };

  return (
    <>
      {loading ? <FullScreenLoader /> : <a className='text-decoration-none' href={to} onClick={handleClick}>{children}</a>}
    </>
  );
};

export default DelayedLink;
