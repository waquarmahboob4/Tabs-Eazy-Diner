export const TabsContent= ({
  children,
  tabName,
  selectedTab,
}: any) => {
  return (
    <div className={selectedTab === tabName ? "active" : ""}>
      {selectedTab === tabName?children:children=''}
    </div>
  );
};
