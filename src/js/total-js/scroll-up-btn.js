function initScrollToTop() {
    const scrollTop = document.querySelector('#scroll-top');
    scrollTop.addEventListener('click', onScrollToTopClick);

    window.addEventListener('scroll', onScroll);

function onScroll() {
    const scrollPosition = window.scrollY;
    const threshold = 700;
    scrollTop.classList.toggle('js-scroll-up_hidden', scrollPosition < threshold);
    }

    function onScrollToTopClick() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    }

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    });
}

initScrollToTop();