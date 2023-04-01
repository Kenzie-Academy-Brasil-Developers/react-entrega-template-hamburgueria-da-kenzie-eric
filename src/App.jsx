import { useEffect, useState } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProductList } from './components/ProductsList'
import { Logo } from './fragments/Logo'
import { InputSearch } from './fragments/InputSearch'
import { api } from './services/api';
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Results } from './fragments/Results'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0);
  const [search, setSearch] = useState("")

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
    const filtered = state.filter(element => element.name.includes(search) || element.category.includes(search));
    setSearch(search)
    setFilteredProducts(filtered)
  }
  const handleClick = (id) => {
    const product = products.find((element) => element.id === id);
    if (currentSale.includes(product)) {
      return toast.warn("Este item já esta no carrinho")
    } else {
      setCurrentSale([...currentSale, product]);
      return toast.success("Item adicionado ao carrinho")
    }
  }
  const calcTotal = (element = 0) => {
    const list = currentSale.map(element => element.price)
    const total = [...list, element].reduce((acc, curr) => acc + curr);
    setCartTotal(total)
  }
  const clearArray = () => {
    setCurrentSale([])
    toast.error("Todos os itens foram removidos")
  }
  const removeItem = (id) => {
    const product = currentSale.filter((e, index) => index !== id);
    const newValor = product.map(element => element.price);
    if (newValor.length !== 0) {
      setCartTotal(newValor.reduce((acc, cur) => acc + cur))
    } else {
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
      {search !== "" ? <Results state={search} /> : ""}
      <main>
        <ProductList state={filteredProducts.length !== 0 ? filteredProducts : products}  callback={handleClick} calc={calcTotal} />
        <Cart state={currentSale} total={cartTotal} remove={removeItem} set={clearArray} />
      </main>
      <ToastContainer position='bottom-right' autoClose={1500} />
    </div>
  )
}

export default App
