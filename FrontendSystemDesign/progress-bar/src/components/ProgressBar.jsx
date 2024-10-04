import { useEffect, useState } from "react";
import "../styles.css";
import { MAX, MIN } from "../constants";

export const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        role="progressbar"
        aria-valuemax={MAX}
        aria-valuemin={MIN}
        aria-valuenow={percent.toFixed()}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
      ></div>
    </div>
  );
};
