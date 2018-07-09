// $('button').on('click', function () {
//     $('div').fadeToggle(1000);
// });

// $('button').on('click', function () {
//     $('div').slideDown();
// });


$('button').on('click', function () {
    $('div').slideToggle(1000, function () {
        $(this).remove();
    });
});
