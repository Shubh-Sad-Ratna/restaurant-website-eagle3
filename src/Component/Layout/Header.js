import React,{Fragment} from "react";
import classes from "./Header.module.css"
import mealsImage from "../../Assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return(
        <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
            <p>.</p>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food"></img>
        </div>
        </Fragment>
    )
}
export default Header;
