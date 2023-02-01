let mailTo = `jaybird9er@gmail.com?subject=Request%20for%20${sessionStorage.getItem('title')}%20Service&`;

function emailForm() {
    let form = '';
    form += `
        <h4>Please fill out the form below to begin your order.</h4>
        <p>We will be in touch shortly.</p>
        <form method="post" enctype="text/plain" class="form">
        <label for="name">Name:</label>
        <input type="text" name="Name" class="name" required}><br>
        <label for="current-position">Current Position:</label>
        <input type="text" name="Current Position" placeholder="Sales Representative" class="position"><br>
        <label for="target-position">Target Position:</label>
        <input type="text" name="Target Position" placeholder="Sales Manager" class="target"><br>
        <label for="questions">Have any questions?</label>
        <input type="text" name="Questions" class="questions"><br>
        <button value="Send" class="send"}>Start</button>
        <input type="reset" value="Reset">
        </form><br>
        <button class="button" onclick="location.href='index.html'">Return to Main</button>
        `
    return form;
}
document.querySelector(".order-form").innerHTML = emailForm();
    
document.querySelector(".send").addEventListener("click", sendButton);

function sendButton() {
    let name = document.querySelector(".name").value;
    let position = document.querySelector(".position").value;
    let target = document.querySelector(".target").value;
    let questions = document.querySelector(".questions").value;
    let mailBody = `body=Name%3A%20${name}%0D%0ACurrent%20Position%3A%20${position}%0D%0ATarget%20Position%3A%20${target}%0D%0A%0D%0AQuestions%3A%0D%0A%0D%0A${questions}%0D%0A`; 
    
    // console.log(mailTo + mailBody + name + "%0D%0A" + position );
    window.location.href = `mailto:${mailTo + mailBody}`;
};