import {test} from "@playwright/test"


test.describe('describing test @UI', {
annotation: {

    type:"User story item",
    description:"https://www.google.com/?zx=1771828747530&no_sw_cr=1"
}

},async()=>{


test('Test 1', {

    tag:"@test",
    annotation:[{

        type: "this is test 1",
        description: "https://www.google.com/?zx=1771828747530&no_sw_cr=1"

    }, 
    {
        type: "this is test 2",
        description: "https://www.google.com/?zx=1771828747530&no_sw_cr=2"

    }]



},async()=>{

    console.log('Test1')

})

test('Test 2', async()=>{

    console.log('Test2')

})

test('Test 3', async()=>{

    console.log('Test2')

})

})

test('Test 4',{tag:"@API"}, async()=>{

    console.log('Test4')

 })

test('Test 5',{tag:["@UI","@smoke", "@API"]}, async()=>{

    console.log('Test 5')

})