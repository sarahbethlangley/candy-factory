const buyChocolate = () => {
    const candy = {
        property: "milk chocolate"
    }
    return candy
}

const addFlavoring = (candy) => {
    candy.flavor = "mint"
    return candy
}

const makeBarkMixture = (candy) => {
    if (candy.flavor === "mint") {
        candy.mintFlavored = true 
    }else {
        candy.mintFlavored = false 
    }
    return candy
}

const bakeCandy = (candy) => {
    if (candy.mintFlavored === true) {
        candy.baked = true
    }else {
        candy.baked = false
    }
    return candy
}

const breakBark = (candy) => {
    if (candy.baked === true) {
        
    return [`Mint Chocolate Bark Piece`, `Mint Chocolate Bark Piece`,
    `Mint Chocolate Bark Piece`,`Mint Chocolate Bark Piece`,`Mint Chocolate Bark Piece`,
    `Mint Chocolate Bark Piece`]
    }
    return candy
}


const enjoyChocolate = buyChocolate()
const chocolateFlavoring = addFlavoring(enjoyChocolate)
const chocolateBarkMixture = makeBarkMixture(chocolateFlavoring)
const chocolateBaked = bakeCandy(chocolateBarkMixture)
const chocolateBark = breakBark(chocolateBaked)

console.log(chocolateBark)