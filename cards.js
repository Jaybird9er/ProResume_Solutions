/* 
Dev Plan:

1. create array of objects to keep all card data in one spot
    -class name
    -name
    -cost
    -popular tag (optional)
    -description
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
        popular: false,
        hasList: true,
        serviceList: ["abc", "def", "ghi"],
        mailSubject: "Request%20for%20Starter%20Service", // Request for Starter Service
        mailBody: "Please%20enter%20your%20information%20below%20help%20us%20get%20up%20to%20speed%3A%0D%0AName%3A%20%0D%0ACurrent%20Company%3A%20%0D%0ACurrent%20Position%3A%20%0D%0A%0D%0A__________________________________________________________",
    },
];

const emailAddress = "mel@proresumesolutions.com";
// const testEmail = "Jaybird9er@gmail.com";

function makeCards() { 
    let html = "";
    cardData.forEach(card => {
        html += `<div class=${card.className}>`;
            html += `<h3 class="title">${card.title}</h3>`;
            html += `<h2 class="cost">${card.cost}</h2>`;
            html += `<h4 class="description">${card.description}</h4>`;
        html += `</div>`;
        html += `<div class="services">`;
        if(card.hasList) {
            html += `<ul class="services">`;
            card.serviceList.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += `</ul>`;
        }
        html += `<button class="button" onclick=${beginOrder(card.title)}>Begin Order</button>`;
        html += `</div>`;
    });
    return html;
};

// Used to auto populate email message
function beginOrder(title) {
    sessionStorage.setItem("title", title);
    return "location.href='order_form.html'";
};

// used to generate number to append to order ID
/* function orderID() {
    let numberID = 0;
    numberID += 1;
    return numberID.toString().padStart(10, 0);
} */

document.querySelector(".primary-services").innerHTML = makeCards();