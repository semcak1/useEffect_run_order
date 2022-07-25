import { useEffect, useState } from "react";
import ChildA from "./ChildA";
import "./styles.css";
import useDeneme from "./useDeneme";
import useMounted from "./useMounted";

export default function App() {
  const [count, setCount] = useState(1);
  // const isMounted = useMounted();
  /* 
  -hookların içindeki useEffect componentin içindeki useEffect gibidir.
  -eğer hook diğer useEffectlerin üstünde çağırılmışsa , hook içindeki useEffect te önce çalıştırılır.
  -hook içindeki useEffect çağırıldığı componnetlerdeki useEffect gibidir. Child içindeki useEffect gibi değildir.*/
  const { count: c, setCount: setC, countNormal } = useDeneme();
  console.log({ c, countNormal });

  console.log("1. log");

  // useEffectlerin çalışma sırası : Önce component render olur. içindeki metotlar çalışır vd jsx retur edilrii. Sonrasında useEffect Çalışır.
  // childrend ın useEffect i parent ten önce çalıştırılır.
  useEffect(() => {
    console.log("App useEffect");
  }, []);
  console.log("2. log");

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setC();
        }}
      >
        Artır
      </button>
      <ChildA />
    </div>
  );
}
