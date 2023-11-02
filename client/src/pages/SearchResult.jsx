import PropTypes from 'prop-types';

const SearchResult = ({ bongos }) => {
    if (!bongos.length) {
        return <h3>No bongos found!</h3>;
    }

    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <ul className="bongo-list">
                {bongos.map(bongo => (
                    <li key={bongo._id} className="bongo-item">
                        <img src={bongo.image} alt={bongo.name} />
                        <h3>{bongo.name}</h3>
                        <p>{bongo.description}</p>
                        <p>Price: ${bongo.price}</p>
                        <p>Quantity: {bongo.quantity}</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

SearchResult.propTypes = {
    bongos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
};

export default SearchResult;
