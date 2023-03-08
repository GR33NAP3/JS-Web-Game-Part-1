//generates the new image when passed the asset location then the left location and then bottom location
function newImage(asset, left, bottom){
    let newChar = document.createElement('img')
    newChar.src = asset
    newChar.style.position = 'fixed'
    newChar.style.left = `${left}px`
    newChar.style.bottom = `${bottom}px`
    document.body.append(newChar)
    return newChar
}
// generates an image that is considered an item so that it can be picked up with a double click passed the asset location then left value and bottom value
function newItem(asset,left, bottom){
    
    let newItem=newImage(asset, left, bottom)

    newItem.addEventListener('dblclick', function(){
        newItem.remove()
        console.log("clicked")
    })    
}
//function to fill the area with ether sky or grass
function fill(asset,left,bottom,width,height){
    for(let h=0; h < height; h++){
        for(let w=0; w<width; w++){
            newImage(asset,left+w*100, bottom+h*100)
        }
    }
}
//sets the boundry for the grass line where they meet and the skyline
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight - horizon
let heightOfGrass = horizon

//places the background
fill("assets/sky.png",0, horizon,window.innerWidth/100,heightOfSky/100)
fill("assets/grass.png",0,0,window.innerWidth/100,heightOfGrass/100)


// creates the images that take up the screen but cannot be picked up
newImage("assets/green-character.gif",100,100)
newImage("assets/pine-tree.png",450,200)
newImage("assets/tree.png",200, 300)
newImage("assets/pillar.png",350, 100)
newImage("assets/crate.png",150,200)
newImage("assets/well.png",500,425)


//creates the clickable items that can be removed
newItem("assets/sword.png",500, 405)
newItem("assets/sheild.png",165,185)
newItem("assets/staff.png",600, 100)
