# Blog Website

A modern, feature-rich blog platform built with Node.js, designed to provide a seamless blogging experience for writers and readers alike.

## 🚀 Features

- **User-Friendly Interface**: Clean and responsive design for optimal reading experience
- **Content Management**: Easy-to-use blog post creation and editing
- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Optimized for speed and efficiency

# Blog Website

A full-stack blog platform built with React and Node.js, featuring a modern client-server architecture for optimal development experience and scalability.

## 🚀 Features

- **Modern Frontend**: React-based SPA with responsive design
- **RESTful API**: Node.js/Express backend with clean API endpoints
- **User Authentication**: JWT-based authentication system
- **Content Management**: Create, edit, and manage blog posts
- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Optimized for speed and efficiency

## 📁 Project Structure

```
Blog/
├── README.md
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/          # Home, Post, Login pages
│   │   ├── components/     # Navbar, PostCard components
│   │   ├── App.js          # Main App component
│   │   └── index.js        # React entry point
│   └── package.json        # Frontend dependencies
│
└── server/                 # Node.js Backend
    ├── routes/             # API route definitions
    ├── models/             # Database models (User, Post)
    ├── controllers/        # Business logic controllers
    ├── middleware/         # Authentication middleware
    ├── app.js              # Express server setup
    ├── .env                # Environment variables
    └── package.json        # Backend dependencies
```

## 🛠️ Technology Stack

### Frontend

- **React**: UI library for building interactive interfaces
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **CSS3**: Modern styling with responsive design

### Backend

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Blog
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/blog
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

### 4. Start the Application

**Development Mode:**

Terminal 1 (Backend):

```bash
cd server
npm run dev
```

Terminal 2 (Frontend):

```bash
cd client
npm start
```

The frontend will run on `http://localhost:3000` and proxy API requests to the backend on `http://localhost:5000`.

**Production Mode:**

```bash
cd client
npm run build
cd ../server
npm start
```

## 📝 Usage

### API Endpoints

**Authentication:**

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

**Posts:**

- `GET /api/posts` - Get all published posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (protected)
- `PUT /api/posts/:id` - Update post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)

### Frontend Features

- **Home Page**: Display all published blog posts
- **Post Detail**: View individual blog posts
- **Authentication**: Login/register functionality
- **Responsive Design**: Works on desktop, tablet, and mobile

### For Developers

- **Adding Components**: Create new React components in `client/src/components/`
- **Adding Pages**: Create new pages in `client/src/pages/`
- **API Routes**: Add new routes in `server/routes/`
- **Database Models**: Define models in `server/models/`
- **Controllers**: Add business logic in `server/controllers/`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the server directory with:

```env
PORT=5000                                    # Server port
NODE_ENV=development                         # Environment (development/production)
MONGODB_URI=mongodb://localhost:27017/blog   # MongoDB connection string
JWT_SECRET=your_jwt_secret_key_here          # JWT secret for token signing
JWT_EXPIRE=30d                               # JWT expiration time
```

### Database Setup

1. **Local MongoDB**: Install MongoDB locally and ensure it's running
2. **MongoDB Atlas**: Create a cluster and use the connection string in MONGODB_URI
3. **Database Name**: The database will be created automatically as 'blog'

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Issues and Support

If you encounter any issues or have questions, please:

1. Check the existing issues in the repository
2. Create a new issue with a detailed description
3. Include steps to reproduce the problem

## 🚧 Roadmap

- [x] Basic project structure setup
- [x] React frontend with routing
- [x] Node.js/Express backend API
- [x] User authentication system
- [x] Blog post CRUD operations
- [x] Responsive design
- [ ] Rich text editor for posts
- [ ] Comment system for blog posts
- [ ] Search functionality
- [ ] Categories and tags management
- [ ] File upload for images
- [ ] RSS feed support
- [ ] Social media integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Unit and integration tests

## 🚀 Deployment

### Frontend (Netlify/Vercel)

```bash
cd client
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway/DigitalOcean)

```bash
cd server
# Set environment variables in your hosting platform
# Deploy the server directory
```

### Full-Stack (Same Server)

```bash
cd client
npm run build
cd ../server
# The server will serve the React build in production mode
npm start
```

## 📊 Status

🚧 **Development Phase**: This project is currently in development. Features and documentation are being actively updated.

---

**Happy Blogging!** 🎉
