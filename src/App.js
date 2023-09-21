import './App.css';
import Card from './components/card/Card';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="">
      <Nav/>
      <div className="bg-indigo-600 w-full h-screen">
        <Home/>
      
      </div>
    </div>
  );
}

export default App;
