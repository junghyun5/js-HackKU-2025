import Message from "./Message";

function App(){
  const name = 'Mosh';
  if(name)
    return <h1>Hello {name}<Message/></h1>;
  return <h1>Hello World</h1>;
}

export default App;