const loadingAnimation = ['one', 'two', 'three' , 'four'];
const container = document.querySelector('.skillsWraper')
console.log(container)

console.log(loadingAnimation);

const loadingBars = document.querySelectorAll('.inner-bar');
console.log(loadingBars);


window.onscroll = function(){
    let windowLocaiton = window.pageYOffset + window.innerHeight;
    if(windowLocaiton > document.querySelector('.skillsWraper').offsetTop){
        loadingBars.forEach(function(item, index){
            if(!item.classList.contains(loadingAnimation[index])){
                item.classList.add(loadingAnimation[index])
            }
        })
    }
}


const circle = document.querySelector('.circle')
const wraper = document.querySelector('.wraper')

console.log(wraper);

const diagonath = Math.sqrt(Math.pow(window.innerHeight,2)+ Math.pow(window.innerHeight,2));


console.log(diagonath);









