// script.js (for all book detail pages)

document.addEventListener('DOMContentLoaded', function() {
    function getUrlParameter(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const bookParam = getUrlParameter('book');
    const bookTitleElement = document.getElementById('book-title');
    const bookAuthorElement = document.getElementById('book-author');
    const bookPriceElement = document.getElementById('book-price');
    const bookDescriptionElement = document.getElementById('book-description');
    const bookCoverElement = document.getElementById('book-cover');

    if (bookParam) {
        let bookData = {};

        // Define book data based on the page and URL parameter
        if (window.location.pathname.includes("bestsellers-book-details.html")) {
            bookData = {
                'by-a-thread': {
                    title: 'By a Thread',
                    author: 'Lucy Score',
                    price: '$16.99',
                    description: 'A witty and charming romance novel filled with slow-burn tension, irresistible chemistry, and heartwarming moments.',
                    image: 'images/bestseller1.jpg'
                },
                'twisted-love': {
                    title: 'Twisted Love',
                    author: 'Ana Huang',
                    price: '$14.99',
                    description: 'A dark and forbidden love story that explores the complexities of desire, obsession, and redemption.',
                    image: 'images/bestseller2.jpg'
                },
                'queen-charlotte': {
                    title: 'Queen Charlotte',
                    author: 'Julia Quinn',
                    price: '$19.99',
                    description: 'The story of Queen Charlotte’s rise to prominence and power, this Bridgerton-prequel novel is full of romance and drama.',
                    image: 'images/bestseller3.jpg'
                },
            };
        } else if (window.location.pathname.includes("childrens-book-details.html")) {
            bookData = {
                'hungry-caterpillar': {
                    title: 'The Very Hungry Caterpillar',
                    author: 'Eric Carle',
                    price: '$10.99',
                    description: 'A timeless classic, <i>The Very Hungry Caterpillar</i> takes young readers on a journey as a tiny caterpillar eats its way through the days of the week before transforming into a beautiful butterfly.',
                    image: 'images/childrens1.jpg'
                },
                'wild-things': {
                    title: 'Where the Wild Things Are',
                    author: 'Maurice Sendak',
                    price: '$12.99',
                    description: 'A classic tale of a child’s imagination and adventure, this book explores the power of fantasy and the importance of home.',
                    image: 'images/childrens2.jpg'
                },
                'goodnight-moon': {
                    title: 'Goodnight Moon',
                    author: 'Margaret Wise Brown',
                    price: '$8.99',
                    description: 'A soothing bedtime story, this book gently guides children through a calming ritual of saying goodnight to everything in their room.',
                    image: 'images/childrens3.jpg'
                },
            };
        } else if (window.location.pathname.includes("nonfiction-book-details.html")) {
          bookData = {
              'sapiens': {
                  title: 'Sapiens',
                  author: 'Yuval Noah Harari',
                  price: '$15.99',
                  description: 'A brief history of humankind that explores how Homo sapiens evolved and shaped the world.',
                  image: 'images/non-fiction1.jpg'
              },
              'educated': {
                  title: 'Educated',
                  author: 'Tara Westover',
                  price: '$13.99',
                  description: 'An unforgettable memoir about a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
                  image: 'images/non-fiction2.jpg'
              },
              'power-of-habit': {
                  title: 'The Power of Habit',
                  author: 'Charles Duhigg',
                  price: '$14.99',
                  description: 'An examination of the science of habit formation, showing how habits can be changed to improve lives, businesses, and communities.',
                  image: 'images/non-fiction3.jpg'
              },
          };
        } else if (window.location.pathname.includes("fiction-book-details.html")) {
          bookData = {
              'the-great-gatsby': {
                  title: 'The Great Gatsby',
                  author: 'F. Scott Fitzgerald',
                  price: '$12.99',
                  description: 'A classic novel set in the Jazz Age, <i>The Great Gatsby</i> follows the enigmatic Jay Gatsby and his unrelenting pursuit of the American Dream. This literary masterpiece captures themes of wealth, love, and the corruption of high society.',
                  image: 'images/fiction1.jpg'
              },
              'to-kill-a-mockingbird': {
                  title: 'To Kill a Mockingbird',
                  author: 'Harper Lee',
                  price: '$14.99',
                  description: 'Set in the American South, this Pulitzer Prize-winning novel explores themes of racial injustice and the loss of innocence through the eyes of a young girl.',
                  image: 'images/fiction2.jpg'
              },
              '1984': {
                  title: '1984',
                  author: 'George Orwell',
                  price: '$11.99',
                  description: 'A dystopian novel that warns of the dangers of totalitarianism and surveillance, this book remains a chilling and relevant commentary on power and control.',
                  image: 'images/fiction3.jpg'
              }
          };
        } else {
            bookData = {
                'house-for-mr-biswas': {
                    title: 'A House for Mr Biswas',
                    author: 'V.S. Naipaul',
                    price: '$14.99',
                    description: 'A powerful and moving novel, <i>A House for Mr Biswas</i> is a story of one man\'s struggle for independence and self-worth in colonial Trinidad.',
                    image: 'images/book1.jpg'
                },
                'golden-child': {
                    title: 'Golden Child',
                    author: 'Claire Adam',
                    price: '$19.99',
                    description: 'A haunting and beautifully written novel that explores the complexities of family, identity, and the weight of expectations.',
                    image: 'images/book2.jpg'
                },
                'green-days': {
                    title: 'Green Days by the River',
                    author: 'Michael Anthony',
                    price: '$12.99',
                    description: 'A coming-of-age story set in rural Trinidad, this novel beautifully captures the innocence and wonder of youth.',
                    image: 'images/book3.jpg'
                }
            };
        }

        if (bookData[bookParam]) {
            const book = bookData[bookParam];
            bookTitleElement.textContent = book.title;
            bookAuthorElement.textContent = `By ${book.author}`;
            bookPriceElement.textContent = book.price;
            bookDescriptionElement.innerHTML = book.description;
            bookCoverElement.src = book.image;
            bookCoverElement.alt = book.title;
        } else {
            // Handle book not found
            bookTitleElement.textContent = 'Book Not Found';
            bookAuthorElement.textContent = '';
            bookPriceElement.textContent = '';
            bookDescriptionElement.textContent = '';
            bookCoverElement.src = '';
            bookCoverElement.alt = '';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.purchase-options .button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const bookContainer = button.closest('.book-container');
            const bookTitle = bookContainer.querySelector('#book-title').textContent;
            const bookAuthor = bookContainer.querySelector('#book-author').textContent;
            const bookPrice = bookContainer.querySelector('#book-price').textContent;
            const bookCover = bookContainer.querySelector('#book-cover').src;

            const book = {
                title: bookTitle,
                author: bookAuthor,
                price: bookPrice,
                cover: bookCover,
                quantity: 1, // Initialize quantity to 1
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let existingBook = cart.find(item => item.title === book.title);

            if (existingBook) {
                existingBook.quantity++; // Increment quantity if book already exists
            } else {
                cart.push(book);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'cart.html';
        });
    });

    // Cart Page Functionality (If on cart.html)
    if (window.location.pathname.endsWith('cart.html')) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItems = document.getElementById('cart-items');
        let total = 0;

        cart.forEach((book, index) => {
            let item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `
                <img src="${book.cover}" style="height: 100px;">
                <p>${book.title} by ${book.author}</p>
                <p>Price: ${book.price}</p>
                <p>Quantity: 
                    <button class="quantity-btn decrease" data-index="${index}">-</button>
                    <span class="quantity">${book.quantity}</span>
                    <button class="quantity-btn increase" data-index="${index}">+</button>
                </p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(item);

            // Calculate total for each book
            let price = parseFloat(book.price.replace('$', ''));
            total += price * book.quantity;
        });

        document.getElementById('cart-total').textContent = 'Total: $' + total.toFixed(2);
        localStorage.setItem('cartTotal', total.toFixed(2)); // Store initial total
        console.log("Stored initial cartTotal:", total.toFixed(2)); // Log initial total

        // Quantity Update Buttons
        const quantityBtns = document.querySelectorAll('.quantity-btn');
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                if (this.classList.contains('decrease') && cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else if (this.classList.contains('increase')) {
                    cart[index].quantity++;
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            });
        });

        // Remove Button
        const removeBtns = document.querySelectorAll('.remove-btn');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            });
        });

        function updateCartDisplay() {
            cartItems.innerHTML = ''; // Clear cart display
            let newTotal = 0;
            cart.forEach((book, index) => {
                let item = document.createElement('div');
                item.classList.add('cart-item');
                item.innerHTML = `
                    <img src="${book.cover}" style="height: 100px;">
                    <p>${book.title} by ${book.author}</p>
                    <p>Price: ${book.price}</p>
                    <p>Quantity: 
                        <button class="quantity-btn decrease" data-index="${index}">-</button>
                        <span class="quantity">${book.quantity}</span>
                        <button class="quantity-btn increase" data-index="${index}">+</button>
                    </p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                cartItems.appendChild(item);

                let price = parseFloat(book.price.replace('$', ''));
                newTotal += price * book.quantity;
            });
            document.getElementById('cart-total').textContent = 'Total: $' + newTotal.toFixed(2);
            localStorage.setItem('cartTotal', newTotal.toFixed(2)); // Store updated total
            console.log("Stored cartTotal:", newTotal.toFixed(2)); // Log updated total

            // Re-add event listeners after updating display
            const quantityBtns = document.querySelectorAll('.quantity-btn');
            quantityBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    if (this.classList.contains('decrease') && cart[index].quantity > 1) {
                        cart[index].quantity--;
                    } else if (this.classList.contains('increase')) {
                        cart[index].quantity++;
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                });
            });

            const removeBtns = document.querySelectorAll('.remove-btn');
            removeBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartDisplay();
                });
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const total = localStorage.getItem('cartTotal');
    console.log("Retrieved cartTotal from localStorage:", total); // Added console.log

    if (total) {
        document.getElementById('checkout-total').textContent = '$' + total;
    }

    // Optionally, clear the cart and total from localStorage after checkout:
    document.getElementById('shipping-form').addEventListener('submit', function() {
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');
        alert("Order placed!");
        // Redirect to a thank you page or order confirmation page
        window.location.href = 'order-confirmation.html';
    });
});

document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("newsletter-message");

    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
    } else {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
        this.reset();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentsList = document.getElementById("comments-list");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const comment = document.getElementById("comment").value.trim();

        if (name && comment) {
            // Create new comment element
            const newComment = document.createElement("li");
            newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

            // Add comment to list
            commentsList.appendChild(newComment);

            // Clear input fields
            commentForm.reset();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const messageStatus = document.getElementById("message-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            messageStatus.innerHTML = "<p class='error'>All fields are required.</p>";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            messageStatus.innerHTML = "<p class='error'>Please enter a valid email address.</p>";
            return;
        }

        // Simulate a successful form submission
        messageStatus.innerHTML = "<p class='success'>Your message has been sent! We'll get back to you soon.</p>";

        // Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
            messageStatus.innerHTML = "";
        }, 3000);
    });
});

const authorSearch = document.getElementById('authorSearch');
authorSearch.addEventListener('keyup', e =>{
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
});