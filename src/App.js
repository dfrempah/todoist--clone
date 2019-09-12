import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';


export const App = () => (
    <div className="App">
      <header className="App-header">
        <p>Hello there</p>
        <Header />
        <Content />
      </header>
    </div>
)

export default App;
