
# :rocket: Database setup and maintenance

### :book: What is build script?

- A build script is a file that is started by a build plan. The build script prepares output from generated files.

- It make sure that database have  the same pattern for all the team member.

- When you set up the project in other environment, a new build can be launched automatically by the server. It will ensure that you have not forgot to commit anything needed for the build.


---
### :book: What is database migration?
- Migrations are like version control for your database, or history to facilitate track changes on database, and  allowing your team to define and share the application's database schema definition. 
-  If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in your changes from source control, you've faced the problem that database migrations solve.

---
## :spider_web: What are the advantages of migration tools?
1. Migrations are helpful because they allow database schemas to evolve as requirements change. 
2. They help developers plan, validate, and safely apply schema changes to their environments. 
3. Migration systems create artifacts or files that can be shared
4. It facilite tracking the changes that occur during build the project.

## :moon: Conclusion

schema migration tools are optional, the organization, functionality, and control they offer make them some of the most widely used database tools for development. Being able to plan and execute changes to the database structure and record those modifications with the rest of your code is incredibly valuable. While migration tools might vary in the features they offer or the strategy they use to analyze differences and apply changes, the role they fulfill is an important component to reliable and predictable development.

---
## Example:

#### build.SQL
```javascript=
BEGIN;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(150) DEFAULT 'Gaza'
);

INSERT INTO users (name, location) VALUES 
  ('Rand', 'Gaza'),
  ('Salma', 'Gaza'),
  ('Saleh', 'Gaza'),
  ('Ghada', 'Gaza');

COMMIT;
```

#### build.js
``` javascript=
const dbBuild = () => {
     const sql = readFileSync("build.SQL").toString();
     return connection.query(sql);
 };
```