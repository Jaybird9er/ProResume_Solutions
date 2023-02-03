const emailAddress = "melissa@proresumesolutions.com";

let card = (JSON.parse(sessionStorage.getItem('card')));
let cardArray = Object.values(card);
// console.log(cardArray[6].length);
// console.log(Object.values(card)[1]);
let mailTo = `${emailAddress}?subject=Request%20for%20${capitalizeCase(card.title)}&`;
    
document.querySelector(".send").addEventListener("click", sendButton);

function sendButton() {
    document.querySelector(".form").addEventListener("submit", (e) => {e.preventDefault();});
    let name = document.querySelector(".name").value;
    // checks to confirm if required
    if(name !== "") {
        let position = document.querySelector(".position").value;
        let target = document.querySelector(".target").value;
        let questions = document.querySelector(".questions").value;
        
        let mailBody = `body=Name%3A%20${name}%0D%0ACurrent%20Position%3A%20${position}%0D%0ATarget%20Position%3A%20${target}%0D%0A%0D%0AQuestions%3A%0D%0A%0D%0A${questions}%0D%0A%0D%0A`; 
        for(let i = 0; i < 25; i++){mailBody += "%5F"};
        
        let i = 1;
        while(i < cardArray.length) {
            if(i === 1) {
                // add if statement to keep VIP all caps
                if(card.className === "vip") {
                    mailBody += `%0D%0A%0D%0A` + "VIP Package"
                } else {
                    mailBody += `%0D%0A%0D%0A` + capitalizeCase(cardArray[i]);
                }
            } else if (i === 2) {
                mailBody += `%0D%0A%0D%0APrice%3A%20$` + cardArray[i] + `%0D%0A`;
            } else if (i === 6) {
                let j = 0;
                while(j < cardArray[i].length) {
                    mailBody += `%0D%0A%20%20%3E%20${cardArray[i][j]}`;
                    j++;
                }
            }
            i++;
        }
        mailBody += `%0D%0A%0D%0A`;
        for(let i = 0; i < 25; i++){mailBody += "%5F"};
        mailBody += `%0D%0A%0D%0A`;
        mailBody += `Proresume Solutions Team`;
        
        window.location.href = `mailto:${mailTo + mailBody}`;
    } else {
        document.querySelector(".name").style.backgroundColor = '#f5babb';
    }
};

function capitalizeCase(word){
    text = word
      .toLowerCase()
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
      .join(" ");
    return text;
};

document.querySelector(".name").addEventListener("focus", (e) => {
    e.target.style.background = '#fff'
});

document.querySelector(".main-button").addEventListener("click", (e) => {
    window.location.href = 'index.html';
});