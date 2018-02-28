// var movieDB = {
//     title: [
//         {name: "IronMan"},
//         {name: "Hulk"},
//         {name: "Superman"}
//     ],
//     rating: [
//         {grade: 3.5},
//         {grade: 4.5},
//         {grade: 5.0}
//     ],
//     hasWatched: [
//         {seen: true},
//         {notSeen: false}
//     ]
// };

// function seen() {
//     if (true) {
//         console.log("seen");
//     }
//     else{
//         console.log("not seen");
//     }
// };

// console.log("You have" + )





// movies.forEach(movie => {
//     var result = "you have ";
//     if (movie.hasWatched) {
//         result += "watched ";
//     } else {
//         result += "not seen ";
//     }
//     result += "\"" + movie.title + "\" - ";
//     result += movie.rating + " stars";
//     console.log(result);
// });

var movies = [{
        title: "Iron Man",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Hulk",
        hasWatched: false,
        rating: 4
    },
    {
        title: "Get Out",
        hasWatched: true,
        rating: 4.5

    },
    {
        title: "Superman",
        hasWatched: true,
        rating: 3.5
    }
]

function buildString(movie) {
    var result = "you have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(movie => {
    console.log(buildString(movie))
});