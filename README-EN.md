# UserManager-React_Node.js
**EN-US** | <a href="https://github.com/leoGCoelho/usermanagement-react/edit/master/README.md">PT-BR</a>

## Modules Used
  - express
  - mongoose
  - cors
  - nodemon
  - dotenv
  - axios
  - react-router-dom
  - bootstrap
  - FontAwesomeIcon

## Implementation Info

### Broad Vision
The system programmed in **React** and **Node.js** uses a **MongoDB Atlas** cluster, initially configured to run on **localhost**, port **5000**. It is splitted into 2 main folders, namely **/src**, where the React frontend structure (components and App generation file) is maintained, and **/backend**, where, as as described by its name, stores models, routes, and other server and database access files through Node.js.

### React
The application consists of 4 pages:
  - Home containing a listing of all users stored in the system, also having the function of deleting users;
  - Registering users;
  - Editing user data;
  - Viewing of data of a specific user;
  
 ### Node.js
 The manager has a main model (User), which has been assigned the methods:
  - **GET /user:** Assigned to listing;
  - **GET /user/: id:** Assigned to specific view and edit (show old data);
  - **POST /user:** Assigned to user registration;
  - **PUT /user/: id:** Assigned to editing (storage in DB);
  - **DELETE /user/: id:** Assigned to user deletion;
  
 The registration of a user consists of the storage of his **name**, **email**, **telephone** and **address**, the data being verified upon submission of the form and, if the number of characters is too short, some data is duplicated from old tables or some other error, an exception will be thrown and will generate a log, and will not store the sent data.
