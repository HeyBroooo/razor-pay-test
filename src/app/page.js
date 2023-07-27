'use client'
import { loadScript } from '@/LoadScript';
import { createOrder } from '@/Payment/createOrder';
import React from 'react';

export default function Page() {
  const pay = async () => {
    try {
      const { orderId } = await createOrder({
        amount: "5000"
      });

      const resRazorpay = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!resRazorpay) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      var options = {
        key: "rzp_test_f0oeLxDWGbooLG",
        amount: "5000",
        order_id: orderId,
      };

      var paymentObj = new window.Razorpay(options);
      paymentObj.open();
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
      <span onClick={pay}></span>
  );
}
