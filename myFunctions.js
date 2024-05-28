// JavaScript source code

var detalisTable = document.getElementById('detalisTable');
var total = document.getElementById('total');
var tax = document.getElementById('tax');
var submit = document.getElementById('submit');
var cancel = document.getElementById('cancel');
var totalprice = 0;
var i = 0;
var captchaText;

function addProduct(item, price, ammount) {
    i++;
    ammount = 1;
    detalisTable.innerHTML += "<tr><td>" + i + "</td><td>" + item + "</td><td>" + price + "</td><td>" + ammount + "</td><td>" + (ammount * price) + "</td></tr>";
    totalprice += ammount * price;
    var taxValue = totalprice * 0.05;
    tax.innerHTML = taxValue;

    var totalAndtax = totalprice + taxValue;
    total.innerHTML = totalAndtax;

}


function clearfields() {
    detalisTable.innerHTML = "<caption class='cartDetails'>سلة المشتريات</caption><th>No</th><th>المشتريات</th><th>السعر</th><th>الكمية</th><th>المجموع</th>";
    return i = 0;
}


function submitFunc() {
    document.getElementById("purchaseForm").style.display = "block";
    generateCaptcha();
}

function validateForm() {


    var txtCompare = document.getElementById("txtCompare").value;

    var captcha = document.getElementById("txtCaptcha").value;

    if (captcha == "") {
        alert("يرجى إدخال رمز التحقق من الكابتشا");
        return false;
    }

    if (captcha != txtCompare) {
        alert("رمز التحقق من الكابتشا غير صحيح");
        return false;
    }

    alert("تمت عملية الشراء بنجاح");

}

function Captcha() {
    // Define the characters that can be used in the captcha code
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Generate a random string of 6 characters
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += chars[Math.floor(Math.random() * chars.length)];
    }

    // Set the value of the txtCaptcha element to the captcha code
    document.getElementById("txtCaptcha").value = captchaCode;
}

function toggleDetails(detailsId)
 {
    var infoDiv = document.getElementById(detailsId);
    if (infoDiv.style.display === 'none') {
      infoDiv.style.display = 'block';
    } else {
      infoDiv.style.display = 'none';
    }
  }