// Get all the quantity control buttons and quantity inputs
const minusBtns = document.querySelectorAll('.minus-btn');
const plusBtns = document.querySelectorAll('.plus-btn');
const quantityInputs = document.querySelectorAll('.quantity-input');
const removeBtns = document.querySelectorAll('.remove-btn');

// Get the cart summary elements
const subtotalElement = document.querySelector('.subtotal');
const totalElement = document.querySelector('.total');

// Update the cart total when a quantity is changed
function updateCartTotal() {
  let subtotal = 0;
  quantityInputs.forEach((input, index) => {
    const price = parseFloat(document.querySelectorAll('.cart-item p')[index].textContent.slice(1));
    const quantity = parseInt(input.value);
    subtotal += price * quantity;
  });
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  totalElement.textContent = `$${subtotal.toFixed(2)}`;
}

// Add event listeners to the quantity control buttons
minusBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const input = quantityInputs[index];
    if (input.value > 1) {
      input.value--;
      updateCartTotal();
    }
  });
});

plusBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const input = quantityInputs[index];
    input.value++;
    updateCartTotal();
  });
});

// Add event listener to the remove buttons
removeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.cart-item');
    item.remove();
    updateCartTotal();
  });
});

// Initialize the cart total
updateCartTotal();
