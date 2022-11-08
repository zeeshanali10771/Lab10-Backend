const {add, subtract, multiply, divide}=require('./Calculator')
               
             // Task-1 test cases file

test("Test case1 --> testing: Add method" , ()=>{
    expect(add(15,3)).toBe(18);;
})

test("Test case2 --> testing: Subtract method" , ()=>{
    expect(subtract(20,8)).toBe(12);;
})

test("Test case3 --> testing: Multiply method" , ()=>{
    expect(multiply(10,7)).toBe(70);;
})

test("Test case4 --> testing: Divide method" , ()=>{
    expect(divide(35,7)).toBe(5);;
})