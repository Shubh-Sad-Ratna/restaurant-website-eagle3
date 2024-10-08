import React,{Fragment,useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
function App() {
  const [showCart,setShowCart]=useState(false);
  const showCartHandler=()=>{
    setShowCart(true);
  }
  const hideCartHandler=()=>{
    setShowCart(false);
  }
  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
