import ReactDOM from 'react-dom/client';
import './App.css';
import React from 'react';
import './index.css';
import Profile from './Profile.js'
import Hobbies from './Hobbies.js'

function App() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Profile />
        <Hobbies />
      </React.StrictMode>
    );
}

export default App;
