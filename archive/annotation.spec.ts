import{test} from "@playwright/test"

test.skip(({browserName})=>browserName==='chromium'
)
test.describe('assertion of 1,2,3', async()=>{ 
test('assertion one', async({page})=>{

console.log('Testing assertion one started'),
console.log('Testing assertion one ended')

})


test('assertion two', async({page,browserName})=>{
   
console.log('Testing assertion two started'),
console.log('Testing assertion two ended')

})

test('assertion three', async({page})=>{

console.log('Testing assertion three started'),
console.log('Testing assertion three ended')

})

})


test.fixme('assertion four', async({page})=>{
console.log('Testing assertion four started'),
console.log('Testing assertion four ended')
})

test('assertion five', async({page})=>{
console.log('Testing assertion five started'),
console.log('Testing assertion five ended')
})