const firePixelsArray = []
const fireWidth = 2
const fireHeight = 3

function start () {
    createFireDataStructure()
    console.log(firePixelsArray)
}

function createFireDataStructure() {
    const numberOfPixels = fireHeight * fireHeight

    for (let ii = 0; ii < numberOfPixels; ii++) {
        firePixelsArray[ii] = 0
    }
}

function calculateFirePropagation() {

}

function renderFire() {

}

start()
