// Your code goes here

/* Demonstrate MOUSEOVER event */

class Logo {
    constructor(eventDemo) {
        this.eventDemo = eventDemo;
        this.logo = document.querySelector(".logo-heading");
    }
    
    interact() {
        this.logo.addEventListener(this.eventDemo, function(event) {
            event.target.style.color = "red";
        })
       
    }

    reset() {
        this.logo.style.color = "back"
    }
}

/* Demonstrate KEYDOWN event */

class Background {
    constructor(eventDemo) {
        this.eventDemo = eventDemo;
        this.background = document.querySelector("body");    
    }

    interact() {
         
        this.background.addEventListener(this.eventDemo, (event) => {
            const rgb = this.createRGBValues();
            event.target.style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`; 
        })
    }

    createRGBValues() {
        let count = 0;
        let values = [];
        while(count < 3 ){

            values.push(Math.floor(Math.random() * (255 - 1)) + 1);
            count++;
        }

        return values;
    }
}


const logo = new Logo("mouseover");
const background = new Background("keydown");

logo.interact();
//background.interact();

/* Demonstrate WHEEL event */

function addEventListenerElements(elements, event, eventHandle) {

    for(let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, eventHandle);    
    }

}

function wheelIt() {
    for(let i = 0; i < signMeUpBtns.length; i++) {
        signMeUpBtns[i].textContent = "I'm broke!"
        signMeUpBtns[i].classList.add("custom-btn");    
    }
    console.log("Wheeling!");
}
const signMeUpBtns = document.querySelectorAll(".btn");
addEventListenerElements(signMeUpBtns, "wheel", wheelIt);
/* Demonstrate DRAG & DROP */

const sandbox = document.querySelector(".content-pick:last-child");
const boxContainerOne = document.querySelector("#box-container-one");
const boxContainerTwo = document.querySelector("#box-container-two");
const redBox = document.querySelector(".box");
let draggedRedBox = null;

redBox.addEventListener("dragstart", event => {
    
    draggedRedBox = event.target;
})
boxContainerOne.addEventListener("dragover", event => {
    event.preventDefault();
    
})
boxContainerTwo.addEventListener("dragover", event => {
    event.preventDefault();
    
})
boxContainerTwo.addEventListener("drop", event => {
    event.preventDefault();
    if(event.target.className === "box-container") {
        draggedRedBox.parentNode.removeChild(draggedRedBox);
        event.target.appendChild(draggedRedBox);
    }
    

})
boxContainerOne.addEventListener("drop", event => {
    event.preventDefault();
    if(event.target.className === "box-container") {
        draggedRedBox.parentNode.removeChild(draggedRedBox);
        event.target.appendChild(draggedRedBox);
    }
    

})







/* Demonstrate LOAD event */

// const pageModal = document.querySelector(".page-modal")
// const pageModelCloseBtn = document.querySelector(".page-modal button")

// window.addEventListener("load", event => {
//     pageModal.style.display = "block";
// })

// pageModelCloseBtn.addEventListener("click", (event) => {
//     pageModal.style.display = "none";
// })

/* Demonstrate FOCUS event */

const funBusImg = document.querySelector("#fun-bus-img")

funBusImg.addEventListener("focus", event => {
    event.target.style.border = "0.5rem solid blue"
})

/* Demonstrate RESIZE */
// const body = document.querySelector("body");
// window.addEventListener("resize", event => {
//     body.style.display = "none";
// })

/* Demonstrate SCROLL */

const displayVertical = document.createElement("div");

const navContainer = document.querySelector(".nav-container");

window.addEventListener("scroll", event => {
    navContainer.prepend(displayVertical);
    displayVertical.classList.add("displayVertical")
    displayVertical.textContent = `Height from top of page: ${pageYOffset}px`;
})

/* Demonstrate SELECT */
const contactInput = document.querySelector("#contact-us");

contactInput.addEventListener("select", event => {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(selection);
})

/* Demonstrate DBCLICK */
const footer = document.querySelector("footer");
footer.addEventListener("dblclick", event => {
    const copyright = footer.querySelector("p");
    copyright.classList.toggle("big-font");

})







