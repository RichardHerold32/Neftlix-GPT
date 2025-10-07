import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import appStore from './utils/appStore'
import Body from './components/body'

function App() {
 

  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
       
    </>
  );
}

export default App
