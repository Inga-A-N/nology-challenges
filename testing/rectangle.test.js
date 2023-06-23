// test("check that jest is set up correct", () => {
//     expect(true).toBe(true);
// });

import { rectangleArea } from "./rectangle.js";

const negativeOrZeroError = new Error ("Height and width should be greater than 0");

const paramsMustBeNumbers = new Error ("Height and width need to be numbers");

const invalidArgumentNumber = new Error("One or more parameters are missing");

describe("Test cases for a rectangle area function", () => {
    test("should calculate the area of rectangle if given two positive numbers", () => {
        expect(rectangleArea(2, 3)).toBe(6);
        expect(rectangleArea(2.1, 1.2)).toBe(2.52);
    });

    test("Should throw an error if height or width is 0 or negative number", () => {
        expect(() => {
            rectangleArea(-2, -6);
        }).toThrow(negativeOrZeroError);
    });

    test("Should throw an error when one or more argument are not a number", () =>{
        expect (() => {rectangleArea("hi", "hello");
        }).toThrow(paramsMustBeNumbers);
    
        expect(() => {rectangleArea("apple", 3);
        }).toThrow(paramsMustBeNumbers);

        expect(() => {rectangleArea(true, [3, 4]);
        }).toThrow(paramsMustBeNumbers);
        
    });


    test("Should throw an error if less than 2 parameters are passed", () => {
        expect (() => {
            rectangleArea();
            }).toThrow(invalidArgumentNumber);
    });

    
    

    
    
});
