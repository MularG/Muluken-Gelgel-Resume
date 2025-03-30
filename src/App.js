import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent/MainContent';
import PrintButtons from './components/PrintButtons/PrintButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <Sidebar />
        <MainContent />
      </div>
      <PrintButtons />
    </div>
  );
}

export default App;
