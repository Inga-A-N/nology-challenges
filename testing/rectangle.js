export const rectangleArea = (height, width) => {

    if (height === undefined || width === undefined) {
        throw new Error("One or more parameters are missing");
    }

    if (typeof height !=="number" || typeof width !=="number"){
        throw new Error("Height and width need to be numbers")
    }

    if (height <= 0 || width <= 0) {
        throw new Error("Height and width should be greater than 0");
    }
 
    return height*width
}