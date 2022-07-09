import React, { useState } from "react";
import TabsBar from "./subcomponent/TabsBar";

const Navbar = () => {
  const contents = [
    {
      name: "Design",
    },
    {
      name: "Components",
    },
    {
      name: "Develop",
    },
    {
      name: "Resources",
    },
    {
      name: "Blog",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        background: "black",
        width: "100%",
        height: "5vh",
        justifyContent: "space-around",
      }}
    >
      {contents.map((x, index) => (
        <TabsBar
          key={index}
          name={x.name}
          callback={() => setSelectedTab(index)}
          isSelected={index === selectedTab}
        />
      ))}
    </div>
  );
};

export default Navbar;
