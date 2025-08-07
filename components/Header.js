import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <FontAwesomeIcon icon={faHome} /> Интернет-витрина
        </Link>
        <nav className="nav">
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;