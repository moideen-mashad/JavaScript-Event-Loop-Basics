// const getproductList = async (id) => {
//     try {
//         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//         const data = await response.json()
//         console.log(data);
//     } catch (err) {
//         console.log("There is an error", err);
//     }
// }

// getproductList(5)



// by using PROMISSE method 

// const getproductListpromise = (id) => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://fakestoreapi.com/products/${id}`)
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err))
//     })
// }

// getproductListpromise(10).then(data => console.log(data)).catch(err => console.log(err))


// const getData = async () => {

//     try {
//         let response = await fetch("https://fakestoreapi.com/products");
//         let data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log("Error fetching data", error)
//     }
// }

// getData();



// let result = false;



// let student = {
//     name: "moideen",
//     age: 22,
//     isStudent: true
// }

// let student2 = { ...student };
// student2.name = "kabeer";

// console.log(student);       //moideen
// console.log(student2);      //kabeer



// let getData = async () => {
//     try {
//         let response = await fetch("https://fakestoreapi.com/products");
//         let data = await response.json();
//         console.log(data);
//     }
//     catch (err) {
//         console.log("Error fetching data", err);
//     }
// }

// getData();


// const newGetData = async () => {
//     return new Promise((res, rej) => {
//         fetch("https://fakestoreapi.com/products")
//             .then(response => response.json())
//             .then(data => res(data))
//             .catch(err => rej(err))
//     })
// }

// newGetData()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))