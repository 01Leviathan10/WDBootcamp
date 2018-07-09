//Check off Specific Todos By clicking

// $('li').on('click', function () {
//     console.log($(this).css('color'))
//     if ($(this).css('color') === 'rgb(128, 128, 128)') {
//         $(this).css('color', 'black');
//         $(this).css({
//             color: 'black',
//             textDecoration: 'none'
//         });
//     } else {
//         $(this).css({
//             color: 'grey',
//             textDecoration: 'line-through'
//         });
//     }
// })

$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed')
});

// click on X to delete todo

$('ul').on('click', 'span',function (event) {
   $(this).parent().fadeOut(500, function() {
       $(this).remove();
   }); 
   event.stopPropagation(); 
});

//make new todo

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li add to ul
        $('ul').append("<li>"+'<span><i class="fas fa-trash-alt"></i></span> ' + todoText +"</li>");
        
    }
});

$('.fa-plus-square').click(function () {
    $("input[type='text']").fadeToggle();
})
