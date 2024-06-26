import express from 'express';
import routes from './source/routes/routes.js';
import cors from 'cors';

// Variables
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Allowed origins
const allowedOrigins = [
  'https://main--frontend-nodejs.netlify.app',
  'https://nodejs-frontend-spring2024.netlify.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  credentials: true
};

// Middleware for cors
app.use(cors(corsOptions));

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
routes(app);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, HOST, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
