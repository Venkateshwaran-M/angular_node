$(document).ready(function () {
    $('.close').hide();
    $('.lists').hide();
    $('.ham').on('click', () => {
        $('.ham').toggle();
        $('.close').toggle();
        $('.lists').toggle();
    });
    $('.close').on('click', () => {
        $('.close').toggle();
        $('.ham').toggle();
        $('.lists').toggle();
    });
})