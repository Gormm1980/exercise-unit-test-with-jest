// test("One euro should be 1.206 dollars", function(){
//     //import the function from app.js
//     const { fromEuroToDollar } = require('./app.js')

//     // use the function like its suppoed to be used
//     const dollars = fromEuroToDollar(3.5)

//     // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
//     const expected = 3.5 * 1.2; 
    
//     // this is the comparison for the unit test
//     expect(expected).toBe(dollars);})
    

    // test("One Dollar should be 109.36 Yens", function(){
    // //import the function from app.js
    // const { fromDollarToYen } = require('./app.js')

    // // use the function like its suppoed to be used
    // const Yens = fromDollarToYen(3.5)

    // // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    // const expected = 3.5 * 109.36; 
    
    // // this is the comparison for the unit test
    // expect(expected).toBe(Yens);})

    test("One Yen should be 0.0065 Yens", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const Pound = fromYenToPound(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 0.0065; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(Pound);})