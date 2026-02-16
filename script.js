document.addEventListener('DOMContentLoaded', () => {
    console.log('Momos King is ready to serve!');

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple animation for "Add" buttons
    const addButtons = document.querySelectorAll('.btn-icon');
    addButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Visualize click
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);

            // In a real app, this would add to cart
            console.log('Added to cart!');
        });
    });
});
