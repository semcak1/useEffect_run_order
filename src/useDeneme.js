import { useEffect, useRef } from "react";
// component dışında tanımlanan değişken ile component içinde tanımlnan ref değeri aynı işlevselliğe sahip
let countNormal = 0;

const useDeneme = () => {
  const count = useRef(0);
  const setCount = () => {
    count.current += 1;
    countNormal += 1;
  };
  console.log("1. useMount içi", count.current);

  useEffect(() => {
    console.log(" 1 .1useMount useEffect", count.current);

    // count.current = true;
    console.log(" 2 .1useMount useEffect", count.current);

    // return () => {
    //   count.current = false;
    // };
  }, []);
  console.log("2. useMount içi", count.current);

  return { count: count.current, setCount, countNormal };
};

export default useDeneme;
