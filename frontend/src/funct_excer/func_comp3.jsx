import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(10);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => (prevTime == 0 ? 0 : prevTime - 1));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div>
      <p>Timer : {time} </p>
    </div>
  );
}
const ShowHideTImer = ({ x }) => (x ? <Timer /> : null);
function CancelRequest() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ShowHideTImer x={show} />
    </div>
  );
}
export default CancelRequest;
