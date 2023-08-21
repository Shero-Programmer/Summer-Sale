let totalAmount = 0;
let totalDiscount = 0;
let totalPayment = 0;

function purchaseClick(target) {
  const productName = target.childNodes[3].childNodes[3].innerText;
  const p = document.createElement('p');
  p.style.fontSize = '20px';
  p.style.fontWeight = 'bold';
  p.innerText = '✔️ ' + productName;
  const productNameContainer = document.getElementById('add-to-cart');
  productNameContainer.appendChild(p);
  const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
  totalAmount = parseInt(totalAmount) + parseInt(price);
  totalPayment = parseInt(totalPayment) + parseInt(price);
  document.getElementById('total-payment').innerText = totalPayment;
  totalAmount = document.getElementById('total-amount').innerText =
    totalAmount.toFixed(2);
  const purchaseBtn = document.getElementById('purchase-btn');
  if (totalAmount > 0) {
    purchaseBtn.disabled = false;
  }
  const applyBtn = document.getElementById('apply-btn');
  if (totalAmount >= 200) {
    applyBtn.disabled = false;
  }
}

function applyBtnClick() {
  const couponCode = document.getElementById('coupon-code');
  const couponCodeValue = couponCode.value;
  if (couponCodeValue == 'SELL200') {
    const discount = document.getElementById('total-discount');
    const discountPercentage = 20;
    totalDiscount = (totalAmount * discountPercentage) / 100;
    discount.innerText = totalDiscount.toFixed(2);
    const totalPay = document.getElementById('total-payment');
    totalPayment = totalAmount - totalDiscount;
    totalPay.innerText = totalPayment.toFixed(2);
  } else {
    alert('Invalid Coupon Code');
  }
}

function resetClick() {
  let totalAmount = 0;
  document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
  let totalPayment = 0;
  document.getElementById('total-payment').innerText = totalPayment.toFixed(2);

  let totalDiscount = 0;
  document.getElementById('total-discount').innerText =
    totalDiscount.toFixed(2);

  document.getElementById('add-to-cart').innerHTML = ' ';
  document.getElementById('coupon-code').value = ' ';
}
