document.addEventListener('DOMContentLoaded', () => {
    // Select the button with the correct class
    const button = document.querySelector('.button_popup');

    // Add click event to the button
    button.addEventListener('click', () => {
        button.classList.add('bounce');
        setTimeout(() => {
            button.classList.remove('bounce');
        }, 1000);
    });

    // Add hover effect for images
    const images = document.querySelectorAll('.content .image img');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.filter = 'brightness(1.2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.filter = 'brightness(1)';
        });
    });

    // Dynamically add bounce animation styles
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            60% {
                transform: translateY(-10px);
            }
        }
        .bounce {
 
