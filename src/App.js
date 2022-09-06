import {Route,Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Menu from './components/Menu/MainMenu/Menu';
import FoodDetails from './components/Menu/Foods/FoodDetails/FoodDetails';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import AdminLogin from './components/Cashier/Login/AdminLogin';
import Home from './components/Cashier/Home/Home';
import Cashier from './components/Cashier/Cashier/Cashier';
import Product from './components/Cashier/Product Page/Product';
import TransferPayment from './components/Payment/Transfer Payment/TransferPayment';
import QrisPayment from './components/Payment/QRIS Payment/QrisPayment';
import CashPayment from './components/Payment/Cash Payment/CashPayment'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/foods/:id' element={<FoodDetails/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/bcatransferpayment' element={<TransferPayment/>} />
      <Route path='/qrispayment' element={<QrisPayment/>} />
      <Route path='/cashpayment' element={<CashPayment/>} />
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/order' element={<Home />}/>
      <Route path='/cashier' element={<Cashier/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
  );
}

export default App;
