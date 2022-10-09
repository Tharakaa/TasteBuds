const Cart = require("../models/cartModel");

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

module.exports = { getCartForUser, changeItemQty };
