document.addEventListener("DOMContentLoaded", function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    window.addToCart = function (name, price) {
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(name + " added to cart");
    };

    window.removeItem = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    };

    window.clearCart = function () {
        localStorage.removeItem("cart");
        cart = [];
        displayCart();
    };

    function displayCart() {
        let cartItems = document.getElementById("cart-items");
        let totalPrice = document.getElementById("total-price");

        if (!cartItems || !totalPrice) return;

        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `
                <p>
                    ${item.name} - ₹${item.price}
                    <button onclick="removeItem(${index})">Remove</button>
                </p>
            `;
        });

        totalPrice.innerText = "Total: ₹" + total;
    }

    displayCart();
});
window.searchProducts = function () {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let name = products[i].querySelector("h3").innerText.toLowerCase();

        products[i].style.display = name.includes(input) ? "block" : "none";
    }
};