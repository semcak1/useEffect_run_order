import { useEffect, useRef } from "react";

const useMounted = () => {
  const isMounted = useRef(false);
  console.log("1. useMount içi", isMounted.current);

  useEffect(() => {
    console.log(" 1 .1useMount useEffect", isMounted.current);

    isMounted.current = true;
    console.log(" 2 .1useMount useEffect", isMounted.current);

    return () => {
      isMounted.current = false;
    };
  }, []);
  console.log("2. useMount içi", isMounted.current);

  return isMounted.current;
};

export default useMounted;
