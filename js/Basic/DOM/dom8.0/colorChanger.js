const button = document.querySelector("button");
let isPurple = false;

// button.addEventListener("click", function () {
//     if (isPurple) {
//         document.body.style.background = "white";
//         // isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         // isPurple = true;/
//     }
//     isPurple = !isPurple; // we use this
// });

button.addEventListener("click", function () {
    document.body.classList.toggle('purple');
});