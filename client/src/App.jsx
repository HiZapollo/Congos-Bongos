import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/Productdetail';
import SearchResult from './pages/SearchResult';
import Signup from './pages/Signup';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            {/* Navigation Links */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {/* Additional links can be added as needed */}
            </nav>

            {/* Routes */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={Aboutus} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/product/:productId" component={ProductDetail} />
                <Route path="/search" component={SearchResult} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;
