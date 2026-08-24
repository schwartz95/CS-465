# CS-465
Repository for class CS-465 

CS 465 Module Eight Journal Reflection: Architecture

In this module, we explored different frontend development techniques used in the full stack project. We compared and contrasted Express HTML, JavaScript, and single-page applications (SPAs).

Throughout the Travlr Getaways project, I employed various frontend development approaches. For the customer-facing website, I utilized Express with Handlebars templates to generate HTML on the server. When a customer requested a page, Express selected a route, retrieved the necessary data, and rendered a complete HTML page. This approach was effective for pages that primarily presented travel information and didn’t require extensive user interaction.

JavaScript added dynamic behavior and connected the application’s different layers. On the server, JavaScript and Node.js handled routes, controllers, database operations, and API responses. On the client side, JavaScript supported user interactions and communicated with the REST API.

The administrative interface was developed as a single-page application using Angular. Unlike the Express site, the SPA loaded its main page once and updated specific parts of the interface without reloading the entire page. Angular components, services, routing, and forms enhanced the administrative interface’s interactivity and modularity. The Express application was well-suited for the customer-facing site, while the Angular SPA provided the responsiveness and maintainability required for managing trip records.

Now, let’s delve into the backend’s choice of a NoSQL MongoDB database. MongoDB was an ideal choice because it naturally represented the application’s trip information as JSON-like documents. Each trip record contained related fields such as its code, name, destination, resort, duration, price, start date, description, and image. MongoDB’s ability to store these records without a rigid relational table structure made it a perfect fit for this application.
MongoDB seamlessly integrated with the project’s JavaScript-based technology stack. Mongoose provided schemas, validation, and convenient methods for creating, retrieving, updating, and deleting records. A NoSQL database like MongoDB offers flexibility when application requirements change. Fields can be added to documents without redesigning related tables, making it a practical choice for rapid development and future growth.

Functionality

How does JSON differ from JavaScript, and how does it facilitate communication between the frontend and backend development components?

JavaScript is a programming language that encompasses variables, functions, control structures, objects, and application logic. JSON, or JavaScript Object Notation, is a text-based data format. While JSON syntax resembles a JavaScript object, it lacks executable logic such as functions. Instead, it employs a standardized structure of keys, values, arrays, and objects, enabling data exchange between different systems.

JSON served as a unifying format for communication between the frontend and backend of the Travlr application. The backend retrieved trip documents from MongoDB and transmitted them through API endpoints as JSON responses. The Angular frontend requested data through its services, converted the responses into objects, and displayed the information using reusable components. When an administrator added or edited a trip, the Single Page Application (SPA) sent the form data to the API in JSON format. This consistent format ensured seamless collaboration between the browser, Express API, and MongoDB database.

Provide instances where code refactoring was performed, and explain the advantages of utilizing reusable UI components.

One significant refactoring involved converting static customer pages into Handlebars templates. Repeated page elements, such as headers and footers, were separated into reusable partials instead of being duplicated in every HTML file. This refactoring reduced redundant code and simplified site-wide updates, resulting in improved consistency and efficiency.
The application underwent a refactoring to separate data access and presentation. Routes determined which controller should handle a request, controllers managed application behavior, and models handled database interactions. In the Angular Single Page Application (SPA), API requests were moved into a service rather than being repeated within individual components. This allowed trip information to be displayed through reusable components instead of duplicating the same markup and logic for every record.

Reusable UI components enhance consistency, maintainability, and development efficiency. A component can be created and tested once and then reused wherever the same interface is needed. When its appearance or behavior changes, the developer can update only one component instead of modifying many separate pages. Components also simplify debugging because each part of the interface has a focused responsibility.

Testing is crucial in a full-stack application. It involves verifying methods, endpoints, and security aspects. An endpoint is a specific API URL that provides a client with access to a resource, while an HTTP method specifies the operation to perform on that resource. For instance, in the Travlr application, a GET request retrieves trip information, a POST request creates a new trip, a PUT request updates an existing trip, and a DELETE request removes one. Testing ensures that each endpoint and method returns the correct HTTP status code and response body. It should also cover invalid input, nonexistent records, duplicate values, and database or server errors.

I employed API testing concepts to validate both successful and unsuccessful requests. For example, a successful retrieval should return trip data and a 200 status code, while an unsuccessful lookup may return a 404 status code. Creating a valid resource should return the created record, while missing required fields should produce an appropriate client error.
Security introduces an additional layer of testing because protected endpoints must validate both the request data and the identity of the requester. The administrative login process authenticates a user and generates a JSON Web Token. The Angular application incorporates this token when requesting protected operations. Therefore, testing encompasses requests with a valid token, an invalid or altered token, an expired token, and no token at all. Passwords must also be hashed instead of stored as plain text. These tests ensure that public users can access appropriate information while only authenticated administrators can create or modify data.

Reflection
This course helped me progress towards my professional goals by providing me with hands-on experience in building a comprehensive application rather than focusing solely on a single aspect of software development. I gained insights into how a user interface, server, REST API, authentication system, and database collaborate as components of a full-stack solution. Completing the project further enhanced my ability to organize code, troubleshoot issues across multiple layers, and assess the impact of changes in one part of an application on the rest of the system.

The project honed my skills in JavaScript, Node.js, Express, Angular, MongoDB, Mongoose, Handlebars, RESTful APIs, component-based design, and CRUD operations. I also gained experience with routing, form handling, data validation, password hashing, JSON Web Tokens, protected endpoints, and API testing. Equally important, I developed a deeper understanding of the separation of concerns and reusable design principles.

These skills make me a more marketable candidate because I can effectively discuss and demonstrate the complete development lifecycle of a secure, data-driven web application. I now have a solid foundation for contributing to both frontend and backend development, learning additional frameworks, collaborating on larger systems, and building software that is maintainable, testable, and secure.
