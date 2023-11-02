import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_BONGO } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import './productlist.css';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentType } = state;

  const { loading, data } = useQuery(GET_SINGLE_BONGO);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.bongos,
      });
      data.bongos.forEach((bongo) => {
        idbPromise('products', 'put', bongo);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((bongos) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: bongos,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentType) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.types.some(type => type._id === currentType)
    );
  }

  return (
    
    <div className>
      <h2>Our Bombastic Bongos:</h2>
      {state.products.length ? (
        <div className="bongo-list">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
