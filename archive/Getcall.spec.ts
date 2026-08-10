import {test, request, expect} from "@playwright/test"

/*let requestglobal : any
test.beforeAll('Passing it for whole test', async()=>{

requestglobal= await request.newContext({

    baseURL: 'https://restful-booker.herokuapp.com',
    extraHTTPHeaders:{
        Accept:"application/json"
    }
})

})


test('Get basics', async({request})=>{

const requestingbaseurl = await request.get('/booking',{

    headers:{

        Accept:"application/json"
    }
})
console.log(await requestingbaseurl.json())
})


test('Get basic2', async()=>{

const context1= await request.newContext({

    baseURL:"https://restful-booker.herokuapp.com",

    extraHTTPHeaders:{

        Accept:"application/json"
    }
});

const context2= await context1.get('/booking')
console.log(await context2.json())



})


test('requestbase3', async()=>{

   const requestprint= requestglobal.get('/booking')
   console.log(await requestprint.json())

}),

test('using protractor', async({request})=>{

const commonrequest2 =await request.get('/booking/201')
console.log(await commonrequest2.json())

})

test('general practise 7', async({request})=>{

const commonrequest3 =await request.get('/booking?firstname=John&lastname=Smith')
console.log(await commonrequest3.json())

})

*/
test('Error', async ({ request }) => {
  const commonrequest5 = await request.get('/booking', {
    params: {
      firstname: "John",
      lastname: "Smith"
    }
  });
  const responseBody = await commonrequest5.json();
  console.log(responseBody);
})

test('status check',async({request})=>{

   const requeststatus=  await request.get('/booking/40')
   console.log(await requeststatus.json()),
   expect(requeststatus.status()).toBe(200),
   expect(requeststatus.ok()).toBeTruthy(),
   expect(await requeststatus.json()).toMatchObject({
  firstname: 'John',
  lastname: 'Smith',
  totalprice: 111,
  depositpaid: true,
  bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
  additionalneeds: 'Breakfast'

   }

)

const requestaassertion= await requeststatus.json()
expect(requestaassertion.firstname).toEqual('John')

})

test('UI & API', async({request,page})=>{

const requesturl = await request.get('https://api.demoblaze.com/entries')
const requestdata= await requesturl.json()
console.log(requestdata.Items[0].title)
await page.goto('https://www.demoblaze.com/'),
await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(requestdata.Items[0].title)
}
)

test('post api url', async({request})=>{
const requestpostcart= await request.post('https://api.demoblaze.com/addtocart')

expect(requestpostcart.status()).toBe(200)

})