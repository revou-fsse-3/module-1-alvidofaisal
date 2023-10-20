function toggleMenu(action) {

    // Initializes the constant variable with the HTML element that has the ID
    const menu = document.getElementById('menuContainer'); 
    const hamburger = document.getElementById('hamburger');
    const closeButton = document.getElementById('closeButton');

    // Toggle visibility of the menu based on the action parameter
    if (action === 'open'){
        menu.style.display = 'block'; // Makes the menu visible
        hamburger.style.display = 'none'; // Hides the hamburger button
        closeButton.style.display = 'block'; // Shows the close button
    } else if (action === 'close') {
        menu.style.display = 'none';  // Hides the menu
        hamburger.style.display = 'block'; // Shows the hamburger button
        closeButton.style.display = 'none'; // Hides the close button
    }
} 