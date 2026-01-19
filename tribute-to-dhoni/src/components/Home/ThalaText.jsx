import { useState, useEffect } from "react";
import SplitText from "./SplitText";

const ThalaText = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 10500); // total animation + delay time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container flex items-center justify-center mb-30 text-center text-white/15 pb-10">
      <SplitText
        key={key}
        text='"THALA FOREVER"'
        className="text-9xl font-extrabold"
        delay={200}
        duration={1.5}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        textAlign="center"
      />
    </div>
  );
};

export default ThalaText;
