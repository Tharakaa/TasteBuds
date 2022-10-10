const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");

const placeOrder = async (req, res) => {
    let userId = req.query.userId;
    let paymentType = req.body.paymentType;
    // get cart for user
    let result = await Cart.find({ userId: userId }).populate('itemId');
    if (result) {
        let orderItems = [];
        let totalAmount = 0;
        for (let item of result) {
            // total amount is calculated in backend for security concerns
            totalAmount += (item.qty * item.itemId.price)
            let orderItem = {
                itemId : item.itemId._id,
                qty: item.qty,
                unitPrice: item.itemId.price
            };
            orderItems.push(orderItem);
        }
        // New order object is created and saved
        let order = new Order({
            userId: userId,
            itemIds: orderItems,
            totalAmount: totalAmount,
            paymentType: paymentType
        })
        result = await order.save();
        // cart is cleared for the particular user
        await Cart.deleteMany({ userId: userId })
    }
    res.send(result);
};

// get all orders for the user
const getOrdersForUser = async (req, res) => {
    let userId = req.query.userId;
    let result = await Order.find({ userId: userId }).populate('itemIds.itemId');
    res.send(result);
};

module.exports = { getOrdersForUser, placeOrder };
