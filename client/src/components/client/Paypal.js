import React, { useRef, useEffect } from "react";

export default function Paypal({ onComplete, orderData }) {
  const paypal = useRef();

  const itemList = orderData.map((item) => {
    return {
      reference_id: (Math.random() * 1000000000).toFixed(0),
      description: `${item.itemId.name} x ${item.qty}`,
      amount: {
        currency_code: "USD",
        value: (item.itemId.price * item.qty || 0).toFixed(2),
      },
    };
  });

  useEffect(() => {
    window.paypal

      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: itemList,
          });
        },

        onApprove: async (data, actions) => {
          const order = await actions.order.capture();

          orderDetails(order, data);
        },
        onError: (err) => {
          console.log(err);
        },
      })

      .render(paypal.current);
  }, []);

  const orderDetails = (payment, data) => {
    let paymentDetails = {
      paymentId: payment.id,
      createTime: payment.create_time,
      status: payment.status,
      paymentMethod: data.paymentSource,
    };
    if (payment.status == "COMPLETED") {
      onComplete();
    }
    console.log(paymentDetails);
  };
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
