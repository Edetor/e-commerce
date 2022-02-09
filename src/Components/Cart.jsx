function Cart(props) {

    const {quantity = 0, handleBasketShow = Function.prototype } = props;


    return <div className='cart grey lighten-3 black-text' onClick = {handleBasketShow} >
        <i className="material-icons">local_grocery_store</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>

}
export {Cart}