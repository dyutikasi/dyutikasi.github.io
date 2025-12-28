// ===== Poetry Protection Features =====

// Prevent right-click on poem content
document.querySelectorAll('.poem-card').forEach(card => {
    card.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showProtectionMessage();
        return false;
    });
});

// Prevent text selection with keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+C, Ctrl+A, Ctrl+X on poem content
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'a' || e.key === 'x')) {
        const selection = window.getSelection();
        const selectedText = selection.toString();

        // Check if selection is within poem content
        const poemContents = document.querySelectorAll('.poem-content');
        let isPoem = false;

        poemContents.forEach(content => {
            if (content.contains(selection.anchorNode)) {
                isPoem = true;
            }
        });

        if (isPoem && selectedText.length > 0) {
            e.preventDefault();
            showProtectionMessage();
            return false;
        }
    }

    // Prevent Print Screen (somewhat limited effectiveness)
    if (e.key === 'PrintScreen') {
        showProtectionMessage();
    }
});

// Show protection message
function showProtectionMessage() {
    const existingMessage = document.querySelector('.protection-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const message = document.createElement('div');
    message.className = 'protection-message';
    message.innerHTML = `
        <p><strong>Content Protected</strong></p>
        <p>This poetry is copyrighted by Dyuti Kasi. Please respect the author's rights.</p>
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        message.classList.add('show');
    }, 10);

    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// Add protection message styling
const style = document.createElement('style');
style.textContent = `
    .protection-message {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: var(--bg-primary);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        max-width: 300px;
    }

    .protection-message.show {
        opacity: 1;
        transform: translateY(0);
    }

    .protection-message strong {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }

    .protection-message p {
        margin: 0;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

// Disable developer tools F12 (limited effectiveness, but adds a layer)
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        showProtectionMessage();
        return false;
    }
});

// Add metadata to poem cards for copyright tracking
document.querySelectorAll('.poem-card').forEach((card, index) => {
    const poemId = card.getAttribute('data-poem-id') || (index + 1);

    // Add invisible metadata
    const metadata = document.createElement('meta');
    metadata.setAttribute('name', `poem-${poemId}-author`);
    metadata.setAttribute('content', 'Dyuti Kasi');
    document.head.appendChild(metadata);

    // Add copyright watermark to poem content
    const content = card.querySelector('.poem-content');
    if (content && !content.hasAttribute('data-copyright-added')) {
        content.setAttribute('data-copyright-added', 'true');
        content.setAttribute('data-copyright', '© 2024 Dyuti Kasi. All rights reserved.');
    }
});

// Blur poem content when window loses focus (optional, can be removed if too aggressive)
// window.addEventListener('blur', () => {
//     document.querySelectorAll('.poem-content').forEach(content => {
//         content.style.filter = 'blur(3px)';
//     });
// });

// window.addEventListener('focus', () => {
//     document.querySelectorAll('.poem-content').forEach(content => {
//         content.style.filter = 'none';
//     });
// });

// Log poem views (you can expand this to track analytics)
console.log('%c© Poetry by Dyuti Kasi - All rights reserved', 'color: #d4af37; font-size: 16px; font-weight: bold;');
console.log('%cUnauthorized reproduction or distribution is prohibited.', 'color: #b8b8b8; font-size: 12px;');

// Track poem reads
document.querySelectorAll('.poem-card').forEach(card => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const poemId = card.getAttribute('data-poem-id');
                const poemTitle = card.querySelector('.poem-title').textContent;
                console.log(`Poem viewed: ${poemTitle} (ID: ${poemId})`);
                // You can send this to analytics service if needed
            }
        });
    }, { threshold: 0.5 });

    observer.observe(card);
});

console.log('Poetry protection features loaded successfully.');
