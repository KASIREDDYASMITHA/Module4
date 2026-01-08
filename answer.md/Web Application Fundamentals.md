Web Application Fundamentals

Q1. Role of Frontend (FE)
The Frontend (FE) is the part of a web application that users directly see and interact with.

User Interface (UI): Responsible for the layout, design, colors, typography, and overall look of the application. It ensures the application is visually appealing and easy to use.

User Interaction: Handles how users interact with buttons, forms, navigation menus, and other elements. It provides responsiveness and feedback (e.g., showing error messages or success notifications).

Communication with Backend: The frontend sends requests (like form submissions or data fetches) to the backend using APIs (REST, GraphQL) and displays the returned data to the user.

Q2. Role of Backend (BE)
The Backend (BE) is the behind-the-scenes engine of a web application.

Server-Side Processing: Executes logic, processes requests, and generates responses. For example, calculating totals in an e-commerce cart.

Database Handling: Manages storage, retrieval, and updates of data in databases (SQL, NoSQL).

Security and Authentication: Ensures only authorized users can access certain features. Implements encryption, password hashing, and role-based access control.

Q3. Business Logic
Business Logic refers to the rules and workflows that define how data is processed and decisions are made in an application. It connects the frontend and backend to meet real-world requirements.

Examples:

E-commerce Website: Applying discount rules, calculating shipping costs, and validating stock availability.

Banking Application: Checking account balance before processing withdrawals, applying interest rates, and validating transactions.

Healthcare Portal: Ensuring only doctors can update patient records, while patients can only view their own reports.

Q4. Client–Server Model
The Client–Server Model is a way of structuring communication in web applications.

Client: The user’s device/browser that requests services (e.g., viewing a webpage).

Server: The machine that hosts the application, processes requests, and sends back responses.

Communication: Happens via HTTP/HTTPS protocols. The client sends a request (like “show my profile”), the server processes it, and returns the result (HTML, JSON, etc.).

Q5. Three-Tier Architecture
The 3-Tier Architecture separates a web application into three layers:

Presentation Layer (Frontend): The UI that users interact with.

Application (Business) Layer: Contains business logic, rules, and workflows.

Data Layer: Manages databases and data storage.

Why it’s used:

Improves scalability and maintainability.

Enhances security by isolating data access.

Allows independent updates to each layer without breaking the whole system.

Q6. JavaScript as a Backend Language
JavaScript is widely used in backend development, especially with Node.js.

Performance: Non-blocking, event-driven architecture makes it efficient for handling multiple requests simultaneously.

Ecosystem: Huge library support via npm (Node Package Manager).

Popular Frameworks: Express.js, NestJS, Meteor, and Next.js  enable rapid backend development.
