function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        addToBasket = Function.prototype,
        RemoveItemBasket = Function.prototype,
        AddItemBasket = Function.prototype,
    } = props;
        return ( <li className="collection-item">
            {name}
                <button className="btn-small btn-add" onClick={() => RemoveItemBasket(id)}>
                -
            </button>

                x{quantity}
                <button className="btn-small btn-add" onClick={() => AddItemBasket(id)}>
                    +
                </button>
                = {price * quantity} ₽
            <span
                className="secondary-content" onClick={() => removeFromBasket(id)}>
                <i className="material-icons basket-delete">close</i>
            </span>

        </li>
        );
}

export {BasketItem}