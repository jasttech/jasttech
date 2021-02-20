import React, { useEffect, useState } from 'react';
import { BoxLoading } from 'react-loadingg';

const Delayed = ({ children, waitBeforeShow = 3000 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : <BoxLoading />;
};

export default Delayed;
