# JavaScript Event Loop Basics

This mini-project demonstrates how JavaScript prioritizes executing code using the **Call Stack**, **Microtasks**, and **Macrotasks**.

## 1. The 3 Golden Rules of Execution

JavaScript is single-threaded. Because it can only do one task at a time, it strictly follows this 1-2-3 priority order:

1. **Synchronous Code (Call Stack) goes FIRST.**
   Normal code runs instantly, exactly where it is written.
   _Examples: `console.log()`, math operations, arrays, and standard function calls._
2. **Microtasks (Promises) go SECOND.**
   This is the high-priority queue. JavaScript runs these the exact millisecond the synchronous code finishes.
   _Examples: `Promise.then()`, `fetch()` data resolving, and `queueMicrotask()`._
3. **Macrotasks go THIRD.**
   This is the low-priority queue. Everything here must wait until the Call Stack and the Microtask queue are totally empty before running.
   _(Examples include: Timers like `setTimeout` and `setInterval`, User UI Events like clicks or scrolls, and Network I/O callbacks)._

---

## 2. System Architecture Diagram

Here is the "Big Picture" showing exactly how the JavaScript Engine passes work to the Browser (Web APIs) and eventually to the Memory Queues:

```mermaid
flowchart LR
    subgraph Engine["JavaScript Engine (Sync)"]
        Stack[Call Stack]
    end

    subgraph Browser["Web APIs (Background)"]
        Timer[setTimeout]
    end

    subgraph Memory["Event Queues"]
        Micro[Microtask Queue<br/> High Priority]
        Macro[Macrotask Queue<br/> Low Priority]
    end

    Stack --"1. Sends async jobs to"--> Browser
    Browser --"2. Once ready,<br/>adds Promise to"--> Micro
    Browser --"2. Once timer finishes,<br/>adds timeout to"--> Macro

    Micro -."3. Event Loop moves FIRST".-> Stack
    Macro -."4. Event Loop moves SECOND".-> Stack
```

---

## 3. Written Order vs Execution Order

If you look inside our `app.js` file, you will notice the code is written strictly top-to-bottom. However, because of the Event Loop queues, JavaScript reads and executes the code out of order!

- **Written 2nd (`setTimeout`)** gets pushed to the back of the line and **RUNS 5th**.
- **Written 3rd (`Promise`)** jumps into the high-priority line and **RUNS 4th**.
- **Written 6th (Normal Function)** stays on the main thread and **RUNS 3rd**.
- **Written 7th (Bonus Task)** proves that if a Macrotask creates a Microtask, the engine pauses to run it immediately (**RUNS 8th**)!

### How to test it out:

1. Open `index.html` in your browser.
2. Open your Developer Tools (Right Click -> Inspect).
3. Navigate to the **Console** tab.
4. Reload the page and watch the execution! Notice how the true run order differs dramatically from the written top-to-bottom code.

---

## 4. Beginner-Friendly Resources for Async JS

Want to dive deeper into `Promises`, `async/await`, and the Event Loop? Start here:

1. **[What the heck is the event loop anyway? (JSConf EU)](https://www.youtube.com/watch?v=8aGhPhVfaqM)** _(YouTube)_
   This is the golden standard. It is the absolute best, most highly-visual, and entertaining presentation ever created detailing exactly how the Call Stack and Task Queues work.

2. **[The Modern JavaScript Tutorial: Promises & async/await](https://javascript.info/async)** _(Article)_
   An incredibly well-written, easy-to-read tutorial series. It breaks down complex topics into bite-sized, beginner-friendly chapters with great code examples.

3. **[Loupe by Philip Roberts](http://latentflip.com/loupe/)** _(Interactive Tool)_
   A fantastic playground website where you can actually paste your JavaScript code and watch a live animation of the engine sorting it into the Call Stack and Web APIs in real-time!
