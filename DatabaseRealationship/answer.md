1. Definition of Database Relationship

A database relationship defines how two or more tables in a relational database are logically connected to each other. Relationships are established using primary keys (PK)** and **foreign keys (FK).  

- Primary Key (PK): A unique identifier for each record in a table.  
- Foreign Key (FK): A field in one table that refers to the primary key in another table.  

Relationships ensure data integrity, reduce redundancy, and allow complex queries across multiple tables.

2. Types of Database Relationships

There are three main types of relationships in relational databases:

a) One-to-One (1:1)

- Definition: Each record in Table A is linked to exactly one record in Table B.  
- E-commerce Example: 
  - Tables: `Users` and `UserProfiles`  
  - Each user has one unique profile (address, phone, preferences).  
  - Example: User `id=101` → Profile `id=101`.  

Diagram (text-based):
Users (PK: user_id) 1 ---- 1 UserProfiles (FK: user_id)



b) One-to-Many (1:N)

- Definition: A record in Table A can be linked to multiple records in Table B.  
- E-commerce Example:  
  - Tables: `Customers` and `Orders`  
  - A single customer can place many orders, but each order belongs to one customer.  
  - Example: Customer `id=201` → Orders `id=501, 502, 503`.  

Diagram (text-based):

Customers (PK: customer_id) 1 ---- N Orders (FK: customer_id)

c) Many-to-Many (M:N)

- Definition: Records in Table A can be linked to multiple records in Table B, and vice versa.  
- E-commerce Example:  
  - Tables: `Products` and `Orders`  
  - An order can contain multiple products, and a product can appear in multiple orders.  
  - This is implemented using a junction table (e.g., `OrderDetails`).  

Diagram (text-based):
```
Products (PK: product_id) M ---- N Orders (PK: order_id)
        \                                /
         \                              /
          -------- OrderDetails --------
          (FK: product_id, FK: order_id)
```

3. Summary with E-commerce Context

- One-to-One:User ↔ Profile (each user has one profile).  
- One-to-Many: Customer ↔ Orders (a customer can place many orders).  
- Many-to-Many: Orders ↔ Products (orders can contain many products, products can belong to many orders).  

These relationships form the backbone of an e-commerce database, enabling efficient management of users, products, and transactions.


4. Visual Representation (Markdown Diagram)

Here’s a simple ER-style diagram in text:

```
Users --------- UserProfiles
   |                 |
   | 1-to-1          |

Customers --------- Orders --------- Products
   |                 |                 |
   | 1-to-Many       | Many-to-Many    |
   |                 |                 |
   ---------------- OrderDetails -------
