let card = (JSON.parse(sessionStorage.getItem('card')));
let cardArray = Object.values(card);
console.log(cardArray[6].length);
console.log(Object.values(card)[1]);
let mailTo = `jaybird9er@gmail.com?subject=Request%20for%20${capitalizeCase(card.title)}&`;
    
document.querySelector(".send").addEventListener("click", sendButton);

function sendButton() {
    document.querySelector(".form").addEventListener("submit", (e) => {e.preventDefault();});
    let name = document.querySelector(".name").value;
    // check to confirm if required
    if(name !== "") {
        let position = document.querySelector(".position").value;
        let target = document.querySelector(".target").value;
        let questions = document.querySelector(".questions").value;
        
        let mailBody = `body=Name%3A%20${name}%0D%0ACurrent%20Position%3A%20${position}%0D%0ATarget%20Position%3A%20${target}%0D%0A%0D%0AQuestions%3A%0D%0A%0D%0A${questions}%0D%0A%0D%0A`; 
        for(let i = 0; i < 25; i++){mailBody += "%5F"};
        
        let i = 1;
        while(i < cardArray.length) {
            let entry = '';
            if(i === 1) {
                mailBody += `%0D%0A%0D%0A` + capitalizeCase(cardArray[i]);
            } else if (i === 2) {
                mailBody += `%0D%0A%0D%0APrice%3A%20$` + cardArray[i] + `%0D%0A`;
            } else if (i === 6) {
                let j = 0;
                while(j < cardArray[i].length) {
                    mailBody += `%0D%0A%20%20%3E%20${cardArray[i][j]}`;
                    j += 1;
                }
            }
            i += 1;
        }
    //     Object.values(card).forEach(item => {
    //         reciept += () => {
    //             if(item === card.title) {
    //                 `%0D%0A%0D%0A${capitalizeCase(item)}`
    //                 } else {
    //                     `%0D%0A%0D%0A${item}`
    //                 };
    //             }
    //     });
    // mailBody += reciept;
        
        window.location.href = `mailto:${mailTo + mailBody}`;
    } else {
        document.querySelector(".name").style.backgroundColor = '#f5babb';
    }
    sessionStorage.clear();
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
    sessionStorage.clear();
})