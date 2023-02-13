export const Tabitem = ({tabName,setSelectedTab}:any) => {
    return (
      
        <button onClick={() => setSelectedTab(tabName)}>{tabName}</button>

    );
  };
  