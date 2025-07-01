document.addEventListener('DOMContentLoaded', () => {
  const plusButtons = document.querySelectorAll('.fa-plus-circle');
  const minusButtons = document.querySelectorAll('.fa-minus-circle');
  const quantities = document.querySelectorAll('.quantity');
  const unitPrices = document.querySelectorAll('.unit-price');
  const totalPriceElement = document.querySelector('.total');

  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const plusIcon = card.querySelector('.fa-plus-circle');
    const minusIcon = card.querySelector('.fa-minus-circle');
    const quantityElement = card.querySelector('.quantity');
    const trashIcon = card.querySelector('.fa-trash-alt');
    const heartIcon = card.querySelector('.fa-heart');
    const unitPriceElement = card.querySelector('.unit-price');
    
    plusIcon.addEventListener('click', function() {
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotalPrice();
    });
    
    minusIcon.addEventListener('click', function() {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
      }
    });
    
    trashIcon.addEventListener('click', function() {
      card.closest('.card-body').remove();
    });
    
    heartIcon.addEventListener('click', function() {
      this.classList.toggle('active');
      this.style.color = this.classList.contains('active') ? 'red' : '';
    });
  });

  function updateTotalPrice() {
    let total = 0;
    quantities.forEach((quantity, index) => {
      let qty = parseInt(quantity.textContent);
      let price = parseInt(unitPrices[index].textContent);
      total += qty * price;
    });
    totalPriceElement.textContent = `${total} $`;
  }
});
