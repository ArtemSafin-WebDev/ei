import tabFactory from './tabFactory';
import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function otherItems() {
    const blocks = Array.from(document.querySelectorAll('.js-other-items'));

    blocks.forEach(element => {
        const containers = Array.from(element.querySelectorAll('.swiper-container'));
        const prev = element.querySelector('.other-items__arrow--prev');
        const next = element.querySelector('.other-items__arrow--next');

        let activeInstance = null;

       

        const handleBtnsActivity = () => {
            if (!activeInstance) return;
            prev.disabled = false;
            prev.classList.remove('locked');
            next.disabled = false;
            next.classList.remove('locked');

            if (activeInstance.progress == 0) {
                prev.disabled = true;
            }
            if (activeInstance.progress == 1) {
                next.disabled = true;
                console.log('Disabling btn', activeInstance.progress)
            }

            if (activeInstance.isLocked) {
                prev.classList.add('locked');
                next.classList.add('locked');
            }
        };

        const options = {
            spaceBetween: 16,
            slidesPerView: 'auto',
            watchOverflow: true,
            watchSlidesProgress: true,
            breakpoints: {
                768: {
                    spaceBetween: 30,
                },
               
                1200: {
                    spaceBetween: 65,
                },
               
            },
            on: {
                progress: function() {
                    handleBtnsActivity();
                }
            }
        }


        const sliders = containers.map(container => {
            return new Swiper(container, options);
        });

        console.log('Sliders', sliders);

        const tabs = tabFactory([element]);

        tabs.onTabChange(tabIndex => {
            console.log('Tabchange callback', tabIndex);
            activeInstance = sliders[tabIndex];
            handleBtnsActivity();
        });

        tabs.init();

        prev.addEventListener('click', event => {
            event.preventDefault();
            if (prev.classList.contains('locked')) return false;

            activeInstance.slidePrev();
            handleBtnsActivity();
        });
        next.addEventListener('click', event => {
            event.preventDefault();
            if (next.classList.contains('locked')) return false;

            activeInstance.slideNext();
            handleBtnsActivity()
        });
    });
}
