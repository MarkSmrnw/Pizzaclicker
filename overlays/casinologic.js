const COOKIES = {
    "1":{
        "link":"../Cookies/cheese.webp",
        "weight": 1
    },
    "2":{
        "link":"../Cookie/pizzabild1.webp",
        "weight":1
    },
    "3":{
        "link":"../Cookie/pizzabild2.webp",
        "weight":1
    }
}

let COOKIESLENGTH = 0
for (var element in COOKIES) {
    COOKIESLENGTH++;
}

console.log(COOKIESLENGTH)

document.addEventListener("DOMContentLoaded", () => {
    
    const SPINWRAPPER = document.getElementById("spinwrapper")
    
    function replaceWithRandomImgs() {
        for (let i1 = 0; i1 < SPINWRAPPER.children.length; i1++) {
            
            const CHILD = SPINWRAPPER.children[i1]

            for (let i2 = 0; i2 < CHILD.children.length; i2++) {
                const IMGTAG = CHILD.children[i2].children[0]
                
                a = COOKIES[Math.floor(Math.random() * COOKIES.length)]
                console.log(COOKIES)
                console.log(a)
            }
        }
    }


    replaceWithRandomImgs()

})

// SMRNW, github.com/marksmrnw