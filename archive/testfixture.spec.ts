import{test} from "../fixtures/PractiseFixture"

test('executing test', async({fixture1, workerfixture})=>{

console.log(fixture1);
console.log(workerfixture);

})

test('executing second test', async({fixture1})=>{

console.log(fixture1);


})
