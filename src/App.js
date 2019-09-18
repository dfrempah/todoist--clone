import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { firebase } from './firebase';
import { ProjectsProvider, SelectedProjectProvider } from './components/context/index'



export const App = () => {
  return(
    <SelectedProjectProvider>
      <ProjectsProvider>
      <div className="App">
    <header className="App-header">
      <Header />
      <Content />
    </header>
  </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
   
  )

}
  


export default App;
