# ## If I Had More Time:
If I had more time, I would:
- Integrate a real database such as MongoDB or PostgreSQL for persistent storage.
- Set up authentication for the API using JWT so only authorized users can add or view superheroes.
- Add tests and test coverage, especially writing integration tests to test the full flow from adding superheroes to retrieving them.
- Add CI/CD using github actions to run tests before production.
- Add github hooks to make sure tests, linting, style issues etc are correct before pushing to prod
- add PM2 for scaling the processes incase the application grows bigger.
- Expand the application, add more features. the application is written in a feature based style so adding new features can be easier
- would have added a release branch and added that to our ci/cd to track the release versions
- Here's an improved version of your explanation, making it more concise and clear:
- If I had more time, I would have implemented the client-side using **Next.js**. For state management and API calls, I would have used **Redux Toolkit (RTK)** due to its powerful features:

  - **Cache Tag Invalidation**: RTK provides automatic cache invalidation, which ensures that the UI stays up-to-date without requiring manual refreshes.
  - **Optimized API Calls**: With RTK’s built-in hooks, fetching and managing data becomes seamless and efficient, reducing boilerplate code.
  - **Auto-Refreshing Data**: RTK allows automatic re-fetching and syncing of data when updates (such as saving or deleting) occur, ensuring that the UI reflects the latest state without additional effort.

This integration would enable a smooth and responsive experience for users, with real-time data updates and minimal overhead. This requirement would also have been achieved. `If you have time, create a quick React interface where users can add superheroes and see the sorted list in real-time.`


## Team Collaboration:
If I were to collaborate with a teammate, we could break down the work into backend and frontend tasks. One person could handle creating API endpoints and database interactions, while the other builds a UI for managing and displaying superheroes. We could use version control (e.g., GitHub) to track progress and collaborate efficiently.


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
- Go to: [http://localhost:8081/health](check-server-health) 

This will open the Swagger UI, where you can see and test all the API endpoints available in your project. Each endpoint is documented with details on the expected input and output, so you can easily test different actions directly from the browser.


### **Branching Strategy**

1. **`main` Branch**
   - The `main` branch is the production-ready branch.
   - It contains stable, production-quality code and is always deployable.
   - Only fully-tested, approved features should be merged into `main`.

2. **`develop` Branch**
   - The `develop` branch is used as the integration branch for all feature development.
   - It serves as the working branch where features, bug fixes, and enhancements are integrated and tested.
   - All new features and changes should be merged into `develop` through pull requests (PRs).
   

3. **Feature Branches (e.g., `feature/<feature-name>`)**
   - Feature branches are used to develop new features or work on bug fixes.
   - Each feature branch should branch off from `develop` and be named descriptively based on the feature 
   - Once a feature is complete, create a pull request to merge it back into `develop`.

4. **Pull Request (PR) Process**
   - All code should be merged into `develop` via a pull request.
 



