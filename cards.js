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

// create an object of objects to assign each button its own unique object

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
        title: "CUSTOMIZEABLE COVER LETTER", // 1
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

const emailAddress = "mel@proresumesolutions.com";
// const testEmail = "Jaybird9er@gmail.com";

function makeCards() { 
    let html = "";
    let count = 0;

    cardData.forEach(card => {
        html += `<div class=${card.className}>`;
            html += `<h3 class="title">${card.title}</h3>`;
            html += `<h2 class="cost">${card.cost}</h2>`;
            html += `<h4 class="description">${card.description}</h4>`;
        html += `</div>`;
        html += `<div class="services">`;
        if(card.hasList) {
            html += `<ul class="list">Includes:`;
            card.serviceList.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += `</ul>`;
        }
        if(card.hasTip) {
            html += `<p>${card.tip}</p>`
        }
        html += `<button name="button-${count}" class="order-button" onclick=${beginOrder(buttonData)}>Begin Order</button>`;
        html += `</div>`;
        count++;
    });
    return html;
    function beginOrder(card) {
        console.log("test")
        sessionStorage.setItem("card", JSON.stringify(card));
        return "location.href='order_form.html'";
    };
};
document.querySelector(".primary-services").innerHTML = makeCards();
//document.querySelector(".cover-letter")

// Used to auto populate email message


// });

// used to generate number to append to order ID
/* function orderID() {
    let numberID = 0;
    numberID += 1;
    return numberID.toString().padStart(10, 0);
} */
