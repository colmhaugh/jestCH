const addition = require ("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 plus 22", () =>{
            expect(addition(20,22)).toBe(42);
        })
        test("should return 22 for 12 plus 10", () =>{
            expect(addition(12,10)).toBe(22);
        })

    });
    describe("Subtraction function", () => {
        
    });
    describe("Multiply function", () => {
        
    });
    describe("Division function", () => {
        
    });
})