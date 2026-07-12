import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // instant scroll to prevent visual lag during page load
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
