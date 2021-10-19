import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Router from "./routes/index";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={ zh_CN }>
        <Router />
      </ConfigProvider>
    </Provider>
  )
}

export default App;
