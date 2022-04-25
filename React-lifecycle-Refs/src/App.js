import { Component } from 'react';
import './App.css'
import LifecycleA from './components/LifecycleA';
import RefsDemo from './components/RefsDemo'
class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <LifecycleA /> */}
        <RefsDemo />
      </div>
    )
  }
}

export default App;
 