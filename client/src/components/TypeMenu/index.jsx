import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_TYPES,
  UPDATE_CURRENT_TYPE,
} from '../../utils/actions';
import { GET_TYPES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './TypeMenu.css';

function TypeMenu() {
  const [state, dispatch] = useStoreContext();

  const { types } = state;

  const { loading, data: typeData } = useQuery(GET_TYPES);

  useEffect(() => {
    if (typeData) {
      dispatch({
        type: UPDATE_TYPES,
        types: typeData.types,
      });
      typeData.types.forEach((type) => {
        idbPromise('types', 'put', type);
      });
    } else if (!loading) {
      idbPromise('types', 'get').then((types) => {
        dispatch({
          type: UPDATE_TYPES,
          types: types,
        });
      });
    }
  }, [typeData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_TYPE,
      currentType: id,
    });
  };

  return (
    <div className='type-container'>
      <h2>Choose a Type:</h2>
      <div className="button-container">
        {types.map((item) => (
          <button className='type-button'
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </button>
        ))}
        <button className='type-button' onClick={() => { handleClick('') }}>
          All
        </button>
      </div>
    </div>
  );
}
export default TypeMenu;
