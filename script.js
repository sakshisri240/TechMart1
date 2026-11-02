/* ================= SEARCH ================= */

const searchBtn = document.getElementById("searchBtn");
const searchArea = document.getElementById("searchArea");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {
    searchArea.classList.toggle("active");

    if (searchArea.classList.contains("active")) {
        searchInput.focus();
    }
});

closeSearch.addEventListener("click", function () {
    searchArea.classList.remove("active");
    searchInput.value = "";
});


/* ================= CART ================= */

let cartCount = 0;

const cartCountElement = document.getElementById("cartCount");
const cartToast = document.getElementById("cartToast");

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartCountElement.textContent = cartCount;

        const productName = button.getAttribute("data-product");

        cartToast.querySelector("span").textContent =
            productName + " added to cart!";

        cartToast.classList.add("show");

        setTimeout(function () {
            cartToast.classList.remove("show");
        }, 2200);

    });

});


/* ================= CART BUTTON ================= */

const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", function () {

    if (cartCount === 0) {

        cartToast.querySelector("span").textContent =
            "Your cart is empty.";

    } else {

        cartToast.querySelector("span").textContent =
            "You have " + cartCount + " item(s) in your cart.";

    }

    cartToast.classList.add("show");

    setTimeout(function () {
        cartToast.classList.remove("show");
    }, 2200);

});


/* ================= SEARCH ENTER ================= */

searchInput.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {

        const searchValue = searchInput.value.trim();

        if (searchValue !== "") {

            alert(
                "Searching for: " + searchValue
            );

        }

    }

});


/* ================= VIEW ALL BUTTON ================= */

const viewAllButton = document.querySelector(".view-all-btn");

viewAllButton.addEventListener("click", function () {

    alert(
        "More TechMart products will be available soon!"
    );

});