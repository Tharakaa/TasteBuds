import React, { useRef, useEffect } from "react";

export default function Paypal({onComplete}) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal

      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Table",
                amount: {
                  currency_code: "USD",
                  value: 0.01,
                },
              },
            ],
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
    if (payment.status == 'COMPLETED') {
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
