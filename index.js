const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");

let firstPassword = "";
let secondPassword = "";

function randomPassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

function generatePasswords() {
    firstPasswordEl.textContent = firstPassword = randomPassword();
    secondPasswordEl.textContent = secondPassword = randomPassword();
}

function copyPassword(index) {
    let clickedPassword = (index === 1) ? firstPassword : secondPassword;
    navigator.clipboard.writeText(clickedPassword).then(() => {
        let passwordEl = (index === 1) ? firstPasswordEl : secondPasswordEl;
        passwordEl.textContent = "Copied";
        setTimeout((cp = clickedPassword) => {
            if (passwordEl.textContent === "Copied")
                passwordEl.textContent = cp;
        }, 1500);
    });
}