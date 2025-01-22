document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animate-button');

    button.addEventListener('click', () => {
        button.classList.add('bounce');
        setTimeout(() => {
            button.classList.remove('bounce');
        }, 1000);
    });

    // Add bounce animation keyframes dynamically
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
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
    `, styleSheet.cssRules.length);

    styleSheet.insertRule(`
        .bounce {
            animation: bounce 1s;
        }
    `, styleSheet.cssRules.length);
});
