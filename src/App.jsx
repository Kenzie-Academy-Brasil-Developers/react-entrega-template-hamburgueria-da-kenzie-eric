import { useEffect, useState } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProductList } from './components/ProductsList'
import { Logo } from './fragments/Logo'
import { InputSearch } from './fragments/InputSearch'
import { api } from './services/api';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadProducts()
  }, [])

  const showProducts = (state, search) => {
    const filtered = state.filter(element => element.name.includes(search));
    setFilteredProducts(filtered)
  }
  const handleClick = (id) => {
    const product = products.find((element) => element.id === id);
    setCurrentSale([...currentSale, product])
  }
  const calcTotal = (element = 0) => {
    const list = currentSale.map(element => element.price)
    const total = [...list, element].reduce((acc, curr) => acc + curr);
    setCartTotal(total)
  }
  const clearArray = () => {
    setCurrentSale([])
  }
  const removeItem = (id) => {
    const product = currentSale.filter((e, index) => index !== id);
    const newValor = product.map(element => element.price);
    if(newValor.length !== 0) {
      setCartTotal(newValor.reduce((acc, cur) => acc +cur))
    }else {
      setCartTotal(0)
    }
    setCurrentSale(product)
  }

  return (
    <div className="App">
      <Header>
        <Logo />
        <InputSearch state={products} callback={showProducts} />
      </Header>
      <main>
        <ProductList state={filteredProducts.length !== 0 ? filteredProducts : products} callback={handleClick} calc={calcTotal} />
        <Cart state={currentSale} total={cartTotal} remove={removeItem} set={clearArray}/>
      </main>
    </div>
  )
}

export default App
