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

Create an account on mLab and deploy the new MongoDB database. To do this, click on the `Create New` button in the MongoDB Deployments section, in the appeared window, in the `Plan` section, select Single-node. Click `Continue`, select the `Sandbo`x server and give the database a name. Next, in the database management window, go to the Users tab and add a database `user`, setting a name and password.

Add the `config` directory to the project root, create a `db.js` file in it.

```
mkdir config 
cd config
touch db.js
```
Add the following to the `db.js` file:

```javascript
module.exports = {
  url : "mongodb://<dbuser>:<dbpassword>@ds040089.mlab.com:40089/dbnotes"
};
```

Do not forget to add the username and password to the URL (not the ones from the account in mLab, but those created for the database). If you are posting a project on Github, be sure to include db.js in the .gitignore file. So you will not make the public domain the name and password for working with the database.

run:

```
npm run dev
```

<h3>Contribute</h3>
Contributions are very welcome!

<a href="https://github.com/MegaRoks/MyNotes/issues/new" target="_blank">Open an issue</a> for bug and feature requests or <a href="https://github.com/MegaRoks/MyNotes/compare" target="_blank">submit PR</a> and make this plugin better.

<h3>License</h3>
This project is licensed under the terms of the <a href="https://github.com/MegaRoks/MyNotes/blob/master/LICENSE" target="_blank">MIT license</a>.
