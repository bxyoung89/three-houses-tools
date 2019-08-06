import React from 'react';
import LostItemPerson from './lostItems/lostItemPerson';

function App() {
  return (
    <div className="App">
      <LostItemPerson personId={16} items={['test 1', 'test 2']}/>
      <LostItemPerson personId={0} items={['test 1', 'test 2']}/>
      <LostItemPerson personId={8} items={['test 1', 'test 2']}/>
      <LostItemPerson personId={24} items={['test 1', 'test 2']}/>
    </div>
  );
}

export default App;
