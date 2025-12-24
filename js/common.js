/**
 * Common utility functions
 */

/**
 * Copy article link to clipboard
 * @param {HTMLElement} linkElement - The link element that was clicked
 */
function copyArticleLink(linkElement) {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
        const originalText = linkElement.textContent;
        linkElement.textContent = 'Link copied!';
        linkElement.style.background = 'rgba(255, 255, 255, 0.2)';
        setTimeout(function() {
            linkElement.textContent = originalText;
            linkElement.style.background = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
        linkElement.textContent = 'Copy failed';
    });
}

/**
 * Initialize article link buttons
 * Adds click handlers to all elements with class 'article-link-btn'
 */
function initArticleLinkButtons() {
    const articleLinks = document.querySelectorAll('.article-link-btn');
    articleLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            copyArticleLink(this);
            return false;
        });
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArticleLinkButtons);
} else {
    initArticleLinkButtons();
}
