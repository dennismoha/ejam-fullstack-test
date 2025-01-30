
### **Project Folder Structure Overview**

The project follows a **feature-based** folder structure, where each feature is encapsulated within its own folder. Each feature folder contains everything related to that feature, including the controller, routes, schema, and models (if applicable). This structure promotes modularity and separation of concerns, making it easy to add new features or modify existing ones without affecting other parts of the application.

---

#### **1. `src/` Folder (Main Application Logic)**

The `src` folder contains all the application logic and configurations. it is found on the root of the project. it contains the following folders

- **`features/` Folder**  
  This folder contains individual feature folders. Each feature represents a specific business domain in your application, such as "superheros," etc or any other new feature.." Within each feature folder, the following subfolders and files are defined:

  - **`controller/`**  
    Contains the business logic for that feature. Controllers handle the operations and data manipulations for that feature. Controllers interact with the models and return appropriate responses. in our case we have an in memory app but if we were to extend the application to use a proper database like postgreql, this is where we would interact with the db.

   

  - **`routes/`**  
    Contains route definitions for that feature. Routes define the HTTP request paths (e.g., GET, POST, PUT, DELETE) and link them to the controller methods. 


  - **`schema/`**  
    Contains Joi validation schemas for the data used in that feature. These schemas are used to validate incoming request data (such as body parameters, query parameters, etc.) before any logic is executed.

---

#### **2. Other Configuration Files in `src/`**



- **`setup-server.ts`**  
  Contains all configurations related to setting up the server, such as middlewares, routes, and server initialization. It imports route handlers from each feature folder and connects them to the server.

- **`app.ts`**  
  The main entry point of the application. It imports the necessary setup files (`setup-server`,`config.ts` etc.), handles errors during startup, and runs the application.

---


### **Visual Folder Structure Example**

Here’s a visual representation of the folder structure based on the updated organization:

```
project-root/
├── src/
│   ├── features/
│   │   ├── superheroes/
│   │   │   ├── controller/
│   │   │   │   └── superheroesController.ts
│   │   │   ├── routes/
│   │   │   │   └── superheroesRoutes.ts
│   │   │   ├── schema/
│   │   │   │   └── superheroesSchema.ts
│   ├── setup-database.ts
│   ├── setup-server.ts
│   ├── app.ts
└── tsconfig.json
```

---

### **How the Project Works**

To get started with the project, follow these simple steps:

1. **Install the dependencies**  
   Run the following command to install the required packages:

   ```
   npm install
   ```

2. **Start the development server**  
   Once the dependencies are installed, run the following command to start the development server:

   ```
   npm run dev
   ```

   This will launch the app in development mode, and you’ll be able to see real-time changes as you modify your code.

### **Available Scripts**

Here are the key scripts you can run for different tasks in the project:

- **`dev`**  
  Starts the app in development mode with hot reloading enabled. The command:

  ```
  "dev": "nodemon -r tsconfig-paths/register src/app.ts | bunyan"
  ```

  It uses `nodemon` to automatically restart the server on changes, and `bunyan` to log output in a structured format.

- **`start:prod`**  
  Starts the app in production mode. Run this command to run the compiled code from the `dist` directory in a production environment:

  ```
  "start:prod": "NODE_ENV=production node ./dist/src/app.js  | bunyan"
  ```

- **`lint:check`**  
  Lints your TypeScript files to check for any issues. Run this to see if there are any code style or potential errors:

  ```
  "lint:check": "eslint \"./src/**/*.ts\""
  ```

- **`lint:fix`**  
  Automatically fixes linting errors in your TypeScript files:

  ```
  "lint:fix": "eslint \"./src/**/*.ts\" --fix"
  ```

- **`prettier:check`**  
  Checks if your files follow the Prettier formatting rules:

  ```
  "prettier:check": "prettier --check \"./src/**/*.{ts,json}\""
  ```

- **`prettier:fix`**  
  Automatically fixes formatting issues in your files using Prettier:

  ```
  "prettier:fix": "prettier --write \"./src/**/*.{ts,json}\""
  ```

- **`build`**  
  Compiles the TypeScript code into JavaScript for production use. Run this to transpile your source code:

  ```
  "build": "tspc -p ."
  ```




### **APIs**

You can test and interact with the APIs using Swagger UI. All available endpoints are listed there, providing detailed documentation for each. 

To access the API documentation:

- Go to: [http://localhost:8081/api-docs/#/](http://localhost:8081/api-docs/#/)

This will open the Swagger UI, where you can see and test all the API endpoints available in your project. Each endpoint is documented with details on the expected input and output, so you can easily test different actions directly from the browser.


