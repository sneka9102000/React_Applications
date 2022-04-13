import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Greet from './Greet';

function App() {
  render()
  {
    return(
      <div className ='App'>
        <Greet name="Sneka" />
        <p>This is example for children props</p>
        <Greet name="Latha" />
        <button>Action</button>
        <Greet name="Kumar" />

        </div>
    );
  }
}


export default App;
