export default function catalogViews() {
    const gridViewBtn = document.querySelector('.js-grid-view-btn');
    const listViewBtn = document.querySelector('.js-list-view-btn');
    const catalog = document.querySelector('.catalog__lots')

    if (gridViewBtn && listViewBtn && catalog) {
        function toggleView() {
            if (gridViewBtn.classList.contains('active')) {
                catalog.classList.remove('list-view');
            } else {
                catalog.classList.add('list-view');
            }
        }

        const btns = [gridViewBtn, listViewBtn];

        btns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                btns.forEach(btn => btn.classList.toggle('active'))
                

                toggleView();
            })
        })


        toggleView();



    }
}