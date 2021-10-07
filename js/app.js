// UI 

// Start Home 


// Start navbar
const navbar = document.querySelector('.navbar');
// console.log(navbar);

const toogglerbtns = document.querySelector('.toogglerbtns');
// console.log(toogglerbtns);

const togglers = document.querySelector('.togglers');


togglers.addEventListener('click',()=>{
    togglers.classList.toggle('fivesixs');
});

navbar.addEventListener('mouseenter',function(){
    navbar.classList.add('opacity');
});


navbar.addEventListener('mouseleave',function(){
    navbar.classList.remove('opacity');
});



window.addEventListener('scroll',()=>{
    const scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly > 400){
        navbar.classList.add('hiders');
        
    }else{
        navbar.classList.remove('hiders');

    }
});
// End Navbar


// Start flabour 
const flavourlorem = document.getElementById('flavourlorem');
// console.log(flavourlorem);

let loremtext = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa cumque voluptates ea, facilis nostrum laboriosam omnis animi, repellat nam sint molestiae maxime ab recusandae odio iste quibusdam similique eum.";

let idx = 0;

function autotext(){
    flavourlorem.innerText = loremtext.slice(0,idx);
    idx++;

    // if(idx > loremtext.length){
    //     idx = 1;
    // }
}

autotext();

setInterval(autotext,50);
// End Flabour

// End Home 


// Start About Us Section 
const aboutusimgboxs = document.querySelector('.aboutusimgboxs');
const aboutustexts = document.querySelector('.aboutustexts');

window.addEventListener('scroll',()=>{
    const scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly >= 55){
        aboutusimgboxs.classList.add('fromlefts');
        aboutustexts.classList.add('fromrights');
    }else{
        aboutusimgboxs.classList.remove('fromlefts');
        aboutustexts.classList.remove('fromrights');
    }
});
// End About us Section 



// Start Menu Section 
const menuitemones = document.querySelector('.menuitemones');
const menuitemtwos = document.querySelector('.menuitemtwos');
const menuitemthrees = document.querySelector('.menuitemthrees');

window.addEventListener('scroll',()=>{
    const scrolly = window.scrollY;

    // console.log(scrolly);
    if(scrolly >= 1900){
        menuitemones.classList.add('fromlefts');
        menuitemtwos.classList.add('frombottoms');
        menuitemthrees.classList.add('formrights');
        
    }else{
        menuitemones.classList.remove('fromlefts');
        menuitemtwos.classList.remove('frombottoms');
        menuitemthrees.classList.remove('formrights');
    }

});
// End Menu Section 

// Start Gallery Section 
const gallerys = document.getElementById('gallerys');
const imgs = document.querySelectorAll('.gallerys img');

let idnx = 0;
let idrx =0;

function rightchanges(){

    idnx++;
    if(idrx == 10){
        idrx = 0;
        // idnx--;
    }

    console.log(idnx);
}
// setInterval(rightchanges,1000);



// function leftchanges(){
//     for(idrx; idrx < 10; idrx--){
//         console.log(idrx);
//     }
// }

// leftchanges();

// setInterval(leftchanges,1000);




// End Gallery Section


// Start Review Section 
const changetextones = document.querySelector('.changetextones');
const changetexttwos = document.querySelector('.changetexttwos');
const changetextthrees = document.querySelector('.changetextthrees');
const changetextfours = document.querySelector('.changetextfours');

let loremtexts = ["A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. Customer testimonials can take multiple forms.","Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.Anyone looking at your testimonials page can see things from a like-minded point of view, as all of your current and previous clients were once potential customers, just like them.","To bring this home, studies have found that approximately 92% of people will read customer testimonials when considering a purchase, and an additional 88% state they trust online reviews just as much as they believe a recommendation from a friend or family member.","Different types of testimonials will vary in length. Good content marketing professionals will use a selection of quotes, videos, blogs, and case study testimonials to build up a story of success."];

function getrandomnumber(){
    return loremtexts[Math.floor(Math.random()*loremtexts.length)];
}

// console.log(getrandomnumber());

function alwayswork(){
    changetextones.innerText = getrandomnumber();
    changetexttwos.innerText = getrandomnumber();
    changetextthrees.innerText = getrandomnumber();
    changetextfours.innerText = getrandomnumber();
}

alwayswork();

setInterval(alwayswork,3000);



const changenumberones = document.querySelector('.changenumberones');
const changenumbertwos = document.querySelector('.changenumbertwos');
const changenumberthrees = document.querySelector('.changenumberthrees');
const changenumberfours = document.querySelector('.changenumberfours');


let numbers = ["10", "25", "10", "20", "30", "50", "60"];

function getrandomnumbertwo(){
    return numbers[Math.floor( Math.random()*numbers.length)];
}

// console.log(getrandomnumbertwo());


function alwaysworkone(){
    changenumberones.innerText = getrandomnumbertwo();
    changenumbertwos.innerText = getrandomnumbertwo();
    changenumberthrees.innerText = getrandomnumbertwo();
    changenumberfours.innerText = getrandomnumbertwo();

}

alwaysworkone();
setInterval(alwaysworkone,2000);
// End Review Section 


//Start Footer Section 
const footerimages = document.querySelector('.footerimages');
const year = document.getElementById('year');
// console.log(year);

window.addEventListener('scroll',()=>{
    let scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly >= 4910){
        footerimages.classList.add('footrights');
    }else{
        footerimages.classList.remove('footrights');

    }
});


const getyear = new Date().getUTCFullYear();
// console.log(getyear);

year.textContent = getyear;
// End Footer Section 
