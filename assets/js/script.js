const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });
    }
    const callMenuBtn = document.querySelector('.menu__btn'),
        modalMenuActive = document.querySelector('.overlay'),
        modalMenuClose = document.querySelector('.closebtn');

    bindModal(callMenuBtn, modalMenuActive, modalMenuClose);
};