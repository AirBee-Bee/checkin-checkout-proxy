const express = require('express');
const path = require('path');

let app = express();

app.get('/listing/:listingId', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.get('/listing/:listingId/rooms', (req, res) => {
  res.redirect(`http://localhost:5000${req.url}`);
});

app.get('/listing/:listingId/photos', (req, res) => {
  res.redirect(`http://localhost:3000${req.url}`);
});

app.get('/listing/:listingId/info', (req, res) => {
  res.redirect(`http://localhost:3333${req.url}`);
});

app.get('/listing/:listingId/amenities', (req, res) => {
  res.redirect(`http://localhost:3333${req.url}`);
});

app.get('/listing/:listingId/highlights', (req, res) => {
  res.redirect(`http://localhost:3333${req.url}`);
});

app.get('/propertyScores/:listingId', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.get('/propertyReviews/:listingId', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.get('/userInfo/:userId', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});


const port = 4000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})