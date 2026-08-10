import{test,expect} from "@playwright/test"

/*
test.skip('first test', async({page})=>{
 
 console.log('first test'),
 await page.goto('https://www.saucedemo.com/'),
 console.log(await page.title())

})



test('second test', async({page})=>{
 
 console.log('second test'),
 await page.goto('https://www.saucedemo.com/'),
  console.log(await page.title())
})



test('third test', async({page})=>{
 
 console.log('third test'),
 await page.goto('https://www.saucedemo.com/'),
  console.log(await page.title())
 
})

test.beforeAll('Triggered once every worker',async()=>{

    console.log('this should be triggered first)')
})

test.afterAll('Triggered once every worker',async()=>{

    console.log('this should be triggered second)')
})

test.skip('this will trigger third',async()=>{

    console.log('this should be triggered third)')
})

test.describe('groping fourth and fifvth test', async()=>{
test.afterAll('AF', async({})=>{

console.log('after each is activated')

})

test('fourth test', async({page})=>{
 
 console.log('fourth test'),
 await page.goto('https://www.saucedemo.com/'),
  console.log(await page.title())
 
})

test('fifth test', async({page})=>{
 
 console.log('fifth test'),
 await page.goto('https://www.saucedemo.com/'),
  console.log(await page.title())
 
})
})
*/

test.beforeAll('First Before all',async()=>{

    console.log('this should be triggered first)')
})



test.beforeAll('second before all',async()=>{

    console.log('this should be triggered second)')
})

test('this is a first test file',async()=>{

    console.log('Test file printed part 1')
})


test('this is second test file',async()=>{

    console.log('Test file printed part 2')
})

test.afterAll('First Before all',async()=>{

    console.log('this should be triggered second last)')
})

test.afterAll('First Before all',async()=>{

    console.log('this should be triggered last)')
})