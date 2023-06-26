let blackpink = ["JENNIE","LISA","ROSE","JISOO"]

function push() {
    
    for (let i = 0; i < 3; i++) {
        blackpink.push(i);
        
    }

    console.log(blackpink);
}

function unshift() {
    let a = "hommie"
blackpink.unshift(a);
console.log("đã thêm giá trị của a vào đầu blackpink",blackpink);
}
// div 2
function search() {
    // kỹ thuật cắm cờ 

    let arr = [1,2,3,4,5,6,7]
    let input = +prompt(` nhập vào 1 số bất kỳ`)
    let check = -1;
    for (let index = 0; index < arr.length; index++) {
        if (input== arr[index]) {
            check = index;
        }
    }
    if (check==-1) {
        console.log("không tìm thấy");
    }
    else {
        console.log(` vị trí ${check}`);
    }
}
function searchAll() {
    console.log("các thành viên của Blackpink là");
    for (let i = 0; i < blackpink.length; i++) {
        console.log(blackpink[i]);
       
   }
}

// Tìm phần tử lớn nhất trong mảng

function max() {
    let a = prompt("nhập vào đây dãy số bất kỳ ngăn cách bới dấu ,")

    let convert = a.split(",")
    console.log(convert);

    let max = convert[0];
    for (let i = 0; i < convert.length; i++) {
     if (max < convert[i]) {
        max = convert[i];        
     }
    }
    console.log(`số lớn nhất trong dãy bạn vừa nhập là ${max}`);
}

// Đảo ngược mảng

function reverse() {
    let a = prompt("nhập vào đây dãy số bất kỳ ngăn cách bới dấu ,")

    let convert = a.split(",")
console.log(`đây là list ban đầu ${convert}`);
let reverse = []
for (let i = convert.length - 1; i >=0; i--) {
    
    reverse.push(convert[i])
}
console.log(`đây là mảng đảo ngược ${reverse}`);
}
//BÀI TẬP
//LUYỆN TẬP VỚI MẢNG
//bài 1
function e1() {
let string = "";
for (let i = 0; i < blackpink.length; i++) {
string = string + blackpink[i] + " "// tìm phím cách   
}
console.log(string);
}
//bài 2
function e2() {
    let blackpink_reverse = [];
    for (let i = blackpink.length -1; i >=0; i--) {
        blackpink_reverse.push(blackpink[i])
        
    }
    console.log(blackpink_reverse);
    let string = []
    for (let i = 0; i < blackpink_reverse.length; i++) {
        string = string + blackpink_reverse[i] + " "
        
    }
    console.log(string);
}
// bài 3
function e31() {//cách 1 dùng splice method
    blackpink.splice(1,1,)
    let string = "";
for (let i = 0; i < blackpink.length; i++) {
string = string + blackpink[i] + " "// tìm phím cách   
}
console.log(string);
}
function e32() {
 let array = []
 for (let i = 0; i < blackpink.length; i++) {
    if (i==1) {
    }    
    else{
        array.push(blackpink[i])
    }
 }
 console.log(array);
 let string = "";
 for (let i = 0; i < array.length; i++) {
 string = string + array[i] + " "// tìm phím cách   
 }
 console.log(string);
}

function e4() {
    let numbers = prompt("nhập các số cần tính phân cách nhay bởi dấu ,")
    let array = numbers.split(",")
let sum = 0;
for (let i = 0; i < array.length; i++) {
   sum = sum + parseInt(array[i])
}
console.log(`tong các số vừa nhập là ${sum}`);
}

// BÀI TẬP TỔNG HỢP
// BÀI 1 viết chương trình cho người dùng nhập vào 1 dãy số
//ngăn cách nhau bởi dấu , rồi tính tổng tất cả số đó
function r1() {
    let input = prompt(`nhập số cần tính cách nhau bởi dấu ,`)
    let array = input.split(",")
    let sum = 0;
for (let i = 0; i < array.length; i++) {
   sum = sum + parseInt(array[i])
}
console.log(` tổng các số vừa nhập là ${sum}`);
}
// bài 2
function r2() {
    let input = prompt(`nhập số cần tính cách nhau bởi dấu ,`)
    let array = input.split(",")
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (max<array[i]) {
            max = array[i]
        }
        if (min>array[i]) {
            min = array[i]
    }
    console.log(` số lớn nhất là ${max}`);
    console.log(` số nhỏ nhất là ${min}`);
}
}
function r3() {
    let input = prompt(`nhập số cần tính cách nhau bởi dấu ,`)
    let array = input.split(",")
    console.log(array);
   for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
    if (Number(array[i])>Number(array[j])) {
        let temp = array[j];
        array[j]=array[i];
        array[i]=temp;        
    }
   }     
   }
   console.log(array);
}
function r4() {
    let array = [1,1,2,2,5,5,4,3,6];
    let maxcount= 0;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
       let count = 1;
       for (let j = 0; j < array.length; j++) {
        if (array[i]===array[j]) {
            count++;
        }        
       }
       if (count>maxcount) {
        maxcount=count;
        newArray = [array[i]]
    }
    else if (maxcount===count) {
        newArray.push(Number(array[i]));
    }
    }
    console.log(newArray.join(","));
}
function r5() {
    let todoList = ["go to school at 7am","read book"]

    let input=prompt(`Nhập C R U D E`).toLowerCase()

    switch (input) {
        case "c":
            let input = prompt(` nhập vào công việc cần làm`)
            console.log(`nhập mới`);
            break;
        case "r":
            console.log(`in ra toàn bộ`);
            break;
        case "u":
            console.log(`update`);
            break;
        case "d":
            console.log(`xóa`);
            break;
        case "e":
            console.log(`exit`);
            break;
    
        default:
            break;
    }
}
function r6() {//bài giỏ hàng

let store = ["laptop","keyboard","mouse","pc"];
    let cart = [
        ["laptop",0],
        ["keyboard",0],
        ["mouse",0],
        ["pc",0],
];

let input = prompt("Nhập vào C/R/U/D/E").toUpperCase()
let state = true;
while (state) {
    if (input === "C") {
        // cho người dùng nhập vào sản phẩm muốn mua
    let addProduct = prompt("Nhập vào sản phẩm muốn mua")
    let checkstore = -1;
    for (let i = 0; i < store.length; i++) {
        if (addProduct === store[i]) {
            checkstore = i;        
        }
    }
    if (checkstore == -1) {
        alert("Sản phẩm bạn tìm không tồn tại trong của hàng")
    }
    else{
        let add = +prompt(` Nhập số lượng ${store[checkstore]} bạn muốn mua`)
        cart[checkstore][1] = cart[checkstore][1]+ add;
    }
    console.log("Giỏ hàng của bạn bao gồm");
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][1]!= 0) {
            console.log(`${i+1} ${cart[i][0]} : ${cart[i][1]}`);
        }    }
    }
    else if (input === "R") {
        console.log(`Cửa hàng bán:`);
    for (let i = 0; i < store.length; i++) {
       console.log(`${i+1} : ${store[i]}`);
    }
    console.log("Giỏ hàng của bạn gồm");
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][1]!= 0) {
            console.log(`${i+1} ${cart[i][0]} : ${cart[i][1]}`);
        }    }
    }
    else if (input === "U") {
        let updateIndex = +prompt("Nhập vào vị trí muốn update số lượng (từ 1 đến 4)")
        let updateNumber = +prompt("Nhập vào số lượng cần update (số tự nhiên 0;1;2;... nhé)")
    cart[updateIndex-1][1]= updateNumber;
    console.log("Giỏ hàng của bạn gồm");
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][1]!= 0) {
            console.log(`${i+1} ${cart[i][0]} : ${cart[i][1]}`);
        }    }
    }
    
    else if (input === "D") {
    let deleteIndex = prompt("Nhập vào vị trí muốn xóa khỏi giỏ hàng (số tự nhiên từ 1 đến 4)");
    cart[deleteIndex-1][1]=0;
    console.log("Giỏ hàng của bạn gồm");
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][1]!= 0) {
            console.log(`${i+1} ${cart[i][0]} : ${cart[i][1]}`);
        }    }
        
    }
    else if (input === "E") {
        alert("Cảm ơn bạn đã mua hàng")
        state = false;
    }
    else{
        alert("Anh nhập lại hộ em cái!!!!!!")

    }
}



}