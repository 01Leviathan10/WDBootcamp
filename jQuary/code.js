// function show(text) {
//     var value = text.hobby;
//     $("#div1").append(value);
// }


$("select").change(function () {
    var str = "";
    $("select option:selected").each(function () {
        str += $(this).text() + " ";
    });
    $("#div1").text(str);
}).change();

