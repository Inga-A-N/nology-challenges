import { sum } from "./sum-tdd.js";

describe("Test cases for sum function", () =>{

    
    test("should throw an error if one or more parameters are not a number", () => {
        
        expect(() => {
            sum("hello", 2)
        }).toThrow(new Error("One or more of the Parameters is not a number"));
        expect(() => {
            sum("hello", "bye")
        }).toThrow(new Error("One or more of the Parameters is not a number"));
        expect(() => {
            sum("hello", "bye")
        }).toThrow(new Error("One or more of the Parameters is not a number"));
    })

    test("throw an error if no parameters are passed ", () => {

        expect(() => {
            sum()
        }).toThrow(new Error("No parameters received"));
    });

    test("sum any number of arguments => 1", () =>{
        expect(sum(1, 2, 3, 4 )).toBe(10);
        expect(sum(1)).toBe(1);
    });

});