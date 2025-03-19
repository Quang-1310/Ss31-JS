// Lấy theo id 
const heading1 = document.getElementById("heading-1");
console.log(heading1);


// Lấy theo class
const cources = document.getElementsByClassName("cource");
console.log(cources);


//
const listProductElement = document.querySelector("#list-product");
console.log(listProductElement);

const productItem = document.querySelectorAll(".product");
console.log(productItem);

//Lấy ra tất cả các thẻ li có trong trang
const listLiTags = document.querySelectorAll("li");
console.log(listLiTags);

// Lấy ra input có name 
const emailElement = document.querySelector("input[name = 'email']");
console.log(emailElement);

const products = document.querySelectorAll("#list-product li");
console.log(products);

const userNameElement = document.querySelector("#userName");
console.log(userNameElement.innerText);
console.log(userNameElement.innerHTML);
console.log(userNameElement.textContent);

// Sự khác nhau giữa innerText, innerHTML, textContent
const demoElement = document.querySelector("#demo");
console.log("innertext: ",demo.innerText);
console.log("innerHTML: ",demo.innerHTML);
console.log("textContent: ",demo.textContent);

const ageElement = document.querySelector("#age");
ageElement.textContent = "Tôi 40 tuổi";

// classLisst

const formElement = document.querySelector("#form");
// Thêm class vào 1 phần tử
formElement.classList.add("form-add");

// Xoá class khỏi 1 phần tử
formElement.classList.remove("form");

//Kiểm tra class đã tồn tại trong phần tử chưa
formElement.classList.contains("form");
console.log(formElement.classList.contains("hidden"));

//Thêm/xoá class nếu đã/chưa tồn tại
formElement.classList.toggle("hidden");
