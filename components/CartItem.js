import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="item-price">{item.price.toLocaleString()} ₽</p>
        
        <div className="quantity-controls">
          <button 
            className="quantity-btn" 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          
          <span className="quantity">{item.quantity}</span>
          
          <button 
            className="quantity-btn" 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      
      <div className="cart-item-total">
        <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
        <button 
          className="remove-btn" 
          onClick={() => removeFromCart(item.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;