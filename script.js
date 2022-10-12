
// set the active link
const menubarItemes= document.querySelectorAll(".menubar-item");
menubarItemes.forEach(items => {
    items.addEventListener('click',function(){
        document.querySelector('.active-link').classList.remove('active-link');
        this.classList.add('active-link');
//jumping on active sction
        const sectionActiveId= this.dataset.id;
        document.getElementById(sectionActiveId).scrollIntoView({behavior: 'smooth'});

    })
})

// chaning color of page
document.querySelector('.color-mode').addEventListener('click',function(){
    const elements=document.body;
    elements.classList.toggle('dark-mode');

})


    
