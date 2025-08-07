import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price.toLocaleString()} ₽</span>
          <button 
            className="add-to-cart-btn" 
            onClick={() => addToCart(product)}
          >
            <FontAwesomeIcon icon={faCartPlus} /> Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;