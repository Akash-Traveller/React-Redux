import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { useDispatch , useSelector } from 'react-redux';
import { calculateTotals , getCartItems } from './feature/cart/cartSlice';
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems , isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, []);

  useEffect(() => {
    dispatch(getCartItems());
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
  <main>
    {isOpen && <Modal/>}
    <Navbar/>
    <Container/>
  </main>
  );
}
export default App;
