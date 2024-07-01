// Create web server and listen on port 3000
// Create a route for GET /comments
// Send a response with a JSON object of comments

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server and visit http://localhost:3000/comments in your browser.
// You should see an empty JSON object: { comments: [] }