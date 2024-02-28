
/**
 * this function calculates total prci if a new order
 * @param {Array} products cart product array of Object
 * @returns {number} Total price
 */

export const totalPrice = (products)=>{
    let sum = 0;
 
    products.forEach(product => sum += product.price)
    return sum
}