let mailTo = `jaybird9er@gmail.com?subject=Request%20for%20${sessionStorage.getItem('title')}%20Service&`;
    
document.querySelector(".send").addEventListener("click", sendButton);

function sendButton() {
    document.querySelector(".form").addEventListener("submit", (e) => {e.preventDefault();});
    let name = document.querySelector(".name").value;
    // check to confirm if required
    if(name !== "") {
        let position = document.querySelector(".position").value;
        let target = document.querySelector(".target").value;
        let questions = document.querySelector(".questions").value;
        let mailBody = `body=Name%3A%20${name}%0D%0ACurrent%20Position%3A%20${position}%0D%0ATarget%20Position%3A%20${target}%0D%0A%0D%0AQuestions%3A%0D%0A%0D%0A${questions}%0D%0A`; 
        
        window.location.href = `mailto:${mailTo + mailBody}`;
    } else {
        document.querySelector(".name").style.backgroundColor = '#f5babb';
    }
};
document.querySelector(".name").addEventListener("focus", (e) => {
    e.target.style.background = '#fff'
});