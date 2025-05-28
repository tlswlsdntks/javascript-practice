// document.querySelector('span').innerText = '텍스트 변경됨';

// import {x, y, person} from './module1.js'
// console.log(x, y)
// console.log(person)

// import {
//   x as a,
//   y as b,
//   person as individual
// } from './module1.js'
// console.log(a, b)
// console.log(individual)
// document.querySelector('span').innerText = '텍스트 변경됨'

// import {x,y} from './module1.js'
// import {add, mult} from './module2.js'
// import {Eagle} from './module3.js'
// console.log(
//   add(x,y), mult(x,y)
// )
// const eagle = new Eagle('독수리','푸드덕','토끼')
// eagle.hunt()

// import * as funcs from './module4.js'
// console.log(funcs)
// funcs.logResult(
//   [1,2,3,4,5].filter(funcs.isOdd).map(funcs.square).join(', ')
// )

// import mod5 from './module5.js'
// console.log(mod5)
// console.log(
//   mod5.arr.filter(mod5.isEven).join(', ')
// )

// const raceResults = await fetch('https://showcases.yalco.kr/javascript/mockserver/race-result').then(
//   response => response.json()
// )
// console.log(raceResults);

import Big from '../big.js/big.mjs'
console.log(Big)
console.log(new Big(0.1))
console.log(
  0.1+0.2,
  new Big(0.1).plus(0.2).toNumber()
)
console.log(
  0.2*0.7,
  new Big(0.2).times(0.7).toNumber()
)
console.log(
  0.9-0.6,
  new Big(0.9).minus(0.6).toNumber()
)