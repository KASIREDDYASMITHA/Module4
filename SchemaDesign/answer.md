1. What schema design is and what a database schema represents

Schema design is the process of defining how data is structured in a relational database. A database schema represents tables, columns, data types, relationships, and constraints. It acts as a blueprint that determines how data is stored, related, and validated before any records exist.

2. Why schema design is required before writing backend code

Schema design must come first because backend logic depends on data structure. Without a defined schema, APIs become inconsistent and fragile. A well-designed schema ensures predictable queries, enforces rules at the database level, and prevents backend code from handling avoidable data integrity problems.

3. Impact of poor schema design on consistency, maintenance, and scalability

Poor schema design causes duplicated data, conflicting values, and complex queries. This breaks data consistency, increases maintenance effort, and makes scaling difficult. As data grows, badly designed schemas lead to performance issues, hard migrations, and increased chances of bugs during updates or feature additions.

4. Validations in schema design and why databases enforce them

Validations are constraints like NOT NULL, UNIQUE, PRIMARY KEY, and DEFAULT that restrict invalid data. Databases enforce validations to protect data integrity regardless of backend errors. They ensure required fields exist, values remain unique, and relationships are maintained even if application logic fails.

5. Difference between a database schema and a database table

A database schema is the complete structure of the database, including all tables, relationships, and constraints. A table is a single object within the schema that stores data for one entity. The schema defines how tables connect; tables only hold actual records.

6. Why a table should represent only one entity

Each table should represent a single entity to avoid redundancy and update anomalies. Mixing multiple entities in one table causes repeated data and inconsistency. Separating entities improves clarity, simplifies queries, and makes changes easier without affecting unrelated data or breaking existing relationships.

7. Why redundant or derived data should be avoided

Redundant or derived data should be avoided because it increases storage and creates inconsistency. When the same data exists in multiple places, updates may not sync correctly. Derived values should be calculated when needed to ensure accuracy and reduce maintenance complexity.

8. Importance of choosing correct data types

Choosing correct data types ensures data accuracy, validation, and performance. Proper types prevent invalid values, reduce storage usage, and allow efficient indexing. For example, using INTEGER for counts and DATE for dates enables correct comparisons, calculations, and database-level enforcement of valid data.

