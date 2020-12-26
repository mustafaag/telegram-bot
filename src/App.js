import logo from './logo.svg';
import './App.css';
import { ChatList } from './Components/chat-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatList />
      </header>
    </div>
  );
}

export default App;
