// Coupons data
const coupons = [
    { code: "EVERBEE2025", discount: "78% OFF", description: "Exclusive 78% discount for 2025!" },
    { code: "SAVE50", discount: "50% OFF", description: "Save 50% on selected items." },
    { code: "DISCOUNT30", discount: "30% OFF", description: "Get 30% OFF on all orders." }
];

// Function to populate the coupon list
function populateCoupons() {
    const couponList = document.getElementById("coupon-list");

    coupons.forEach(coupon => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${coupon.discount}</strong><br>
            Code: <span class="coupon-code">${coupon.code}</span><br>
            ${coupon.description}
        `;
        couponList.appendChild(listItem);
    });
}

// Function to handle claim button click
document.getElementById("claimBtn").addEventListener("click", function() {
    alert("Coupon claimed! Use the code at checkout to get your discount.");
});

// Populate the coupons when the page loads
window.onload = populateCoupons;