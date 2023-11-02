import ProductList from "../components/ProductList";
import TypeMenu from "../components/TypeMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <TypeMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
