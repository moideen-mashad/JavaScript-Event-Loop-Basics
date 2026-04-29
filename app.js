// Written 1st | RUNS 1st (Synchronous)
console.log("1. Main Execution Start");

// Written 2nd | RUNS 5th (Macrotask)
setTimeout(() => {
    console.log("5. Resolving Macrotask (setTimeout)");
}, 0);

// Written 3rd | RUNS 4th (Microtask)
Promise.resolve().then(() => {
    console.log("4. Resolving Microtask (Promise)");
});

// Written 4th | RUNS 2nd (Synchronous)
console.log("2. Main Execution Continue");Z

// Written 5th | RUNS 6th (Delayed Macrotask)
const intervalId = setInterval(() => {
    console.log("6. Resolving Delayed Macrotask (setInterval)");
    clearInterval(intervalId);
}, 2000);

// Written 6th | RUNS 3rd (Synchronous Function)
const mySyncFunction = () => {
    console.log("3. Main Execution Function Call");
}
mySyncFunction();


// --- ADVANCED: NESTED TASKS ---
// Written 7th | RUNS 7th
setTimeout(() => {
    console.log("7. Bonus Macrotask (Runs after the first setTimeout)");
    
    // Written 8th | RUNS 8th
    Promise.resolve().then(() => {
        console.log("8. Nested Microtask (Jumps to VIP line immediately after Step 7 finishes!)");
    });
}, 0);

/* 
 * ======== TRUE EXECUTION ORDER ========
 * 1. 1. Main Execution Start
 * 2. 2. Main Execution Continue
 * 3. 3. Main Execution Function Call
 * 4. 4. Resolving Microtask (Promise)
 * 5. 5. Resolving Macrotask (setTimeout)
 * 6. 7. Bonus Macrotask (Runs after the first setTimeout)
 * 7. 8. Nested Microtask (Jumps to VIP line immediately after Step 7 finishes!)
 * 8. 6. Resolving Delayed Macrotask (setInterval)
 * =======================================
 */
