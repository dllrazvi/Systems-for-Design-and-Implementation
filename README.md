# Systems for Design and Implementation
This repository includes full-stack web applications developed as coursework for the "Systems for Design and Implementation" subject. The projects cover frontend, backend, database integration, deployment, and cybersecurity concepts using modern web technologies.


## Assignment 1 – Backend & RESTful API Design
Overview
Implemented a RESTful API with full CRUD, filtering, and sorting functionalities.

All data was stored in memory (no persistence, cookies, or local storage).

Ensured CORS compliance and proper backend data validation.

RESTful routes documented and implemented according to industry standards.

## Assignment 2 – Relational Persistence and Optimization
### Bronze Requirements
Created a 1-to-many relationship between entities (e.g., F1 Drivers and Race Histories).

Implemented CRUD, filtering, and sorting on the database using MongoDB and Mongoose.

Used an ORM for managing schema and relationships.

### Silver Requirements
Populated database with >100,000 records using Faker.

Optimized data retrieval for statistical endpoints using indexes.

Measured performance with Apache JMeter.

### Gold Requirements
Implemented a user authentication system with login/register and session management.

Created two user roles: regular and admin.

Built an activity logging system to monitor user behavior.

Backend thread flags suspicious activity, viewable only by admin users.

## Assignment 3 – Full-Stack Application (Frontend + Backend + MongoDB)
Technologies Used
Frontend: React, TypeScript, Vite

Backend: Express.js, TypeScript

Database: MongoDB (via Mongoose)

Features
F1 Driver module: Add, update, delete, list all, search by name

Race History module: Add, update, delete, search by driver

Clear component structure and visual feedback on actions


Testing
Fully tested manually (CRUD flows + validation)

Integrated with MongoDB Compass

All components successfully communicate via REST API

## Assignment 4 – Deployment
### Bronze
Deployed the backend on AWS (or an equivalent cloud provider)

### Silver
Deployed both frontend and backend

### Gold
Used Docker Compose for automation and integrated with Amazon ECS

## Assignment 5 – Authentication and Cybersecurity
### Bronze
Enabled HTTPS on the backend deployment

### Silver
Integrated JWT-based authentication and token session handling

### Gold
Implemented 2FA (two-factor authentication) using a custom or existing framework

Provided a secure experience across both frontend and backend
