import { Children } from "react";
export const TabsContent = ({ children, selectedTab }: any) => {
  return (
    <>
      {Children.map(
        children,
        (child) => selectedTab === child.props.tabName && <>{child}</>
      )}
    </>
  );
};
