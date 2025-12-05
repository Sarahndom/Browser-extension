const cards = document.querySelectorAll('.extension-card');
const filterButtons = document.querySelectorAll('.filter-buttons button');

// 1. Handle switch toggles (Active / Inactive)
cards.forEach(card => {
    const toggle = card.querySelector('input[type="checkbox"]');

    toggle.addEventListener('change', () => {
        // Set active state based on toggle
        const isActive = toggle.checked;

        // Optional: store it in data attribute
        card.dataset.active = isActive ? "true" : "false";
    });

});


// 2. Handle filter buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filterType = btn.textContent.trim(); // "All", "Active", "Inactive"

        cards.forEach(card => {
            const isActive = card.querySelector("input[type=checkbox]").checked;

            if (filterType === "All") {
                card.style.display = "flex";
            } else if (filterType === "Active") {
                card.style.display = isActive ? "flex" : "none";
            } else if (filterType === "Inactive") {
                card.style.display = !isActive ? "flex" : "none";
            }

        });
    });
});

// REMOVE BUTTON LOGIC
const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".extension-card");
        card.remove(); // simply remove the card from DOM
    });
});


const themeToggle = document.getElementById("sun-icon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

//If you want JS-based detection (optional)
window.addEventListener("resize", () => {
    console.log("Screen width:", window.innerWidth);
});


