// let productURL = "https://dummyjson.com/products";

// fetch(productURL)
// .then((response) => response.json())
// .then(({products}) => {
//     let leastProduct = products.sort((a, b) => a.price - b.price)[0]
//     console.log(leastProduct)
// })


let arr = ["azeez", "ola", "Tobi", "Alim"]
let result = arr.filter((elem) => {
    if (elem.length === 4) {
        return true
    }
})
console.log(result)

console.log(arr.push("bayo")) 