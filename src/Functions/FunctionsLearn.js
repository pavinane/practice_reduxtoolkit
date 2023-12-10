import {compose,pipe} from 'lodash/fp';  //lodash plugin use to make a function to easily understable 
import './App.css';

function App() {

  let name = "  TextExample ";

  const trim = str => str.trim();

  const newText = str => `<div>${str}</div>`;
  const lowerCase =str => str.toLowerCase()


  const toCompose = compose(newText,lowerCase,trim) // if we use componse function have to read on reverse

  
  // const result = newText( lowerCase(trim(name)));
  const toPipe =pipe(trim,lowerCase,newText) // Pipe can read the function orderwise
  const result = toCompose(name);

  //Suppose unfortunately make duplicate use this example (developer reduce to use duplicate)

  let dupli = type =>str =>`<${type}>${str}</${type}>`;
  
  const toDupliPipe =pipe(trim,lowerCase,dupli('span'))

  // example function to understand loop or nested function


  const add2 = a =>b=>c=> a+b+c;

  console.log(add2(1)(4)(10));


  // Write Copy function code

  let data = {
    name:"Pavi",
    address:{
      city:"Kanchipuram",
      country:"India"
    }
  }

  const updateData = {
    ...data,name:"Pavimegan",address:{
      ...name.address,country:"India",city:"Chennai"
    }
  }

  console.log(data)
  console.log(updateData)

  return (
    <div className="App">
      <div>
      {result }
      </div>
      
      <div>
      {toPipe(name)} 
      </div>
      <div>
        
      </div>
      
      <div>{toDupliPipe(name)}</div>
    </div>
  );
}

export default App;
