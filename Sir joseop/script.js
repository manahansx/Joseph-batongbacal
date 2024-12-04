document.addEventListener("DOMContentLoaded", function() {
    
    let cart = [];

    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const productItem = button.closest('.product-item');
            const productId = productItem.dataset.productId;
            const productName = productItem.dataset.productName;
            const productPrice = parseFloat(productItem.dataset.productPrice);

            
            const product = {
                id: productId,
                name: productName,
                price: productPrice
            };

            
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            if (existingProductIndex === -1) {
                cart.push(product); 
            }

            
            updateCartCount();
        });
    });

    
    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length; // Set cart count
		
    }
});
