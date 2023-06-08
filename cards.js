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

const primaryCards = [
    // numbers are used to indicate what items to pass into the email
    {
        className: "starter",
        title: "STARTER PACKAGE", // 1
        cost: "$119", // 2
        newCost: "$99", // 2
        description: "Resume",
        popular: false,
        hasList: true,
        serviceList: ["A professionally written resume", "Keyword optimization for applicant tracking systems", "A brand new format"], // 6
        hasTip: false,
        tip: "",
        payURL: "https://buy.stripe.com/6oE2arcn572g02Q8ww",
    },
    {
        className: "premium",
        title: "PREMIUM PACKAGE", // 1
        cost: "$159", // 2
        newCost: "$139", // 2
        description: "Resume <br>+ Cover Letter",
        popular: true,
        hasList: true,
        serviceList: ["Everything in the Starter Package", "Plus a customizable cover letter (valued at $75)"], // 6
        hasTip: true,
        tip: "Did you know that 60% of employers only read a resume accompanied by a cover letter?",
        payURL: "https://buy.stripe.com/3cseXdcn5fyM8zm4gh",
    },
    {
        className: "vip",
        title: "VIP PACKAGE", // 1
        cost: "$199", // 2
        newCost: "$179", // 2
        description: `Resume <br>+ Cover Letter <br>+ LinkedIn Revamp <br>+ Interview Guidebook`,
        popular: false,
        hasList: true,
        serviceList: ["Everything in the Premium Package", "Plus a LinkedIn Revamp (valued at $50)", "Plus an Interview Guidebook with 100 practice questions "], // 6
        hasTip: false,
        tip: "",
        payURL: "https://buy.stripe.com/28o8yPfzhgCQ2aY9AC",
    },
];

const secondaryCards =[
    {
        className: "cover-letter",
        title: "COVER LETTER", // 1
        newCost: "$75", // 2
        cost: "", // 2
        description: "",
        popular: false,
        hasList: false,
        serviceList: [], // 6
        hasTip: false,
        tip: "",
        payURL: "https://buy.stripe.com/6oE02j4UD1HWdTG5kn",
    },
    {
        className: "linkedin",
        title: "LINKEDIN REVAMP", // 1
        newCost: "$50", // 2
        cost: "", // 2
        description: "",
        popular: false,
        hasList: false,
        serviceList: [], // 6
        hasTip: false,
        tip: "",
        payURL: "https://buy.stripe.com/fZe9CT5YHfyM8zmaEI",
    },
    {
        className: "resume-update",
        title: "RESUME UPDATE", // 1
        newCost: "$35", // 2
        cost: "", // 2
        description: "",
        popular: false,
        hasList: false,
        serviceList: [], // 6
        hasTip: false,
        tip: "",
        payURL: "https://buy.stripe.com/4gwg1h3QzdqEaHufZ3",
    },
];

const emailAddress = "melissa@proresumesolutions.com";

function makeCards(cardsArray) { 
    let html = "";
    let count = 0;

    cardsArray.forEach(card => {
        html += `<div class="${card.className} card">`;
            if(card.popular) {
                html += `<div class="popular"><img src="images/popular.png" alt="star" class="star"></div>`
            }
            html += `<h3 class="title">${card.title}</h3>`;
            html += `<h2 class="new-cost">${card.newCost}</h2>`;
            html += `<h3 class="cost">${card.cost}</h3>`;
            html += `<h4 class="description">${card.description}</h4>`;
            html += `<div class="services">`;
            // if false, then only button appears in this div
            if(card.hasList) {
                
                html += `<div class="list">`
                html += `<ul><label class="list-label">Includes:</label>`;
                card.serviceList.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
                if(card.hasTip) {
                    html += `<p class="tip">${card.tip}</p>`
                }
                html += `</div>`;
            }
            html += `<button name="button-${count}" class="order-button${count}" onclick="location.href='${card.payURL}';">Begin Order</button>`;        
            
            html += `</div>`;
        html += `</div>`;
        count++;
    });
    return html;
};

document.querySelector(".primary-services").innerHTML = makeCards(primaryCards);

// create Other Services Banner
const bannerDiv = document.createElement("div");
const rowDiv = document.querySelector('.container');
bannerDiv.setAttribute('class', 'services-banner');



const headerNode  = document.createElement("h2");
rowDiv.appendChild(headerNode);
rowDiv.appendChild(bannerDiv);
headerNode.setAttribute('class', 'banner-header')


document.querySelector('.banner-header').innerHTML += "OTHER SERVICES";
document.querySelector(".services-banner").innerHTML += makeCards(secondaryCards);

// adds event to add each object's data object to session storage
for (let i = 0; i < primaryCards.length; i++) {
    document.querySelector(".order-button" + i.toString()).addEventListener('click', (e) => {
        e.target = beginOrder(primaryCards[i])
    });
}

// append 
let resumeCard = document.querySelector('div.resume-update .cost');
const resumeNote = document.createElement("span");
resumeNote.setAttribute('class', 'resume-note');
resumeNote.innerHTML += "(For returning customers only)"
resumeCard.after(resumeNote);

// used to auto populate email message
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
