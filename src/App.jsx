import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import ProductsList from "./components/ProductsList"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Admin/Dashboard"
import { Protected, ProtectedAdmin } from "./components/HiddenLinks"
import AddProduct from "./components/Admin/AddProduct"
import ViewProducts from "./components/Admin/ViewProducts"
import Cart from "./components/Cart"
import ProductContext from "./ProductContext"

// import '../src/components/Loader.css'
// import Loadr from "../src/Loadr.json"
// import Lottie from "lottie-react"

function App() {

  return (
  <>

{/* <Lottie  animationData={Loadr}></Lottie> */}

  <ToastContainer position="bottom-left" autoClose={10000} hideProgressBar={true}
    newestOnTop={false} closeOnClick  rtl={false}  pauseOnFocusLoss={false}
    draggable   pauseOnHover={false} theme="colored"/>
   <ProductContext>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Protected><ProductsList/></Protected>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<ProtectedAdmin><Dashboard/></ProtectedAdmin>}>
              <Route path='addproduct' element={<AddProduct/>}/>
              <Route path='viewproducts' element={<ViewProducts/>}/>
              {/* <Route path='editproduct/:id' element={<AddProduct/>}/> */}
        </Route>

        <Route path='/cart' element={<Protected><Cart/></Protected>}/>
        <Route path='*  ' element={<PageNotFound/>}/>
      </Routes>
    </ProductContext>
  </>
  )
}

export default App
