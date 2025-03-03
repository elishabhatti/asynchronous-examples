// 1️⃣ Callbacks (Oldest Method)
// A callback is a function that is passed as an argument to another function and gets executed once the task is completed.

// ⚡ Problem with Callbacks: "Callback Hell"
// When multiple callbacks are nested inside each other, the code becomes hard to read and maintain.

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function boilWater(callback) {
  let state = PENDING;
  console.log(`Boiling water... State: ${state} (Pending)`);

  setTimeout(() => {
    state = FULFILLED;
    console.log(`Water has been boiled. State: ${state} (Fulfilled)`);
    callback(null);
  }, 2000);
}

function addTeaLeaves(callback) {
  let state = PENDING;
  console.log(`Adding tea leaves... State: ${state} (Pending)`);

  setTimeout(() => {
    // Simulating an error (Uncomment to test rejection)
    // return callback("Tea leaves are finished! ❌");

    state = FULFILLED;
    console.log(`Tea leaves added. State: ${state} (Fulfilled)`);
    callback(null);
  }, 2000);
}

function addMilk(callback) {
  let state = PENDING;
  console.log(`Adding milk... State: ${state} (Pending)`);

  setTimeout(() => {
    state = FULFILLED;
    console.log(`Milk added to tea. State: ${state} (Fulfilled)`);
    callback(null);
  }, 2000);
}

boilWater((error) => {
  if (error) return console.error(`Error: ${error}`);

  addTeaLeaves((error) => {
    if (error) return console.error(`Error: ${error}`);

    addMilk((error) => {
      if (error) return console.error(`Error: ${error}`);

      console.log("Tea is ready! ✅");
    });
  });
});
