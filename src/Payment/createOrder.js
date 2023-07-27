import Razorpay from "razorpay";

  const RazorpayInstance  = new Razorpay({
    key_id:'rzp_test_hF8LqnBYn1ypf4',
    key_secret:'ZBjZErUQqkEGunGPU3N0gpwF'
})

export const createOrder=({
    amount,

})=>{
    RazorpayInstance.orders.create({
        amount,
        currency:"INR",

    }).then(res=>{
        const orderId  = res.id
        return orderId
    }).catch(err=>{
        alert(err)
    })
}

