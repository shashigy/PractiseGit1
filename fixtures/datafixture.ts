import {test as basetest} from "@playwright/test"

type Myfixture = {

logindata: any;
testdata:any;

}
export const test = basetest.extend<Myfixture>({

logindata: {

Uname : 'Admin',
Pwd: 'admin123',

},

testdata:{

Fname : 'Test',
Lname: 'Automate1',
email: 'testautomate1@gmail.com'

}

})

export {expect} from "@playwright/test"