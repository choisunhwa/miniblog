import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // 책보고 따라 한 것
import AppSuna from './AppSuna'; // 혼자 만들어 본 것
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* // 책보고 따라 한 것 */}
    {/* <App /> */}

    {/* // 혼자 만들어 본 것 */}
    <AppSuna />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for exampl : reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
