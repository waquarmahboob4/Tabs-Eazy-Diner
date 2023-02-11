export const Tabs = ({tabName,selectedTab,setSelectedTab}:any) => {
  return (
    <div className={selectedTab === tabName ? "active" : ""}>
      <button onClick={() => setSelectedTab(tabName)}>{tabName}</button>
    </div>
  );
};
