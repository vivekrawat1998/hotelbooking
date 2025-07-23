import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RoomProvider } from './context/Roomcontext.jsx'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RoomProvider>
          <App />
        </RoomProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
