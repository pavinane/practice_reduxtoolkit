import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import ToggleBlock from './features/Toggle/Toggle';
import ShowHide from './features/showHide/ShowHide';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Todo from './features/Todo/Todo';

function App() {

  
  return (
   <div>
    <BrowserRouter>
    <NabBtn/>
    <Routes>
      <Route path="/" element={ <Counter/>}/>
      <Route path="/toggle" element={ <ToggleBlock/>}/>
      <Route path="/show" element={ <ShowHide/>}/>
      <Route path="/todo" element={ <Todo/>}/>
    </Routes>
    </BrowserRouter>
     
      
   </div>
  );
}

export default App;



const NabBtn = () => {
  return(
    <div style={{marginBottom:50 , display:'flex',justifyContent:'space-between',width:"500px"}}>
      <Link to="/">Counter</Link>
      <Link to="/toggle">Toggle</Link>
      <Link to="/show">Show</Link>
      <Link to="/todo">Todo</Link>
    </div>
  )
}