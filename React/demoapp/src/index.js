import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('raj'));
root.render(
  <React.StrictMode>
    <h1 class="bg-primary text-white">i am from Index.js</h1>
	<App/>
  </React.StrictMode>
);