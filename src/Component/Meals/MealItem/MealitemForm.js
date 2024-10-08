import classes from "./MealitemForm.module.css"
import Input from "../../UI/Input";
const MealitemForm=()=>{
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id:"amount",
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:'1'
            }}></Input>
            <button>+ Add</button>
        </form>
    )
}
export default MealitemForm;