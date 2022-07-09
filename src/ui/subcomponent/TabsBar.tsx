import React, { useEffect } from "react";

interface TabsBarProps {
  name: string;
  callback: () => void;
  isSelected: boolean;
}

const TabsBar: React.FC<TabsBarProps> = ({
  name,
  callback,
  isSelected = false,
}) => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        height: "100%",
        backgroundColor: `${isSelected === true ? "green" : "transparent"}`,
        padding: "0 2em",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={callback}
    >
      {name}
    </div>
  );
};

export default TabsBar;
