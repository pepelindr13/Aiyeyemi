// useNavigateWithLoader.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullScreenLoader from './FullScreenLoader';

const useNavigateWithLoader = (delay = 6000) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateWithLoader = (to) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(to);
    }, delay);
  };

  return { loading, navigateWithLoader };
};

export default useNavigateWithLoader;
