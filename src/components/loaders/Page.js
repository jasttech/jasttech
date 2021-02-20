import { useState, useEffect } from 'react';
import { BabelLoading } from 'react-loadingg';

const PageLoading = ({ children, waitBeforeShow = 1000 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : <BabelLoading />;
};

export { PageLoading };
