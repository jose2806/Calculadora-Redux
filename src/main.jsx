/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 */

import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'

  const counterReducer = (state=0,action) =>{
    switch(action.type){
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'ZERO':
        return 0
      default:
        return state
    }
  }

  const store = configureStore({reducer:counterReducer})

  // eslint-disable-next-line react-refresh/only-export-components
  const App = () =>{
    return(
      <div>
        <div>
          {store.getState()}
        </div>
        <button onClick={e =>store.dispatch({type:'INCREMENT'})}>Plus</button>
        <button onClick={e =>store.dispatch({type:'DECREMENT'})}>Minus</button>
        <button onClick={e =>store.dispatch({type:'ZERO'})}>Zero</button>
      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'))
  const renderApp = () => {
    root.render(<App/>)
  }
  renderApp()
  store.subscribe(renderApp)
  