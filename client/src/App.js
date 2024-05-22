import logo from './logo.svg';
import './App.css';
import PostCreate from './PostCreate';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>blog page</h2>
            </header>
            <PostCreate/>
        </div>
    );
}

export default App;
