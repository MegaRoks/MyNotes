# MyNotes
Simple server application of my notes on node.js

<h2>Getting Started</h2>
<h3>Prerequisites</h3>

To quickly create and configure a database, we use the [mLab](https://mlab.com/) service. Working with him is easy, for small amounts of information he is free.

<h3>Installing</h3>

Clone repository:

```javascript
git clone https://github.com/MegaRoks/MyNotes.git
```
npm:

```javascript
npm install
```

Next, we need to verify that `MongoDb` is installed by running:

```
mongo --version
```

If `MongoDb` is not installed on your machine, you should head to [MongoDb Download Center]( https://www.mongodb.com/download-center/community/) , download and install the version compatible with your operating system before you continue.

Add the following to the `db.js` file:

```javascript
module.exports = {
  url : "mongodb://<dbuser>:<dbpassword>@ds040089.mlab.com:40089/dbnotes"
};
```

run:

```
npm run dev
```

<h3>Contribute</h3>
Contributions are very welcome!

<a href="https://github.com/MegaRoks/MyNotes/issues/new" target="_blank">Open an issue</a> for bug and feature requests or <a href="https://github.com/MegaRoks/MyNotes/compare" target="_blank">submit PR</a> and make this plugin better.

<h3>License</h3>
This project is licensed under the terms of the <a href="https://github.com/MegaRoks/MyNotes/blob/master/LICENSE" target="_blank">MIT license</a>.
