document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner toutes les cartes
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    // Éléments de la carte
    const plusIcon = card.querySelector('.fa-plus-circle');
    const minusIcon = card.querySelector('.fa-minus-circle');
    const quantityElement = card.querySelector('.quantity');
    const trashIcon = card.querySelector('.fa-trash-alt');
    const heartIcon = card.querySelector('.fa-heart');
    const unitPriceElement = card.querySelector('.unit-price');
    
    //  clic sur le +
    plusIcon.addEventListener('click', function() {
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotalPrice();
    });
    
    //  clic sur le -
    minusIcon.addEventListener('click', function() {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
      }
    });
    
    //  clic sur la corbeille
    trashIcon.addEventListener('click', function() {
      card.closest('.card-body').remove();
    });
    
    // clic sur le cœur 
    heartIcon.addEventListener('click', function() {
      this.classList.toggle('active');
      this.style.color = this.classList.contains('active') ? 'red' : '';
    });
    
    // Fonction pour mettre à jour le prix total (si vous ajoutez cet élément)
    function updateTotalPrice() {
      const quantity = parseInt(quantityElement.textContent);
      const unitPrice = parseFloat(unitPriceElement.textContent);
      const totalElement = card.querySelector('.total-price');
      
      if (totalElement) {
        totalElement.textContent = (quantity * unitPrice).toFixed(2) + ' $';
      }
    }
  });
});