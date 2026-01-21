Database Fundamentals – Conceptual Understanding

1. Why is db.json not suitable as a database for real projects?

- File-based storage limitations: `db.json` is just a flat file, not a true database system.
- Performance issues: As data grows, reading/writing becomes slow since the entire file must be processed.
- Scalability problems: It cannot handle large datasets or high user traffic.
- Reliability concerns: No built-in backup, replication, or recovery mechanisms.
- Concurrency issues: Multiple users writing at the same time can corrupt data.



2. Ideal characteristics of a database system

- Performance: Fast query execution and efficient data retrieval.
- Concurrency: Supports multiple users accessing/updating data simultaneously without conflicts.
- Reliability: Ensures data is available and consistent even during failures.
- Data Integrity: Enforces rules (constraints, relationships) to keep data accurate and valid.
- scalability: Can grow with increasing data and user load.
- Fault Tolerance: Recovers gracefully from crashes or hardware failures.


3. Types of Databases and Use Cases

Relational Databases (RDBMS)
- Definition: Store data in structured tables with rows and columns.
- Examples: MySQL, PostgreSQL, Oracle, SQL Server.
- Use Cases:
  - Banking systems (transactions, accounts).
  - E-commerce platforms (products, orders, customers).
  - Enterprise applications requiring strict consistency.

 Non-relational Databases (NoSQL)
- Definition: Store data in flexible formats (documents, key-value, graphs).
- Examples: MongoDB, Cassandra, Redis, DynamoDB.
- Use Cases:
  - Social media apps (user profiles, posts, comments).
  - Real-time analytics (logs, sensor data).
  - Content management systems with unstructured data.

