let main = document.getElementById("container")

let btn1 = document.getElementById("press1")
let btn2 = document.getElementById("press2")
let btn3 = document.getElementById("press3")
let btn4 = document.getElementById("press4")

let color = ['red','blue','yello','green']
btn1.addEventListener('click',function(){
    // let main = document.getElementById('container')
    // let randomColor = color[Math.floor(Math.random()*color.length)]
    // Container.style.backgroundColor = randomColor
    main.style.backgroundColor = 'red'
})
btn2.addEventListener('click',function(){
    main.style.backgroundColor = 'yellow'
})
btn3.addEventListener('click',function(){
    main.style.backgroundColor = 'purple'
})
btn4.addEventListener('click',function(){
    main.style.backgroundColor = 'green'
})