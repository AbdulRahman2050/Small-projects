import React, { useEffect, useState } from "react";

const Seffect = () => {
  const [size, setSize] = useState(window.innerWidth);

  const chn = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", chn);
    return ()=>{
        window.removeEventListener("resize", chn)
    }
  }, [size]);
  return (
    <>
      <h2>Window size</h2>
      <h3>{size} px</h3>
    </>
  );
};

export default Seffect;
