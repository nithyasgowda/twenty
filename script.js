// console.log("hii")
// let check=false;
// document.getElementById("burger").addEventListener('click', function(e){
//     const nav=document.querySelector('nav')
//     const wrapper=document.querySelector('wrapper')
//     if(!check){
//         this.style.left="300px"
//         nav.style.cssText="display:block;right:0;"
//         console.log(nav);
//         check=!check;
//     }else{
//         this.style.left="15px"
//         nav.style.display="none"
//         console.log(nav);
//         check=!check;
//     }

//     const wrapper=document.getElementById("wrapper")
//     console.log(wrapper)
//     // wrapper.style.marginLeft="300px"
// })


let check = false;

document.getElementById("burger").addEventListener('click', function (e) {
    const nav = document.querySelector('#nav_panel');
    const wrapper = document.querySelector('#wrapper');

    if (!check) {
        nav.classList.add('slide-in');
        nav.classList.remove('slide-out');
        wrapper.classList.toggle('nav-open')
        check = true;
    } else {
        nav.classList.add('slide-out');
        nav.classList.remove('slide-in');
        wrapper.classList.toggle('nav-open');
        check = false;
    }
})