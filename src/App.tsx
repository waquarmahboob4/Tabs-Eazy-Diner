import { useState } from 'react';
import './App.css';
import { Tabs } from './Components/Tabs/tabs'
import { TabsContent } from './Components/Tabs/tabsContent';

function App() {
  const [selectedTab, setSelectedTab] = useState<string>('Tab1')
  return (
    <div>
     <Tabs tabName={'Tab1'} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
     <TabsContent tabName={'Tab1'} selectedTab={selectedTab}>
      <h1>Tab1</h1>
      </TabsContent>
        


      <Tabs tabName={'Tab2'} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
     <TabsContent tabName={'Tab2'} selectedTab={selectedTab}>
      <h1>Tab2</h1>
      </TabsContent>
     
    </div>
  );
}

export default App;
