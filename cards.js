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
        description: "Resume",
        popular: false,
        hasList: true,
        serviceList: ["A professionally written resume", "Keyword optimization for applicant tracking systems", "A brand new format"], // 6
        hasTip: false,
        tip: "",
        payURL: "https://proresume-solutions.myhelcim.com/hosted/?token=6cc56feb70ec19b6d6c3bc&amount=119.00&amountHash=c80f658aaf19ed52366ed88adf0da5b550b438ee6ce7677e493fd6856082ec5e",
    },
    {
        className: "premium",
        title: "PREMIUM PACKAGE", // 1
        cost: "$159", // 2
        description: "Resume <br>+ Cover Letter",
        popular: true,
        hasList: true,
        serviceList: ["Everything in the Starter Package", "Plus a customizable cover letter (valued at $75)"], // 6
        hasTip: true,
        tip: "Did you know that 60% of employers only read a resume accompanied by a cover letter?",
        payURL: "https://proresume-solutions.myhelcim.com/hosted/?token=5953af048d6c9bdacb7c2b&amount=159.00&amountHash=0075c7719b322b9f0df319ff2c5b5231ec46f6f8b13b7b6cb22cc2ad39196a29",
    },
    {
        className: "vip",
        title: "VIP PACKAGE", // 1
        cost: "$199", // 2
        description: `Resume <br>+ Cover Letter <br>+ LinkedIn Revamp <br>+ Interview Guidebook`,
        popular: false,
        hasList: true,
        serviceList: ["Everything in the Premium Package", "Plus a LinkedIn Revamp (valued at $50)", "Plus an Interview Guidebook with 100 practice questions "], // 6
        hasTip: false,
        tip: "",
        payURL: "https://proresume-solutions.myhelcim.com/hosted/?token=58a76e3ec4875b5d59db8a&amount=199.00&amountHash=a96f0e10b978be8e156dede8426efb408521c2de37addde5e6bb2469fa41e697",
    },
];

const secondaryCards =[
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
        payURL: "https://proresume-solutions.myhelcim.com/hosted/?token=2b07ebce609c2b88dbfc4c&amount=75.00&amountHash=92c86945d382f6013d386057744f266e207c57b1291e131f119c870868744ee2",
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
        payURL: "https://proresume-solutions.myhelcim.com/hosted/?token=4d56fb035e0a7222725d0f&amount=50.00&amountHash=4003d271784e48dd7b0ee6dbe551a5a1aa7508abb5ca0c04e600451878735e0e",
    },
    {
        className: "resume-update",
        title: "RESUME UPDATE", // 1
        cost: "$35", // 2
        description: "",
        popular: false,
        hasList: false,
        serviceList: [], // 6
        hasTip: false,
        tip: "",
        payURL: "https://proresume-solutions.myhelcim.com/hosted/?token=2942b14889d629e00c5213&amount=35.00&amountHash=66d7b6341009d0199db4909bcf7d58e830e0b24bd5db2de744a189c5eebdfcf3",
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
            html += `<h2 class="cost">${card.cost}</h2>`;
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
