import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import './App.css';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <StoreProvider>
                <Navbar />
                <Outlet />
            </StoreProvider>
        </ApolloProvider>
        // <Router>
        //     <div className="header">
        //         <a href="/" className="logo-link">
        //             <img src={bongoLogo} className="logo" alt="Congo Bongos logo" />
        //         </a>
        //         <h1>Congo Bongos</h1>
        //         <p>Your one-stop shop for all things Bongos!</p>
        //     </div>

        //     {/* Navigation Links */}
        //     <nav>
        //         <Link to="/">Home</Link>
        //         <Link to="/about">About Us</Link>
        //         <Link to="/login">Login</Link>
        //         <Link to="/signup">Signup</Link>
        //         {/* Additional links can be added as needed */}
        //     </nav>

        //     {/* Routes */}
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/about" element={<Aboutus />} />
        //         <Route path="/login" element={<Login />} />
        //         <Route path="/signup" element={<Signup />} />
        //         <Route path="/product/:productId" element={<ProductDetail />} />
        //         <Route path="/search" element={<SearchResult />} />
        //         <Route path="*" element={<Error />} />
        //     </Routes>
        // </Router>
    );
}

export default App;
