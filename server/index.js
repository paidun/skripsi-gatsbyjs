// const express = require("express");
// const gatsby = require("gatsby-plugin-nodejs");
// const path = require("path")

// const app = express();

// // app.use(express.static(path.join(__dirname, 'public')));

// // gatsby.prepare({ app }, () => {
// //   app.get('/*', function (req, res) {
// //     res.sendFile(path.join(__dirname, '../public/index.html'));
// //   });
// //   // app.get('/review-text', function (req, res) {
// //   //   res.sendFile(path.join(__dirname, '../public/gatsby-plugin-node.json'));
// //   // });


// // });

// app.use(express.static(path.join(__dirname, 'public')));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });


// const port = process.env.PORT || 1337;

// app.listen(port, () => console.log(`listening on port ${port}`));


const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");

const app = express();

gatsby.prepare({ app }, () => {
  // Here you can define your routes
  app.use(express.static(path.join(__dirname, 'public')));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
});

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));

