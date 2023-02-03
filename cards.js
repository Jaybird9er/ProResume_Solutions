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
    // numbers are used to indicate what items to pass into the email
    {
        className: "starter",
        title: "STARTER PACKAGE", // 1
        cost: "$119", // 2
        description: "Resume",
        popular: false,
        hasList: true,
        serviceList: ["A professionally written resume", "Keyword Optimization for Applicant Tracking Systems", "A brand new format"], // 6
        hasTip: false,
        tip: "",
    },
    {
        className: "premium",
        title: "PREMIUM PACKAGE", // 1
        cost: "$159", // 2
        description: "Resume + Cover Letter",
        popular: true,
        hasList: true,
        serviceList: ["Everything in the Starter Package", "Plus a customizable cover letter (valued at $75)"], // 6
        hasTip: true,
        tip: "Did you know that 60% of employers only read a resume accompanied by a cover letter?"
    },
    {
        className: "vip",
        title: "VIP PACKAGE", // 1
        cost: "$199", // 2
        description: "Resume + Cover Letter + LinkedIn Revamp + Interview Guidebook",
        popular: false,
        hasList: true,
        serviceList: ["Everything in the Premium Package", "Plus a LinkedIn Revamp (valued at $50)", "Plus an Interview Guidebook with 100 practice questions "], // 6
        hasTip: false,
        tip: "",
    },
    {
        className: "cover-letter",
        title: "COVER LETTER", // 1
        cost: "$75", // 2
        description: "",
        popular: false,
        hasList: false,
        serviceList: [], // 6
        hasTip: false,
        tip: "",
    },
    {
        className: "linkedin",
        title: "LINKEDIN REVAMP", // 1
        cost: "$50", // 2
        description: "",
        popular: false,
        hasList: false,
        serviceList: [], // 6
        hasTip: false,
        tip: "",
    },
];

let buttons = [];

const emailAddress = "melissa@proresumesolutions.com";
// const testEmail = "Jaybird9er@gmail.com";

function makeCards() { 
    let html = "";
    let count = 0;

    cardData.forEach(card => {
        html += `<div class=${card.className}>`;
            html += `<h3 class="title">${card.title}</h3>`;
            html += `<h2 class="cost">${card.cost}</h2>`;
            html += `<h4 class="description">${card.description}</h4>`;
            html += `<div class="services">`;
            // if false, then only button appears in this div
            if(card.hasList) {
                html += `<ul class="list">Includes:`;
                card.serviceList.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if(card.hasTip) {
                html += `<p class="tip">${card.tip}</p>`
            }
            html += `<button name="button-${count}" class="order-button${count}" onclick="location.href='order_form.html';">Begin Order</button>`;        
            
            html += `</div>`;
        html += `</div>`;
        count++;
    });
    return html;
};

document.querySelector(".primary-services").innerHTML = makeCards();

// create Other Services Banner
const bannerDiv = document.createElement("div");
const targetDiv = document.querySelector('.cover-letter');
targetDiv.parentNode.insertBefore(bannerDiv, targetDiv);
bannerDiv.setAttribute('class', 'services-banner');

const headerNode  = document.createElement("h2");
bannerDiv.appendChild(headerNode);
headerNode.setAttribute('class', 'banner-header')
document.querySelector('.banner-header').innerHTML = "OTHER SERVICES";

// adds event to add each object's data object to session storage
for (let i = 0; i < cardData.length; i++) {
    document.querySelector(".order-button" + i.toString()).addEventListener('click', (e) => {
        e.target = beginOrder(cardData[i])
    });
}

// Used to auto populate email message
function beginOrder(card) {
    sessionStorage.clear();
    sessionStorage.setItem("card", JSON.stringify(card));
};

// used to generate number to append to order ID
/* function orderID() {
    let numberID = 0;
    numberID += 1;
    return numberID.toString().padStart(10, 0);
} */
