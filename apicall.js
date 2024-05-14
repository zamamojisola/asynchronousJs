//'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'
// "https://dummyjson.com/products"
// 'https://currency-exchange.p.rapidapi.com/listquotes'
 
 
 
//  fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random')
// .then((result) => result.json())
// .then((gotresult) => console.log(gotresult))
// .catch( error => console.log(error))

// fetch("https://dummyjson.com/products/?limit=10")
// .then((result) => result.json())
// .then((gotresult) => {
//     console.log(`productName - ${gotresult.products[0].title}`)
//     console.log(`productDescription - ${gotresult.products[0].description}`)
// })
// .catch( error => console.log(error))



// fetch("https://dummyjson.com/products/?limit=10")
// .then((result) => result.json())
// .then((gotresult) => {
//     let fetchedobj = gotresult.products
//     let minPrice = gotresult.products[0].price
//    let filt =  fetchedobj.filter((ele) => {
//         if(ele.price < minPrice){
//         return ele.price
//         }
//     })
//     console.log(filt[0].price)
// })
// .catch( error => console.log(error))



// fetch("https://dummyjson.com/products/?limit=10")
// .then((result) => result.json())
// .then((gotresult) => {
//     let prices = []
//     let arrObj =  gotresult.products 


// })
// .catch( error => console.log(error))


// fetch("https://dummyjson.com/products/?limit=10")
// .then((product)=> product.json())
// .then(({products}) => {
//     let prices = []
//     products.map((ele) => prices.push(ele.price))
//     let minimumPrice = Math.min(...prices)
//     console.log(minimumPrice)
// })
// .catch((error) => console.log(error))



fetch("https://dummyjson.com/products/?limit=10")
.then((productFile) => productFile.json())
.then(({products}) =>{
   let sorted = products.sort((a,b) => a.price - b.price )
   console.log(`product Price - ${sorted[0].price}`)
   console.log(`product Title - ${sorted[0].title}`)
   console.log(`product Desription - ${sorted[0].description}`)
} )
