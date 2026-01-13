## 1. Node.js Architecture

Node.js follows a single-threaded, event-driven, non-blocking I/O architecture designed to handle high concurrency efficiently.

### Key Characteristics

* Single main thread executes JavaScript
* Asynchronous I/O for scalability
* Event-driven using callbacks, promises, and async/await

### Core Components

* JavaScript Engine (V8)
* Node.js Core APIs
* Native Bindings
* Event Loop
* libuv

### Why this architecture works

* Avoids blocking threads
* Handles thousands of concurrent connections
* Shifts heavy work away from the main thread

**Example 1:**
Handling 10,000 HTTP requests without creating 10,000 threads.

**Example 2:**
Reading files asynchronously without stopping request handling.



## 2. JavaScript Engine (V8)

V8 is Google’s **high-performance JavaScript engine** written in C++.

### Responsibilities

* Parses JavaScript code
* Compiles it to machine code
* Executes JavaScript synchronously

### Important Facts

* V8 does NOT handle I/O
* V8 does NOT know about the event loop
* V8 runs only JavaScript

**Example 1:**
Executing a `for` loop or arithmetic operations.

**Example 2:**
Running synchronous code like `JSON.parse()`.

## 3. Node.js Core APIs

Node.js Core APIs provide server-side capabilities that JavaScript alone cannot do.

### Examples of Core APIs

* `fs` – file system access
* `http` – networking
* `crypto` – encryption
* `path`, `os`, `buffer`

### Key Point

These APIs look like JavaScript but are backed by C++ code.

**Example 1:**
`fs.readFile()` looks JS, but execution happens in native code.

**Example 2:**
`http.createServer()` delegates socket handling to lower layers.

## 4. Native Bindings

Native bindings connect **JavaScript code to C/C++ implementations**.

### Why they exist

* JavaScript cannot directly access OS-level features
* Native bindings act as a bridge

### How they work

* Written in C++
* Expose functions to JavaScript

**Example 1:**
`fs` module binding to POSIX file operations.

**Example 2:**
`crypto` module binding to OpenSSL.


## 5. Event Loop

The Event Loop is the orchestrator that decides when callbacks run.

### What it does

* Monitors queues
* Executes callbacks when the call stack is empty
* Ensures non-blocking behavior

### What it is NOT

* Not multi-threading
* Not parallel execution

**Example 1:**
Running a callback after a timer expires.

**Example 2:**
Handling a resolved promise callback.



## 6. libuv

### What is libuv?

libuv is a C library that provides asynchronous I/O and event loop implementation** for Node.js.

### Why Node.js needs libuv

JavaScript cannot:

* Manage OS threads
* Handle async file/network I/O
* Implement cross-platform event handling

libuv solves all of this.

### Responsibilities of libuv

* Event loop implementation
* Thread pool management
* Asynchronous file I/O
* Network I/O
* Timers

**Example 1:**
Handling TCP sockets across Linux, Windows, macOS uniformly.

**Example 2:**
Delegating file system operations to background threads.

---

## 7. Thread Pool

### What is a Thread Pool?

A set of background threads used to execute blocking operations.

### Why Node.js uses a thread pool

Some operations:

* Are blocking at OS level
* Cannot be handled asynchronously by the kernel

### Operations handled by thread pool

* File system (`fs`)
* DNS lookup (`dns.lookup`)
* Crypto operations
* Compression (`zlib`)

### Default size

* 4 threads (configurable via `UV_THREADPOOL_SIZE`)

**Example 1:**
Reading a large file using `fs.readFile()`.

**Example 2:**
Hashing passwords using `crypto.pbkdf2()`.


## 8. Worker Threads

### What are Worker Threads?

Worker threads are **separate JavaScript execution threads** within the same Node.js process.

### Why worker threads are needed

* Main thread gets blocked by CPU-heavy tasks
* Event loop stalls → bad performance

### Difference: Thread Pool vs Worker Threads

| Aspect        | Thread Pool          | Worker Threads          |
| ------------- | -------------------- | ----------------------- |
| Purpose       | Offload blocking I/O | Offload CPU-heavy JS    |
| JS Execution  | No                   | Yes                     |
| Controlled by | libuv                | `worker_threads` module |

**Example 1:**
Thread pool → file read operation.

**Example 2:**
Worker thread → image processing or ML computation.


## 9. Event Loop Queues

Node.js uses multiple queues to schedule tasks.



### Macro Task Queue

### Contains

* `setTimeout`
* `setInterval`
* `setImmediate`
* I/O callbacks

### Behavior

Executed **one task per event loop iteration**.

**Example 1:**
`setTimeout(() => {}, 0)`

**Example 2:**
HTTP request callback

### Micro Task Queue

### Contains

* `Promise.then`
* `catch`
* `finally`
* `process.nextTick`

### Behavior

Executed **immediately after current stack**, before macro tasks.

**Example 1:**
`Promise.resolve().then(...)`

**Example 2:**
`process.nextTick()`


### Execution Priority

1. Current Call Stack
2. Micro Task Queue
3. Macro Task Queue

Microtasks **always run before** macrotasks.

**Example 1:**
Promise callback runs before `setTimeout`.

**Example 2:**
`process.nextTick` runs before all other microtasks.

