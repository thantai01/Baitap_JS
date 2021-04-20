// class Car {
//     constructor(_id, _brand, _name, _type, _price) {
//         this.id = _id;
//         this.brand = _brand;
//         this.name  = _name;
//         this.type  = _type;
//         this.price = _price;
//     }
// }
//
let listProduct =[];
// function addProduct() {
//     let id = prompt("ID of car")
//     let brand = prompt("Brand name of car")
//     let name = prompt("Name of car")
//     let type = prompt("Type of car")
//     let price = prompt("Price of car")
// }

let str = '<tr>' +
    '<td>Brand Name</td>' +
    '<td></td>' +
    '<td></td>' +
    '</tr>'
document.getElementById("display").innerHTML = str;
listBuild(listProduct);

function listBuild(x) {
    let str = '<tr>' +
        '<th>Brand Name</th>' +
        '<td></td>' +
        '<td>' + listProduct.length + ' Brands </td>' +
        '</tr>'
    for (let i = 0; i < listProduct.length; i++) {
        str = str + '<tr><td>' + x[i] + '</td>' +
            '<td><button id="edit" onclick="" >Edit</button></td>' +
            '<td><button id="delete" onclick="deleteItems()">Delete</button></td></tr>';
    }
    document.getElementById("display").innerHTML = str;
}


function addProduct() {
    let productItems = document.getElementById("add").value;
    document.getElementById("add").value = "";
    console.log(productItems + " added to the Array");
    listProduct.push(productItems);
    listBuild(listProduct);
}

function deleteItems(inDex) {
    listProduct.splice(inDex, 1);
    console.log(listProduct);
    listBuild(listProduct);
}







