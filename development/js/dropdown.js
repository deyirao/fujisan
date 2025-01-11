document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.language-dropdown');
    const selected = dropdown.querySelector('.selected-language img');
    const options = dropdown.querySelector('.dropdown-options');

    // Prevent visual flash
    options.style.visibility = 'visible';
    options.style.display = 'none';  // Ensure dropdown remains hidden

    dropdown.querySelector('.selected-language').addEventListener('click', () => {
        const isVisible = options.style.display === 'block';
        options.style.display = isVisible ? 'none' : 'block';
    });

    options.querySelectorAll('li').forEach(option => {
        option.addEventListener('click', () => {
            const selectedImage = option.querySelector('img').src;
            const selectedValue = option.getAttribute('data-value');

            selected.src = selectedImage;  // Update only the flag image
            window.location.href = selectedValue;
            options.style.display = 'none';
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            options.style.display = 'none';
        }
    });
});
