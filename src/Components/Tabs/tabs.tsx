import { Children } from "react";

export const Tabs = ({ children, selectedTab }: any) => {
  return (
    <>
      {Children.map(children, (child) => (
        <div className={selectedTab === child.props.tabName ? "active" : ""}>
          {child}
        </div>
      ))}
    </>
  );
};
