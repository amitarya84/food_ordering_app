import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import Mealitemform from '../MealItemForm';
import styles from './MealItem.module.css';

const Mealitem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    function addItemToCartHandler(amount) {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }   

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <Mealitemform onAddToCart={addItemToCartHandler} id={props.id} />
            </div>
        </li>
    );
}

export default Mealitem;
