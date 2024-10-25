const getStoreCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
     return [];
    
}

const saveCartToLs = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLs = id => {
    const cart = getStoreCart();
    cart.push(id);

    saveCartToLs(cart);
}

export{addToLs, getStoreCart} 