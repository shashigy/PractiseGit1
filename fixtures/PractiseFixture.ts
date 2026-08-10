import {test as baseTest} from "@playwright/test"

type Myfixture1 = {

    fixture1:string;
}

type Myworkerfixture={

   workerfixture : string;
}

export const test= baseTest.extend<Myfixture1, Myworkerfixture>({

 fixture1 : async({},use)=>{

const fixture1 = 'Im the fixture';
 console.log('Before the fixture')   

 await use(fixture1);
console.log('After the fixture')   

},

workerfixture : [async({}, use)=>{
 console.log('Before the workfixture')  
const workerfixture='Im the workerfixture';
 await use(workerfixture);
  console.log('After the workfixture')  
}, {scope:"worker"}]


})