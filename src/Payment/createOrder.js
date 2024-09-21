import Razorpay from "razorpay";

  const RazorpayInstance  = new Razorpay({
    key_id:'',
    key_secret:''
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

