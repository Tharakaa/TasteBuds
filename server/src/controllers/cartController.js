const Cart = require("../models/cartModel");

// add to cart method
const addToCart = async (req, res) => {
    let userId = req.query.userId;
    let itemId = req.body.itemId;
    let result = await Cart.find({ userId: userId, itemId: itemId });
    // check if item already exist for user
    if (result.length === 0) {
        // if item does not exist create new item.
        let cartItem = new Cart({
            userId: userId,
            itemId: itemId,
            qty: 1
        })
        cartItem = await cartItem.save();
        res.send(cartItem);
    } else {
        // if item exist qty is incremented
        let cartItem = await Cart.findByIdAndUpdate(result[0]._id, {$inc : {'qty' : 1}});
        res.send(cartItem);
    }
};

const getCartForUser = async (req, res) => {
    let userId = req.query.userId;
    // get cart items and fill product details foreign key using populate.
    let result = await Cart.find({ userId: userId }).populate('itemId');
    res.send(result);
};

// change quantity or delete item method
const changeItemQty = async (req, res) => {
    let _id = req.body._id;
    let qty = req.body.qty;
    if (qty === 0) {
        // item is deleted if qty is 0
        let result = await Cart.findByIdAndDelete(_id);
        res.send(result);
    } else {
        // qty is updated
        let result = await Cart.findByIdAndUpdate(_id, {qty: qty});
        res.send(result);
    }
}

module.exports = { addToCart, getCartForUser, changeItemQty };
