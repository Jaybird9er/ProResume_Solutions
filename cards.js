/* 
Dev Plan:

1. create array of objects to keep all card data in one spot
    -class name
    -name
    -cost
    -popular tag (optional)
    -class name
    -has list (t/f)
    -description list (optional)
    -button
        -mailto specific links

2. create card function to populate cards

*/

const cardData = [
    {
        className: "starter",
        title: "Starter",
        cost: "$119",
        description: "Resume",

    },
];

function makeCards() { 
    let innerText = "";
    cardData.forEach(card => {
    innerText += card.title + "<br>";
    innerText += card.cost + "<br>";
    innerText += card.description + "<br>";
    });
    return innerText;
};

document.getElementById("test").innerHTML = "<p>" + makeCards() + "</p>";