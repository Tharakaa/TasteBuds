const Cart = require("../models/cartModel");

const addToCart = async (req, res) => {
    let userId = req.query.userId;
    let itemId = req.body.itemId;
    let cartItem = new Cart({
        userId: userId,
        itemId: itemId,
        qty: 1
    })
    cartItem = await cartItem.save();
    res.send(cartItem);
};

const getCartForUser = async (req, res) => {
    let userId = req.query.userId;
    let result = await Cart.find({ userId: userId }).populate('itemId');
    res.send(result);
};

const changeItemQty = async (req, res) => {
    let _id = req.body._id;
    let qty = req.body.qty;
    if (qty === 0) {
        let result = await Cart.findByIdAndDelete(_id);
        res.send(result);
    } else {
        let result = await Cart.findByIdAndUpdate(_id, {qty: qty});
        res.send(result);
    }
}

module.exports = { addToCart, getCartForUser, changeItemQty };
