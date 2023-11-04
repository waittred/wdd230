//Since I was having issues with lazy loading, I received help from chat.openai.com. Using `data-src`attribute allows me to store the actual image source URL separately from the src attribute. This is useful when implementing custom lazy loading because I can set src to a placeholder or a small-sized image initially, and then swap it with the actual image source when the image is about to enter the viewport. 

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    function lazyLoad() {
        images.forEach(img => {
            if (img.offsetTop < window.innerHeight + window.pageYOffset) {
                img.src = img.dataset.src; // Set src to data-src value
                img.removeAttribute('loading');
            }
        });
    }
    
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
    
    lazyLoad(); // Initial load check
});

