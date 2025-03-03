// 2️⃣ Promises (Modern Alternative)
// A Promise is an object that represents the eventual success or failure of an asynchronous operation.
// It has three states:

// Pending – Initial state, operation not yet completed.
// Fulfilled (Resolved) – Operation completed successfully.
// Rejected – Operation failed.
// ✔ Promises solve the "Callback Hell" problem by using .then() and .catch() instead of deeply nested callbacks.

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function boilWater() {
  return new Promise((resolve, reject) => {
    let state = PENDING; // Initial state
    console.log(`Boiling water... State: ${state} (Pending)`);
    
    setTimeout(() => {
      state = FULFILLED;
      console.log(`Water has been boiled. State: ${state} (Fulfilled)`);
      resolve();
    }, 2000);
  });
}

function addTeaLeaves() {
  return new Promise((resolve, reject) => {
    let state = PENDING;
    console.log(`Adding tea leaves... State: ${state} (Pending)`);

    setTimeout(() => {
      state = REJECTED;
      console.error(`Tea leaves are finished! ❌ State: ${state} (Rejected)`);
      reject("Tea leaves are finished!");
    }, 2000);
  });
}

function addMilk() {
  return new Promise((resolve, reject) => {
    let state = PENDING;
    console.log(`Adding milk... State: ${state} (Pending)`);

    setTimeout(() => {
      state = FULFILLED;
      console.log(`Milk added to tea. State: ${state} (Fulfilled)`);
      resolve();
    }, 2000);
  });
}

boilWater()
  .then(addTeaLeaves)
  .then(addMilk)
  .then(() => console.log("Tea is ready! ✅"))
  .catch((error) => console.error(`Error: ${error}`));
