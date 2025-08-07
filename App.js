import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard'; // Добавлен импорт
import Category from './components/Category';
import Cart from './components/Cart';
import { faTags } from '@fortawesome/free-solid-svg-icons'; // Упрощен импорт иконок
import './styles/App.css';



const categories = [
  { id: 1, name: 'Пицца', icon: faTags },
  { id: 2, name: 'Пита', icon: faTags },
  { id: 3, name: 'Пиде', icon: faTags },
  { id: 4, name: 'Салаты', icon: faTags }
];

const productsData = {
  1: [
    { id: 101, name: 'Баварская', description: 'Три вида мяса, нежнейшая мраморная говядина, куриное филе в оригинальном маринаде, подкопчённый бекон с соусом "Песто" и помидоры черри. Нежности придаёт сыр моцарелла, свежести- петрушка и оливковое масло.', price: 850, image: 'https://static.vecteezy.com/system/resources/previews/024/715/609/non_2x/freshly-baked-pizza-on-rustic-wooden-table-generated-by-ai-free-photo.jpg' },
  ],
  2: [
    { id: 201, name: 'Пита с курицей и сыром', description: 'Хлеб, выпеченный в дровянной печи, цыплёнок в специальном маринаде, сливочный сыр моцарелла, спелые помидоры, нежная пекинская капуста, сладкий красный лук, фирменный чесночный и фирменный томатный соус, свежая петрушка.', price: 320, image: 'https://avatars.mds.yandex.net/i?id=f8f6d81e5fd331411fb473e0d0510df902f2a2d5-5221488-images-thumbs&n=13' },
  ],
  3: [
    { id: 301, name: 'Пиде с мраморной говядиной', description: 'Блюдо турецкой кухни в форме лодочки с сочной начинкой из мраморной говядины, в сочетании с болгарским перцем и томатным соусом, смесь специй. Сыр моцарелла, свежая петрушка и сладкий красный лук. Готовится в итальянской печи на дровах.', price: 350, image: 'https://avatars.mds.yandex.net/i?id=d55e4a310a4d8b8feff1488a205d93457e77146f-4968757-images-thumbs&n=13' },
  ],
  4: [
    { id: 401, name: 'Весна', description: 'Это самостоятельное блюдо, в котором гастрономия говорит на языке сезонных ингредиентов и авторских акцентов. Такие рецепты не только про свежесть, но и про сложность вкуса: от греческой классики с кремом фета до булгура с цитрусовыми, от тунца конфи до салата с азиатскими грибами и корейской морковью. ', price: 490, image: 'https://avatars.mds.yandex.net/get-mpic/4078462/2a0000018fedb5ecfb88c545e28f2d94828e/orig' },
  ]
};

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        
        <Routes>
          <Route path="/" element={
            <div className="categories-container">
              <h2>Категории товаров</h2>
              <div className="categories-grid">
                {categories.map(category => (
                  <Category key={category.id} category={category} />
                ))}
              </div>
            </div>
          } />
          
          {categories.map(category => (
            <Route 
              key={category.id} 
              path={`/category/${category.id}`} 
              element={
                <div className="products-container">
                  <h2>{category.name}</h2>
                  <div className="products-grid">
                    {productsData[category.id].map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                      />
                    ))}
                  </div>
                </div>
              } 
            />
          ))}
          
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;