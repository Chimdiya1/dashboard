import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component'
import Sidebar from './components/sidebar/sidebar.component'
import DashboardArea from './components/dashboardArea/dashboardArea.component';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='area'>
        <Sidebar />
        <DashboardArea />
      </div>
    </div>
  );
}

export default App;
