import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Удален неиспользуемый faTrashAlt
import CartItem from './CartItem';



const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>
        <FontAwesomeIcon icon={faShoppingBag} /> Ваша корзина
      </h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Ваша корзина пуста</p>
          <Link to="/" className="continue-shopping">
            <FontAwesomeIcon icon={faArrowLeft} /> Продолжить покупки
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="total">
              <span>Итого:</span>
              <span className="total-amount">{total.toLocaleString()} ₽</span>
            </div>
            
            <button className="checkout-btn">
              Оформить заказ
            </button>
            
            <Link to="/" className="continue-shopping">
              <FontAwesomeIcon icon={faArrowLeft} /> Продолжить покупки
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;