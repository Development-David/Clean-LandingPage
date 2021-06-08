//global variables
const navList = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let coordinates = [];
let titles =[] ;
let anchor=[];

// put section in an array and capture ids
sections = Array.from(sections); 
const navItems = sections.map(element => {
    return element.id; 
 });
 
//a classic "for" to store titles, coordinates and anchor

for (let index = 0; index < sections.length; index++) {
    titles[index]= sections[index].querySelector('h2').innerText;
    coordinates[index]=sections[index].offsetTop;
    const newLi = document.createElement('li');
    newLi.innerHTML= `<a onclick="jumpSection('${navItems[index]}')" class="navbar__link fish_${navItems[index]}">${titles[index]}</a>`; 
    navList.appendChild(newLi)  // insert the 'li' in the 'nav'
    anchor[index] = newLi.querySelector('a');
}


// function to jump to the session id
function jumpSection(id){
   const section = document.getElementById(id);
 
   section.scrollIntoView();
   changeActive(id)
}

// function to switch classes when 'nav' is clicked

function changeActive(id){
    const navItem = document.querySelector(`.fish_${id}`);
    const listA = document.querySelectorAll('.navbar__link');
    for (const a of listA) {
        a.classList.remove('active');
    }
    navItem.classList.add('active');
}

 // Initial state
let scrollPos = 0;
//top increment
let topVal = 20;
// adding scroll event
window.addEventListener('scroll', function(){
    let scrolling = document.documentElement.scrollTop;
  // rule to detect sessions
if ((document.body.getBoundingClientRect()).top > scrollPos){
        if(scrolling < coordinates[0]){
            changeActiveScroll (anchor[0])
        }else if(scrolling >= coordinates[0] &&  scrolling < coordinates[1]){
            changeActiveScroll (anchor[1])
        }else if(scrolling >= coordinates[1] &&  scrolling < coordinates[2]){
            changeActiveScroll (anchor[2])
        }else if(scrolling >= coordinates[2]){
            changeActiveScroll (anchor[3])
        }
  }else{
        if(scrolling >= coordinates[0] &&  scrolling < coordinates[1]-topVal){
            changeActiveScroll (anchor[0])
        }else if(scrolling >= coordinates[1] &&  scrolling < coordinates[2]-topVal){
            changeActiveScroll (anchor[1])
        }else if(scrolling >= coordinates[2] &&  scrolling < coordinates[3]-topVal){
            changeActiveScroll (anchor[2])
        }else if(scrolling >= coordinates[3]){
            changeActiveScroll (anchor[3])
        }
  }

});

//function to switch classes when the scroll event occurs

function changeActiveScroll (item){
    const listA = document.querySelectorAll('.navbar__link');
    for (const a of anchor) {
        a.classList.remove('active');
    }
    item.classList.add('active')
}

//  captures the return to top button and changes the display style when it passes section 0

let btnTop = document.getElementById("btn-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > anchor[0] || document.documentElement.scrollTop >anchor[0]) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}