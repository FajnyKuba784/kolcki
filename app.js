const rc = rough.svg(document.querySelector("#svg"));

const gora = document.querySelector("#gora");

const lewo = document.querySelector("#lewo")

const prawo = document.querySelector("#prawo")

const dol = document.querySelector("#dol")


var config = {
    "x" : 900,
    "y" : 400,
    "gap" : 10,
    "width" : 100,
    "height" : 100
}

gora.addEventListener("click",()=>{

    dodgora(config.x,config.y,config.width,config.height)


})
dol.addEventListener("click",()=>{

    doddol(config.x,config.y,config.width,config.height)


})
lewo.addEventListener("click",()=>{

    dodlewo(config.x,config.y,config.width,config.height)


})
prawo.addEventListener("click",()=>{

    dodprawo(config.x,config.y,config.width,config.height)


})
dod(config.x,config.y,config.width,config.height)

function dod(x,y,width,height){
        
    let kwadrat = rc.rectangle(x,y,width,height,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

  

}

function dodgora(x,y,width,height){
        
    let kwadrat = rc.rectangle(x,y-height-config.gap,width,height,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width/2,y-config.gap,x+width/2,y)

    svg.appendChild(line)

    config.y = config.y - height - config.gap
}
function doddol(x,y,width,height){
        
    let kwadrat = rc.rectangle(x,y+height+config.gap,width,height,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width/2,y+height+config.gap,x+width/2,y+height)

    svg.appendChild(line)

    config.y = height + config.gap + config.y
}
function dodlewo(x,y,width,height){
        
    let kwadrat = rc.rectangle(x-width-config.gap,y,width,height,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width/2,y+height,x+width/2,y+height+config.gap)

    svg.appendChild(line)

    config.x = config.x - width - config.gap    
}
function dodprawo(x,y,width,height){
        
    let kwadrat = rc.rectangle(x,y,width,height,{fill: 'rgba(200,0,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width/2,y+height,x+width/2,y+height+config.gap)

    svg.appendChild(line)

    config.y = height + config.gap + config.y
}