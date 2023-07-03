import logo from './logo.svg';
import './App.css';

let guest = 0;

function Form() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <input type='text'/>
      <button>Hello!</button>
    </form>
  )
}

function App() {
  return (
    <Form/>
  );
}


export default App;
