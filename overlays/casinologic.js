const COOKIES = {
    "1":{
        "link":"../Cookies/cheese.webp",
        "weight": 1
    },
    "2":{
        "link":"../Cookies/pizzabild3.webp",
        "weight":1
    },
    "3":{
        "link":"../Cookies/pizzabild2.webp",
        "weight":1
    },
    "4":{
        "link":"../Cookies/pizzabild4.webp",
        "weigth":1
    },
    "5":{
        "link":"../Cookies/pizzaofen.webp",
        "weight":1
    },
    "6":{
        "link":"../Cookies/pizzaslice.webp",
        "weight":1
    },
    "7":{
        "link":"../Cookies/sucuk.webp",
        "weight":1
    },
    "8":{
        "link":"../Cookies/tomatenSauce.webp",
        "weight":1
    },
    "9":{
        "link":"../Cookies/pizzabot.webp",
        "weight":1
    },
    "10":{
        "link":"../Cookies/pizzabäcker.webp"
    }
}

let COOKIESLENGTH = 0
for (var element in COOKIES) {
    COOKIESLENGTH++;
}

console.log(COOKIESLENGTH)

document.addEventListener("DOMContentLoaded", () => {
    
    const SPINWRAPPER = document.getElementById("spinwrapper")
    const SPINBUTTON = document.getElementById("confirmspin")

    function replaceWithRandomImgs() {
        for (let i1 = 0; i1 < SPINWRAPPER.children.length; i1++) {
            
            const CHILD = SPINWRAPPER.children[i1]

            for (let i2 = 0; i2 < CHILD.children.length; i2++) {
                const IMGTAG = CHILD.children[i2].children[0]
                IMGTAG.src = COOKIES[Math.floor(Math.random() * COOKIESLENGTH+1)]["link"]
            }
        }
    }


    replaceWithRandomImgs()

})

// SMRNW, github.com/marksmrnw