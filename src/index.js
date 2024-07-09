import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './AppProvider';
import reportWebVitals from './reportWebVitals';

async function enableMocking() {
  if(process.env.NODE_ENV === 'development') var local = true;
  console.log("The environment is now : " + process.env.NODE_ENV);
  // if (process.env.NODE_ENV !== 'development') {
  //   return
  // }
 
  const { worker } = await import('./mocks/browser');
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  if(local) return worker.start()
  else {
    return worker.start({
      serviceWorker: {
        url: '/soccer-app/mockServiceWorker.js',
      },
    })
  }
}

enableMocking().then(()=> {
  root.render(
    <React.StrictMode>
      <AppProvider >
        <App />
      </AppProvider>
    </React.StrictMode>
  );
})
const root = ReactDOM.createRoot(document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();