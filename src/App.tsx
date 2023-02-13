import { useState } from "react";
import "./App.css";
import { Tabitem } from "./Components/Tabs/tabItem";
import { TabPane } from "./Components/Tabs/tabPane";
import { Tabs } from "./Components/Tabs/tabs";
import { TabsContent } from "./Components/Tabs/tabsContent";

function App() {
  const [selectedTab, setSelectedTab] = useState<string>("Tab2");
  return (
    <div>
      <Tabs selectedTab={selectedTab}>
        <Tabitem tabName={"Tab1"} setSelectedTab={setSelectedTab} />
        <Tabitem tabName={"Tab2"} setSelectedTab={setSelectedTab} />
        <Tabitem tabName={"Tab3"} setSelectedTab={setSelectedTab} />
        <Tabitem tabName={"Tab4"} setSelectedTab={setSelectedTab} />
      </Tabs>

      <TabsContent selectedTab={selectedTab}>
        <TabPane tabName={"Tab1"}>
          <h1>Tab1</h1>
        </TabPane>
        <TabPane tabName={"Tab2"}>
          <h1>Tab2</h1>
        </TabPane>
        <TabPane tabName={"Tab3"}>
          <h1>Tab3</h1>
        </TabPane>
        <TabPane tabName={"Tab4"}>
          <h1>Tab4</h1>
        </TabPane>
      </TabsContent>
    </div>
  );
}

export default App;
