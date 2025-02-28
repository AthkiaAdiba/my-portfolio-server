# Portfolio

I am Athkia Adiba Tonne – a passionate Full-Stack developer specializing in Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, and Redux. Crafting dynamic and scalable web applications with a focus on performance and user experience. It is a Next.js project.

## 🚀 Fronted Live Demo

https://my-portfolio-new-nine.vercel.app

## 🚀 Backend Live Demo

https://my-portfolio-server-alpha-ashen.vercel.app

## ✨ Features

- 🌐 **RESTful API:** Provides endpoints for blogs and projects add, get, update, delete, and more.

- 🛠️ **CRUD Operations:** Full support for creating, reading, updating, and deleting projects, blogs and emails.

- 🔒 **Secure Environment:** Securely manage environment variables with dotenv.

- 📦 **Error Handling:** Comprehensive error responses for better debugging and API usage.

- 🛡️ **Secure Database Operations:** Data stored and managed securely using MongoDB.

- ⚙️ **Scalable Design:** Built to handle growing demands and datasets.

## 🛠️ Technologies Used

### Backend Framework

- **Node.js:** High-performance runtime for building scalable applications.
- **Express.js:** Framework for creating RESTful APIs efficiently.

### Database

- **MongoDB:** NoSQL database for secure and flexible data storage.
- **Mongoose:** Elegant ODM for MongoDB, enabling schema validation and easy database interactions.

### For Email

- **NodeMailer:** There has been used NodeMailer for sending emails.

### Development Tools

- **TypeScript:** Ensures type safety, enhancing code maintainability.
- **ts-node-dev:** Hot-reloading during development for faster iterations.
- **ESLint & Prettier:** For consistent code style and quality checks.
- **dotenv:** Manages environment variables securely.

## ⚙️ Installation and Setup

Follow these steps to set up and run the backend server locally:

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (Ensure MongoDB is installed and running locally or use a remote database)

### Clone the Repository

```bash
git clone https://github.com/AthkiaAdiba/my-portfolio-server
cd my-portfolio-server
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory with the following structure:

```bash
MONGO_URI=your_database_url
PORT=5000
EMAIL_USER=your_email
EMAIL_PASS=your_email_pass
```

### Run the Server

#### Development Mode

```bash
npm run start:dev
```

#### Production Mode

```bash
npm run build
npm run start:prod
```

## 🔗 Scripts

- `npm run start:dev`: Starts the development server with hot reloading.

- `npm run start:prod`: Starts the production server.

- `npm run build`: Compiles TypeScript into JavaScript.

- `npm run lint`: Checks code for linting issues.

- `npm run lint:fix`: Automatically fixes linting issues.

- `npm run prettier:fix`: Formats the codebase using Prettier.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`)
4. Push your changes (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License
