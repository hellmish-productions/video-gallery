// video-redirect.js - Shared redirect logic for all video pages
// Auto-detect videoId from current path and redirect to main page

const pathParts = window.location.pathname.split('/').filter(p => p);
const lastPart = pathParts[pathParts.length - 1];
const videoId = lastPart === 'index.html' 
    ? pathParts[pathParts.length - 2]
    : lastPart;

// Add favicon
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/jpeg';
link.href = '../../../img/batman-icon.jpg';
document.head.appendChild(link);

// Show loading message
document.body.innerHTML = `
<style>
    body {
        margin: 0;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
    }
    
    .loader {
        font-size: 18px;
    }
    
    .loader::after {
        content: '...';
        animation: dots 1.5s infinite;
    }
    
    @keyframes dots {
        0%, 20% { content: '.'; }
        40% { content: '..'; }
        60%, 100% { content: '...'; }
    }
</style>
<div class="loader">Redirecting to video</div>
`;

// Redirect to main page
window.location.replace('../../../index.html?v=' + videoId);
