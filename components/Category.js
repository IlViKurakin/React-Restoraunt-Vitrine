import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Category = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className="category-card">
      <div className="category-icon">
        <FontAwesomeIcon icon={category.icon} size="2x" />
      </div>
      <h3>{category.name}</h3>
    </Link>
  );
};

export default Category;