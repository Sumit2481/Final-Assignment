// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('All fields are required.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class "add-to-cart"
    const buyNowButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listener to each "Add to Cart" button
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag

            alert('Item added to cart!'); //alert
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class "buy-now"
    const buyNowButtons = document.querySelectorAll('.buy-now');

    // Add click event listener to each "Buy Now" button
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag

            alert('Item will be delivered soon! Thanks for shopping with us.'); // alert
        });
    });
});

