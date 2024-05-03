// Creating a function and object properties
function Shoes(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
}

// create 5 new shoe objects
let Shoes1 = new Shoes("Nike", "Air", 500, 100);
let Shoes2 = new Shoes("Adidas", "UltraBoost", 800, 150);
let Shoes3 = new Shoes("Reebok", "Nano", 200, 180);
let Shoes4 = new Shoes("Vivaia", "Wedges", 700, 80);
let Shoes5 = new Shoes("Allbirds", "Tree Breezer", 450, 110);

// Creating an array to store the shoes objects
let shoesArray = [Shoes1, Shoes2, Shoes3, Shoes4, Shoes5];

// Function to search for shoes using for and if statements, and template literals
function searchItem(shoesArray, shoesItem){
    for (let i = 0; i < shoesArray.length; i++) {
        if (shoesArray[i].name === shoesItem) {
            return `${shoesItem} is available.`;
        }
    }
    return `${shoesItem} is not available.`;
}


// Ask for input from the user and log the return
let shoesItem = prompt("Please input which shoe you would like to find, Nike, Adidas, Reebok, Vivaia or Allbirds.");
console.table([searchItem(shoesArray, shoesItem)]); // Wrapped in a table

// Function to find shoes with the lowest value
function findLowestValue(shoesArray) {
    shoesArray.sort((a, b) => a.valuePerItem < b.valuePerItem ? -1 : 1);
    return `The shoes with the lowest value are: ${shoesArray[0].name} ${shoesArray[0].productCode} at ${shoesArray[0].valuePerItem}.`;
}
// Wrapped in a table
console.table([findLowestValue(shoesArray)]);



// Function to find the shoes with the highest value
function findHighestValue(shoesArray) {
    shoesArray.sort((a, b) => a.valuePerItem < b.valuePerItem ? 1 : -1);
    return `The shoes with the highest value are: ${shoesArray[0].name} ${shoesArray[0].productCode} at ${shoesArray[0].valuePerItem}.`;
}
// Wrapped in a table
console.table([findHighestValue(shoesArray)]);



// A function to edit all four properties of the shoes instances

// let shoesItemEdit = prompt("Please input which shoe you would like to edit, Nike, Adidas, Reebok, Vivaia or Allbirds.");


// function editShoe(shoesArray, shoeName, newname, newproductCode, newquantity, newvaluePerItem) {
    
//     // Find the shoe object with the matching name
//     let shoeToEdit = shoesArray.find(shoe => shoe.name === shoeName);

//     // If the shoe is found, can update its properties
//     if (shoeToEdit) {
//         Object.assign(shoeToEdit, {
//             "name": newname,
//             "productCode": newproductCode,
//             "quantity": newquantity,
//             "valuePerItem": newvaluePerItem
//         });
//         console.log("The shoe has been updated");
//     } else {
//         console.log("The shoe is not found.");
//     }
//     // Wrapped in a table
//     console.table(shoesArray);
// }

let shoesItemEdit = prompt("Please input which shoe you would like to edit, Nike, Adidas, Reebok, Vivaia or Allbirds.");

// Call the editShoe function with the input value
editShoe(shoesArray, shoesItemEdit);

function editShoe(shoesArray, shoeName) {
    // Get the new values for the shoe
    let newName = prompt("Enter the new name for the shoe:");
    let newProductCode = prompt("Enter the new product code:");
    let newQuantity = parseInt(prompt("Enter the new quantity:"));
    let newValuePerItem = parseFloat(prompt("Enter the new value per item:"));

    // Find the shoe object with the matching name
    let shoeToEdit = shoesArray.find(shoe => shoe.name === shoeName);

    // If the shoe is found, can update its properties
    if (shoeToEdit) {
        Object.assign(shoeToEdit, {
            "name": newName,
            "productCode": newProductCode,
            "quantity": newQuantity,
            "valuePerItem": newValuePerItem
        });
        console.log("The shoe has been updated");
    } else {
        console.log("The shoe is not found.");
    }
    // Wrapped in a table
    console.table(shoesArray);
}


// A function to order all the objects in ascending order based on the “Value per item” property
function ascendingValuePerItem(shoesArray) {
    shoesArray.sort((a, b) => a.valuePerItem - b.valuePerItem);
    const ascendingTableData = shoesArray.map(shoe => ({
        "Name": shoe.name,
        "Product Code": shoe.productCode,
        "quantity": shoe.quantity,
        "Value Per Item": shoe.valuePerItem
    }));
    return ascendingTableData;
}
// Wrapped in a table
console.table(ascendingValuePerItem(shoesArray));