import './App.css'
import 'primereact/resources/themes/lara-dark-amber/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import ProductList from './components/ProductList'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header/>
      <ProductList />
    </>
  );
}
 
export default App;