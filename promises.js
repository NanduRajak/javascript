let cart = ["shirts", "pants", "shoes", "t-shirts"];

creatOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.massage);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWallet(balance);
  });

// producing

const pr = new Promise(function (reslove, reject) {
  if (!validateCart) {
    const err = "inavild cart";
    reject(err);
  }
  const orderId = 12345;
  if (orderId) {
    setTimeout(function () {
      reslove(orderId);
    }, 4000);
  }
});
return pr;
