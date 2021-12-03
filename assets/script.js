// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Kelsey Bassanini"

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Updates cookie quantity - select elements by ID
//function updateQuantity(displayQuantity){
//   let quantity = document.querySelector('#qty-gb')
//   quantity.innerHTML = displayQuantity
//}

// Start quantity and variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Buttons - input elements
//const minusGb = document.querySelector('#minus-gb')
//const addGb = document.querySelector('#add-gb')
//const minusCc = document.querySelector('#minus-cc')
//const addCc = document.querySelector('#add-cc')
//const minusSugar = document.querySelector('#minus-sugar')
//const addSugar = document.querySelector('#add-sugar')

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(e) {
    gb++;
    document.getElementById('qty-gb').textContent=gb;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function(e) {
    gb--;
    document.getElementById('qty-gb').textContent=gb;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function(e) {
    cc++;
    document.getElementById('qty-cc').textContent=cc;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function(e) {
    cc--;
    document.getElementById('qty-cc').textContent=cc;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function(e) {
    sugar++;
    document.getElementById('qty-sugar').textContent=sugar;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function(e) {
    sugar--;
    document.getElementById('qty-sugar').textContent=sugar;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})


// // Event listener for clicks on the "+" button for Gingerbread cookies
// document.getElementById('add-gb').addEventListener('click', function(e) {
//     quantity++
//     updateQuantity(`Quantity: ${quantity}`)
//     // HINT: You can delete this console.log after you no longer need it!
//     console.log('Gingerbread + button was clicked!')
// })

// // TODO: Hook up event listeners for the rest of the buttons

// // Event listener for clicks on the "-" button for Chocolate Chip cookies
// document.getElementById('minus-gb').addEventListener('click', function(e) {
//     if (quantity >0) {
//         quantity--
//     }
//     updateQuantity(`Quantity: ${quantity}`)
//     // HINT: You can delete this console.log after you no longer need it!
//     console.log('Chocolate Chip + button was clicked!')
// })

// // Event listener for clicks on the "+" button for Chocolate Chip cookies
// addCc.getElementById('add-gb').addEventListener('click', function(e) {
//     quantity++
//     updateQuantity(`Quantity: ${quantity}`)
//     // HINT: You can delete this console.log after you no longer need it!
//     console.log('Chocolate Chip + button was clicked!')
// })

// // Event listener for clicks on the "-" button for Sugar Sprinkles cookies
// minusSugar.getElementById('minus-gb').addEventListener('click', function(e) {
//     if (quantity >0) {
//         quantity--
//     }
//     updateQuantity(`Quantity: ${quantity}`)
//     // HINT: You can delete this console.log after you no longer need it!
//     console.log('Sugar Sprinkle + button was clicked!')
// })

// // Event listener for clicks on the "+" button for Sugar Sprinkles cookies
// addSugar.getElementById('add-gb').addEventListener('click', function(e) {
//     quantity++
//     updateQuantity(`Quantity: ${quantity}`)
//     // HINT: You can delete this console.log after you no longer need it!
//     console.log('Sugar Sprinkle + button was clicked!')
// })


