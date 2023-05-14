var app = document.getElementById("title");

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString("Revolutionizing the Web:")
    .pauseFor(2500)
    .deleteChars(25)
    .start();

function navSlideActive () {
    const burgerButton = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burgerButton.addEventListener("click", function(){
        navLinks.classList.toggle('nav-link-active');

        burgerButton.classList.toggle('toggle');
    });
}
navSlideActive();

function buttonActiveTimeline () {
    document.querySelector('.prog-lang').classList.add('timeline-button-active');

    const progLang = document.querySelector('.timeline-programming-lang');
    const webDes = document.querySelector('.timeline-web-design');

    const programmingLanguage = document.querySelector('.prog-lang');
    const webDesign = document.querySelector('.web');

    programmingLanguage.addEventListener("click", function(){
        progLang.setAttribute("style", "display: block !important");
        webDes.setAttribute("style", "display: none !important");

        programmingLanguage.classList.add('timeline-button-active');
        webDesign.classList.remove('timeline-button-active');
    });

    webDesign.addEventListener("click", function(){
        progLang.setAttribute("style", "display: none !important");
        webDes.setAttribute("style", "display: block !important");

        webDesign.classList.add('timeline-button-active');
        programmingLanguage.classList.remove('timeline-button-active');
    });
}
buttonActiveTimeline();

function hideDetail() {
    const details = document.querySelectorAll('details');

    details.forEach(function (otherDetails){
        otherDetails.addEventListener("toggle", function(){
            if (otherDetails.open){
                details.forEach(function (otherDetailsElem){
                    if (otherDetailsElem !== otherDetails){
                        otherDetailsElem.open = false;
                    }
                });
            }
        });
    });
}
hideDetail();

function printFeedback() {
    let text;

    const textAreaVAl = document.querySelector('.feedback');
    const feedbackbut = document.querySelector('.button');

    feedbackbut.addEventListener("click", function() {
        text = textAreaVAl.value;
        
        textAreaVAl.value = "";
        console.log(text);
    });
}
printFeedback();

function addDesNavLink() {
    const navLinks = document.querySelectorAll(".navbar-links-a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (link) {
                link.classList.remove("nav-bar-links-a-des");
            });
            this.classList.add("nav-bar-links-a-des");
        });
    });
}
addDesNavLink();
