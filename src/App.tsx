import React from 'react';

import Form from './components/form/Form'
import unique from './function/1c/unique'
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Form />
      </div>
      <p>{unique([1,2,3,3,4]).join(', ')}</p>
    </>
  );
}

export default App;
