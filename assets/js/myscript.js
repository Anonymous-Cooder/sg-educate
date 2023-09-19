const contentArea = document.querySelector('.content-area')
const sideBar = document.querySelector('.side-bar')

// run function on load, scroll and resize for better performance
window.onload = () => controlSideBarFloating()
window.onscroll = () => controlSideBarFloating()
window.onresize = () => controlSideBarFloating()

// lets define some variables
var leftBlock = contentArea
var rightBlock = sideBar
var topSpace = 10
var breakpoint = 992  // we use 992 for col-lg
var stickyClass = 'sticky-sidebar'
var bottomFixedClass = 'bottom-fixed-sidebar'

// now create a function that will create sticky sidebar and use above variables
function controlSideBarFloating(){
    var rectL = leftBlock.getBoundingClientRect();
    var rectR = rightBlock.getBoundingClientRect();
    if(window.innerWidth >= breakpoint){
        if(rectL.top-topSpace + (rectL.height - rectR.height) >= 0 && rectL.top-topSpace <= 0){
            rightBlock.classList.add(stickyClass)
            rightBlock.classList.remove(bottomFixedClass)
        }else if(rectL.top-topSpace + (rectL.height - rectR.height) <= 0){
            // rightBlock.classList.remove(stickyClass)
            // rightBlock.classList.add(bottomFixedClass)
        }else{
            // rightBlock.classList.remove(stickyClass)
            // rightBlock.classList.remove(bottomFixedClass)
        }
    }else{
        // rightBlock.classList.remove(stickyClass)
        // rightBlock.classList.remove(bottomFixedClass)
    }
}








const container = document.querySelector(".c-container");
const cards = document.querySelector(".cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}


























/* Video Explanatio - https://youtu.be/-0VuZEYIYuI */
document.querySelectorAll('.custom-select').forEach(setupSelector);

function setupSelector(selector) {
  selector.addEventListener('change', e => {
    console.log('changed', e.target.value)
  })

  selector.addEventListener('mousedown', e => {
    if(window.innerWidth >= 420) {// override look for non mobile
      e.preventDefault();

      const select = selector.children[0];
      const dropDown = document.createElement('ul');
      dropDown.className = "selector-options";

      [...select.children].forEach(option => {
        const dropDownOption = document.createElement('li');
        dropDownOption.textContent = option.textContent;

        dropDownOption.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          select.value = option.value;
          selector.value = option.value;
          select.dispatchEvent(new Event('change'));
          selector.dispatchEvent(new Event('change'));
          dropDown.remove();
        });

        dropDown.appendChild(dropDownOption);   
      });

      selector.appendChild(dropDown);

      // handle click out
      document.addEventListener('click', (e) => {
        if(!selector.contains(e.target)) {
          dropDown.remove();
        }
      });
    }
  })
}
























  function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
  
  
  }

  function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  
  }
  
  function validateForm(){
    var returnval = true;
    clearErrors();
  
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
  
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
  
    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
  
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
  
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){
  
        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
  
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
  
    return returnval;


  }