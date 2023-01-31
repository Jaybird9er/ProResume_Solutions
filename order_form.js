console.log(sessionStorage.getItem("title"));
let mailTo = `jaybird9er@gmail.com?subject=Request%20for%20${sessionStorage.getItem('title')}%20Service`;

function emailForm() {
    let form = '';
    form += `
            <h4>Please fill out the form below to begin your order.</h4>
            <p>We will be in touch shortly.</p>
            <form action="mailto:${mailTo}" method="post" enctype="text/plain" class="form">
            <label for="name">Name:</label>
            <input type="text" name="Name" required class="name"><br>
            <label for="current-position">Current Position:</label>
            <input type="text" name="Current Position" placeholder="Sales Representative"><br>
            <label for="target-position">Target Position:</label>
            <input type="text" name="Target Position" placeholder="Sales Manager"><br>
            <label for="questions">Have any questions? Feel free to ask.</label>
            <input type="text" name="Questions"><br>
            <input type="submit" value="Send">
            <input type="reset" value="Reset">
            </form><br>
            <button class="button" onclick="location.href='index.html'">Return to Main</button>
        `
    return form;
}
document.querySelector(".order-form").innerHTML = emailForm();


function getData(form) {
    let emailSubject = "";
    const formData = new FormData(form);
  
    // iterate through entries...
    for (const pair of formData.entries()) {
      emailSubject += pair[0] + ": " + pair[1];
    }
    console.log(emailSubject);
  
    // ...or output as an object
    console.log(Object.fromEntries(formData));
  }
  
  document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });

/* 
function sendButton() {
    
    // const form = () => $('.form').serializeArray();
    // const formData = new FormData();
    // const output = "";
    // // mailTo += `?subject=test`;
    // for (const [key, value] of formData) {
    //     output.textContent += `${key}: ${value}`;
    // }
}
console.log(document.querySelector(".name").value);
 */