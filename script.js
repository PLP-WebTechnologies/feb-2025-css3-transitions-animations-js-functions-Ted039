// Save user preference
function savePreference(theme) {
    localStorage.setItem("preferredTheme", theme);
}

// Retrieve and apply user preference
function applyPreference() {
    let theme = localStorage.getItem("preferredTheme");
    if (theme) {
        document.body.style.backgroundColor = theme;
    }
}

// Run when the page loads
window.onload = applyPreference;

document.getElementById("animateBtn").addEventListener("click", function() {
    let image = document.getElementById("image");
    
    // Apply animation class dynamically
    image.classList.toggle("animated-image");
});
