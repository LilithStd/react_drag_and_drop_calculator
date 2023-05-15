import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
const store = setupStore();
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
