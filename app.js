const rc = rough.svg(document.querySelector("#svg"));

const gora = document.querySelector("#gora");

const lewo = document.querySelector("#lewo")

const prawo = document.querySelector("#prawo")

const dol = document.querySelector("#dol")


var config = {
    "x" : 900,
    "y" : 300,
    "gap" : 10,
    "width" : 100,
    "height" : 100
}

var pole = {

    "0": {"0":0,"1":0,"2":0,"3":0,"4":0},
    "1": {"0":0,"1":0,"2":0,"3":0,"4":0},
    "2": {"0":0,"1":0,"2":0,"3":0,"4":0},
    "3": {"0":0,"1":0,"2":0,"3":0,"4":0},
    "4": {"0":0,"1":0,"2":0,"3":0,"4":0}
    
}

var l1 = 2
var l2 = 2



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
        
    let kwadrat = rc.rectangle(x,y,width,height,{fill: 'rgba(0,230,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    pole[l1][l2]=1

    let line1 = rc.line(x+width+width+config.gap+config.gap+width+config.gap,y-config.gap-config.gap-height-height-config.gap,x+width+width+config.gap+config.gap+width+config.gap,y+config.gap+config.gap+height+config.gap+height+height)

    svg.appendChild(line1)
    let line2 = rc.line(x-width-config.gap-config.gap-width-config.gap,y-config.gap-config.gap-height-height-config.gap,x-width-config.gap-config.gap-width-config.gap,y+config.gap+config.gap+height+height+config.gap+height)

    svg.appendChild(line2)
    let line3 = rc.line(x-width-width-config.gap-config.gap-config.gap,y-height-height-config.gap-config.gap-config.gap,x+width+width+width+config.gap+config.gap+config.gap,y-height-height-config.gap-config.gap-config.gap)

    svg.appendChild(line3)
    let line4 = rc.line(x-width-width-config.gap-config.gap-config.gap,y+height+height+height+config.gap+config.gap+config.gap,x+width+width+width+config.gap+config.gap+config.gap,y+height+height+config.gap+height+config.gap+config.gap)

    svg.appendChild(line4)

}

function dodgora(x,y,width,height){
        l1 = l1-1

    let kwadrat = rc.rectangle(x,y-height-config.gap,width,height,{fill: 'rgba(0,230,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width/2,y-config.gap,x+width/2,y)

    svg.appendChild(line)

    config.y = config.y - height - config.gap
    pole[l1][l2]=1
    
console.log(pole[l1][l2])
    sprawdzanie()

}
function doddol(x,y,width,height){
        l1 = l1+1
    let kwadrat = rc.rectangle(x,y+height+config.gap,width,height,{fill: 'rgba(0,230,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width/2,y+height+config.gap,x+width/2,y+height)

    svg.appendChild(line)

    config.y = height + config.gap + config.y
    pole[l1][l2]=1
    console.log(l1)
    sprawdzanie()
}
function dodlewo(x,y,width,height){
    l2 = l2-1
    let kwadrat = rc.rectangle(x-width-config.gap,y,width,height,{fill: 'rgba(0,230,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x-config.gap,y+height/2,x,y+height/2)

    svg.appendChild(line)

    config.x = config.x - width - config.gap    
    pole[l1][l2]=1
    console.log(pole[l1][l2])
    sprawdzanie()
}
function dodprawo(x,y,width,height){
    l2 = l2+1  
    let kwadrat = rc.rectangle(x+width+config.gap,y,width,height,{fill: 'rgba(0,230,0,0.50)', fillStyle:"solid"})

    svg.appendChild(kwadrat)

    let line = rc.line(x+width+config.gap,y+height/2,x+width,y+height/2)

    svg.appendChild(line)

    config.x = width + config.gap + config.x
    pole[l1][l2]=1
    console.log(pole[l1][l2])
    sprawdzanie()
}

function sprawdzanie(){

    if(pole[l1-1]==undefined ||pole[l1-1][l2]==1){
        gora.style.visibility = "hidden"
    }
    else{
        gora.style.visibility = "visible"
    }

    if(pole[l1+1]==undefined ||pole[l1+1][l2]==1){
        dol.style.visibility = "hidden"
    }
    else{
        dol.style.visibility = "visible"
    }
    if(pole[l1][l2-1]==undefined ||pole[l1][l2-1]==1){
        lewo.style.visibility = "hidden"
    }
    else{
        lewo.style.visibility = "visible"
    }
    if(pole[l1][l2+1]==undefined ||pole[l1][l2+1]==1){
        prawo.style.visibility = "hidden"
    }
    else{
        prawo.style.visibility = "visible"
    }


}