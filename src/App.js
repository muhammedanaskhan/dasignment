import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Nav from './components/Nav/Nav';
import Overview from './components/Overview/Overview';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div className="App">
      <div className='sidebarWrapper'>
        <Sidebar/>
      </div>
      <section className='appContainer'>
        <Nav/>
        <Overview/>
        <Transactions/>
      </section>
    </div>
  );
}

export default App;
