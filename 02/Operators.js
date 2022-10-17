display = (data) => {
    document.getElementById("header").innerText = data
}

var num1 = 17;
var num2 = 8;

display(num1 + num2)
display(num1 * num2)

display(num1 > num2)

var sellingPrice = 199;
var listingPrice = 799;
var discountPercent = (((listingPrice - sellingPrice) / listingPrice) * 100).toPrecision(2) + " %"

display(discountPercent)

display(sellingPrice > listingPrice)

display(typeof listingPrice)

Math.round(15.55)