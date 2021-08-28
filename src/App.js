import './App.css';
import ListTask from './components/ListTask';
import Addtask from './components/Addtask';

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <Addtask/>
      <ListTask/>
    </div>
  );
}

export default App;
