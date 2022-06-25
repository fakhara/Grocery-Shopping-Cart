import  HomeScreen  from './screens/HomeScreen'
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import  ProductScreen  from './screens/ProductScreen';
import ProductListScreen from './screens/ProductListScreen';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter , Link, Route, Routes } from 'react-router-dom'
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;
   const userSignin = useSelector((state) => state.userSignin);
   const { userInfo } = userSignin;
   const dispatch = useDispatch();
   const signoutHandler = () => {
      dispatch(signout());
   }
  return (
   <BrowserRouter>
    <div className="grid-container">
        <header className="row">
           <div>
              <Link  className="brand" to="/"> Grocery Shopping Cart</Link>
           </div>
           <div>
               <Link to="/cart">
                 Cart
                 {cartItems.length > 0 && (
                    <span className='badge'>{cartItems.length}</span>
                 )}
               </Link>
               {userInfo ? (
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="/profile">User Profile</Link>
                      </li>
                      <li>
                        <Link to="/orderhistory">Order History</Link>
                      </li>
                      <li>
                        <Link to="#signout" onClick={signoutHandler}>
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/signin">Sign In</Link>
                )}
                {userInfo && userInfo.isAdmin && (
                  <div className="dropdown">
                    <Link to="#admin">
                      Admin <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Products</Link>
                      </li>
                      <li>
                        <Link to="/orderlist">Orders</Link>
                      </li>
                      <li>
                        <Link to="/userlist">Users</Link>
                      </li>
                    </ul>
                  </div>
                )}
           </div>
        </header>
        <main>
          <Routes>
             <Route path="/cart/:id?" element={<CartScreen/>} />
             <Route path='/product/:id' element={<ProductScreen/>} />
             <Route path='/product/:id/edit' element={<ProductEditScreen/>} />
             <Route path='/signin' element={<SigninScreen />} />
             <Route path='/register' element={<RegisterScreen />} />
             <Route path='/shipping' element={<ShippingAddressScreen />} />
             <Route path='/payment' element={<PaymentMethodScreen />} />
             <Route path='/placeorder' element={<PlaceOrderScreen />} />
             <Route path='/order/:id' element={<OrderScreen />} />
             <Route path='/orderhistory' element={<OrderHistoryScreen />} />
             <Route path='/profile' element={<PrivateRoute><ProfileScreen /></PrivateRoute>} />
             <Route path='/productlist' element={<AdminRoute><ProductListScreen/></AdminRoute>} />
             <Route path='/orderlist' element={<AdminRoute><OrderListScreen/></AdminRoute>} />
             <Route exact path='/' element={<HomeScreen/>}/>
          </Routes>
        </main>
        <footer className="row center">
           Fakhara.imran@ All right reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
