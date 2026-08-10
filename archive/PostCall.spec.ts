import {expect, test} from "@playwright/test"


test('Post', async({request})=>{

const requestpost = await request.post('/booking',{

data:{

    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}})

const requestpostlog = await requestpost.json()
console.log(requestpostlog)
expect(requestpost.status()).toBe(200),
expect(requestpost.ok()).toBeTruthy()
expect(requestpostlog.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  }
)

const requestlogdepositpaid =  requestpostlog.booking.depositpaid
expect(requestlogdepositpaid).toEqual(true)
})