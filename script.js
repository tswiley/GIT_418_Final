// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Code for handling tabs

    // Schedule Tabs
    $('.tabs button').on('click', function () {
        const target = $(this).data('target');
        $('.tab-content > div').removeClass('active');
        $(`#${target}`).addClass('active');
    });

    // Sponsors Tabs
    $('.sponsor-tabs button').on('click', function () {
        const target = $(this).data('target');
        $('.sponsor-content > div').removeClass('active');
        $(`#${target}`).addClass('active');
    });

    // Code for other functionality, if any
});
