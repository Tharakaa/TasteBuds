const Cart = require("../models/cartModel");

const addToCart = async (req, res) => {
    let userId = req.query.userId;
    let itemId = req.body.itemId;
    let result = await Cart.find({ userId: userId, itemId: itemId });
    if (result.length === 0) {
        let cartItem = new Cart({
            userId: userId,
            itemId: itemId,
            qty: 1
        })
        cartItem = await cartItem.save();
        res.send(cartItem);
    } else {
        let cartItem = await Cart.findByIdAndUpdate(result[0]._id, {$inc : {'qty' : 1}});
        res.send(cartItem);
    }
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
