let { mul, sum1 } = require("./calculate");
let a = 10;
let b = 20;
const https = require("node:https");
const crypto = require("node:crypto") 



setTimeout(()=>{
  console.log("this will come in 5 second")
},0) 


const hash = crypto.createHash('sha512').digest('hex')
console.log("we",hash)

  //password based key derivation function 2
  crypto.pbkdf2("password","salt", 200000,50,"sha512",(err,key)=>{
    console.log("key is genrated",key)
  }) 

let util = require("node:util");
  
// console.log(util);
console.log(mul(a, b));
console.log(sum1(a, b));

// function setTimeout(after, value, options = kEmptyObject) {
//   try {
//     if (typeof after !== "undefined") {
//       validateNumber(after, "delay");
//     }

//     validateObject(options, "options");

//     if (typeof options?.signal !== "undefined") {
//       validateAbortSignal(options.signal, "options.signal");
//     }

//     if (typeof options?.ref !== "undefined") {
//       validateBoolean(options.ref, "options.ref");
//     }
//   } catch (err) {
//     return PromiseReject(err);
//   }

//   const { signal, ref = true } = options;

//   if (signal?.aborted) {
//     return PromiseReject(new AbortError(undefined, { cause: signal.reason }));
//   }

//   let oncancel;
//   const { promise, resolve, reject } = PromiseWithResolvers();
//   const timeout = new Timeout(resolve, after, [value], false, ref);
//   console.log(timeout);
//   insert(timeout, timeout._idleTimeout);
//   if (signal) {
//     oncancel = FunctionPrototypeBind(
//       cancelListenerHandler,
//       timeout,
//       clearTimeout,
//       reject,
//       signal
//     );
//     kResistStopPropagation ??=
//       require("internal/event_target").kResistStopPropagation;
//     signal.addEventListener("abort", oncancel, {
//       __proto__: null,
//       [kResistStopPropagation]: true,
//     });
//   }

//   return oncancel !== undefined
//     ? SafePromisePrototypeFinally(promise, () =>
//         signal.removeEventListener("abort", oncancel)
//       )
//     : promise;
// }

https.get("https://jsonplaceholder.typicode.com/posts/1",(res)=>{
 console.log("data fetch successfully")
})

function xyz(a,b){
  return a+b;
}
console.log(xyz(2,3))
// let addnumber = parseInt(prompt("Add upper limit for the number:"));
// let maxLimit = Math.floor(Math.random() * addnumber) + 1;

// let guess = parseInt(prompt("Guess the number between 1 and " + addnumber));

// while (true) {
//   if (guess > maxLimit) {
//     guess = parseInt(prompt("Too high! Try a smaller number:"));
//   } else if (guess < maxLimit) {
//     guess = parseInt(prompt("Too low! Try a bigger number:"));
//   } else {
//     alert(" Correct! You guessed the number.");
//     break;
//   }
// }
