import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className='sidebarWrapper'>
        <Sidebar/>
      </div>
      <section className='appContainer'>
        <Nav/>
      </section>
    </div>
  );
}

export default App;
