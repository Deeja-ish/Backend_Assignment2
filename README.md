# Backend Assignment 2 - User Management API

A Node.js/Express RESTful API for managing users with MongoDB integration.

## Features

- Get all users
- Create new users
- Update user information
- Delete users
- MongoDB database integration
- Request logging with Morgan
- Error handling and validation

## Project Structure

```
Backend_Assignment2/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controller/
│   └── userController.js     # User business logic
├── models/
│   └── User.js              # MongoDB User schema
├── routes/
│   └── userRoutes.js        # API route definitions
├── script.js                # Main application file
├── package.json             # Project dependencies
└── README.md               # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Backend_Assignment2
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/your_database_name
PORT=3000
```

4. Ensure MongoDB is running on your system

## Running the Application

Start the server:
```bash
node script.js
```

The server will run on `http://localhost:3000`

## API Endpoints

All endpoints are prefixed with `/api/users`

### Get All Users
- **Method:** GET
- **Endpoint:** `/api/users/home`
- **Response:**
```json
{
  "users": [...],
  "count": 5
}
```

### Create User
- **Method:** POST
- **Endpoint:** `/api/users/createUser`
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25,
  "classDetails": "Class A"
}
```
- **Response:**
```json
{
  "addUser": { ... }
}
```

### Update User
- **Method:** PUT
- **Endpoint:** `/api/users/updateUser/:id`
- **Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 26,
  "classDetails": "Class B"
}
```
- **Response:** Updated user object

### Delete User
- **Method:** DELETE
- **Endpoint:** `/api/users/deleteUser/:id`
- **Response:**
```json
{
  "message": "User deleted Successfully"
}
```

## Dependencies

- **express** - Web framework
- **mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **morgan** - HTTP request logger

## Error Handling

All endpoints include error handling with appropriate HTTP status codes:
- `200` - Success
- `500` - Server error

## Author

Created for Backend Assignment 2

## License

MIT