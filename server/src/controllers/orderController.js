const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");

const placeOrder = async (req, res) => {
    let userId = req.query.userId;
    let paymentType = req.body.paymentType;
    let result = await Cart.find({ userId: userId }).populate('itemId');
    if (result) {
        let orderItems = [];
        let totalAmount = 0;
        for (let item of result) {
            totalAmount += (item.qty * item.itemId.price)
            let orderItem = {
                itemId : item.itemId._id,
                qty: item.qty,
                unitPrice: item.itemId.price
            };
            orderItems.push(orderItem);
        }
        let order = new Order({
            userId: userId,
            itemIds: orderItems,
            totalAmount: totalAmount,
            paymentType: paymentType
        })
        result = await order.save();
        await Cart.deleteMany({ userId: userId })
    }
    res.send(result);
};

const getOrdersForUser = async (req, res) => {
    let userId = req.query.userId;
    let result = await Order.find({ userId: userId }).populate('itemIds.itemId');
    res.send(result);
};

module.exports = { getOrdersForUser, placeOrder };
