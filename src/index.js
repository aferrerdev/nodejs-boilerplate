import express from 'express';
import routes from './routes/auth'

// Create Express Server
var app = express();

// Register routes
app.use('/api/auth', routes);
  
// Listen on port 3000
app.listen(3000);
