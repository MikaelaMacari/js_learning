const field = document.getElementById("field");
const ball = document.getElementById("ball");

const centerBall = ({ displayValue, justifyContentValue, alignItemsValue }) => {
  field.style.display = displayValue;
  field.style.justifyContent = justifyContentValue;
  field.style.alignItems = alignItemsValue;
};

// centerBall({ displayValue: "flex", justifyContentValue: "start", alignItemsValue: "start" });
// centerBall({ justifyContentValue: "end", alignItemsValue: "start" });
// centerBall({ justifyContentValue: "end", alignItemsValue: "end" });
// centerBall({ justifyContentValue: "start", alignItemsValue: "end" });
centerBall({ displayValue: "flex", justifyContentValue: "center", alignItemsValue: "center" });
