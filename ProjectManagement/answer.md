# Understanding Project Management in NodeJS

## a. Package Managers

### What is a package manager?
A package manager is a tool that automates the process of installing, updating, and managing external libraries or modules in a project. It ensures that developers don’t have to manually download and configure dependencies.

### Why do we need package managers in backend development?
- They simplify dependency management.  
- Ensure consistent versions across different environments.  
- Save time by automating installation and updates.  

### Problems faced if package managers are not used
- Manual installation of libraries becomes time-consuming.  
- Version conflicts may occur.  
- Difficult to share projects with others since dependencies are not tracked.  

## b. NPM (Node Package Manager)

### What is NPM?
NPM is the default package manager for Node.js. It allows developers to install, share, and manage JavaScript packages easily.

### Why is NPM important for Node.js applications?
- Provides access to thousands of reusable packages.  
- Helps maintain consistency in project dependencies.  
- Simplifies collaboration by tracking dependencies in a single file.  

### How NPM helps in managing dependencies
- Stores dependency information in `package.json`.  
- Allows installation of specific versions.  
- Provides commands to update or remove packages easily.  


## c. Backend Project Initialization

### Command used to initialize a backend (Node.js) project
npm init


### Explanation of `npm init` and `npm init -y`
- **`npm init`**: Starts an interactive process asking details like project name, version, description, etc.  
- **`npm init -y`**: Skips the questions and creates a `package.json` file with default values.  


## d. Files and Folders Created After Project Initialization

### package.json
- Contains metadata about the project.  
- Lists dependencies and scripts.  
- Essential for project sharing and collaboration.  

### node_modules
- Stores all installed packages.  
- Contains actual code of dependencies.  
- Can be very large in size.  

### package-lock.json
- Records exact versions of installed dependencies.  
- Ensures consistency across different environments.  


### Which files/folders should not be pushed to GitHub and why?
- **`node_modules`**: Very large and can be regenerated using `package.json`.  

### Which files must be committed and why?
- **`package.json`**: Tracks dependencies and project metadata.  
- **`package-lock.json`**: Ensures exact versions are installed for consistency.  

