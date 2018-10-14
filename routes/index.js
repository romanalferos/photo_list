var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

module.exports = router;

/* Pasted from catalog.js */

the control dir will pull the photos queried together

bought RomanAlferos.com from namecheap.com
Around $11.18/yr

namecheap.com and heroku.com
romanalferos
bsSdvH8!9%4nA9sen

using the following tutorial
https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb

opened up a terminal window and started the lesson
There were some modifications to the lesssons.
instead of C:\node>npm install -g express-generator
I pasted in simply npm install -g express-generator

instead of C:\node>express nodetest1
I created C:\Users\newuwser\Documents\Website2018
then navigated to C:\Users\newuwser\Documents\Website2018
then express nodetest1
this created the folder with some folder structure in it

  warning: the default view engine will not be jade in future releases
  warning: use `--view=jade' or `--help' for additional options


   create : nodetest1\
   create : nodetest1\public\
   create : nodetest1\public\javascripts\
   create : nodetest1\public\images\
   create : nodetest1\public\stylesheets\
   create : nodetest1\public\stylesheets\style.css
   create : nodetest1\routes\
   create : nodetest1\routes\index.js
   create : nodetest1\routes\users.js
   create : nodetest1\views\
   create : nodetest1\views\error.jade
   create : nodetest1\views\index.jade
   create : nodetest1\views\layout.jade
   create : nodetest1\app.js
   create : nodetest1\package.json
   create : nodetest1\bin\
   create : nodetest1\bin\www

   change directory:
     > cd nodetest1

   install dependencies:
     > npm install

   run the app:
     > SET DEBUG=nodetest1:* & npm start

That was the output
For the next step, I installed notepad ++
modified original json file to this

{
  "name": "nodetest1",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
      "cookie-parser": "~1.4.3",
      "debug": "~2.6.9",
      "express": "~4.16.0",
      "http-errors": "~1.6.2",
      "jade": "~1.11.0",
      "mongodb": "^3.0.5",
      "monk": "^6.0.5",
      "morgan": "~1.9.0"
  }
}

The next step where you cd to nodetest1 (or Website2018 in my case), I get the following errors

npm WARN saveError ENOENT: no such file or directory, open 'C:\Users\newuwser\Documents\Website2018\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\Users\newuwser\Documents\Website2018\package.json'
npm WARN Website2018 No description
npm WARN Website2018 No repository field.
npm WARN Website2018 No README data
npm WARN Website2018 No license field.

up to date in 0.094s

They talk about warnings that you can ignore on the guide, but my errors are different and seem like a showstopper
I can verify that the file package.json is within the Website2018 folder
reviewing the previous steps:
	the Node.js installation is global, should be good for everywhere
	This is my mistake, I changed over to my Website2018 folder, so the npm install step didn't get executed here; with that done, I can jump back to the present step

npm install yields the predicted warnings:

npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
npm WARN notice [SECURITY] uglify-js has the following vulnerability: 2 low. Go here for more details: https://nodesecurity.io/advisories?search=uglify-js&version=2.2.5 - Run `npm i npm@latest -g` to upgrade your npm version, and then `npm audit` to get more info.
npm WARN notice [SECURITY] constantinople has the following vulnerability: 1 critical. Go here for more details: https://nodesecurity.io/advisories?search=constantinople&version=3.0.2 - Run `npm i npm@latest -g` to upgrade your npm version, and then `npm audit` to get more info.
npm notice created a lockfile as package-lock.json. You should commit this file.
added 129 packages in 13.542s

npm start went well

C:\Users\newuwser\Documents\Website2018\nodetest1>npm start

> nodetest1@0.0.0 start C:\Users\newuwser\Documents\Website2018\nodetest1
> node ./bin/www

http://localhost:3000

has the following message

Express

Welcome to Express


For Reference:
https://closebrace.com/expressjscheatsheet
C:\Users\newuwser\Documents\Website2018\expressjs_cheatsheat.pdf

opened up the app.js
word from guide "instantiates"
word from google "respresent as or by in instance"

opened up the index.js file
modified
opened index.jade and saved as helloworld.jade
modified and restarted npm in terminal

http://localhost:3000
http://localhost:3000/helloworld

downloaded mongodb from community server, no sign up required
installed with the optional Compass GUI

opened new terminal
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath C:\Users\newuwser\Documents\Website2018\nodetest1\data\

there are a bunch of warnings, hopefully they can be ignored for this stage

back in the first terminal, entered command
more warnings

inside mongod terminal which popped up in 1st terminal window (note the new prompt arrow)
use nodetest1
don't see anything change in the other window but the data folder is now populated, so that's good?

according to guide, read up on JSON

got to the usercollection auto creation step
it worked! or at least I got the correct output

https://closebrace.com/categories/five-minute-react
That's a second tutorial for MongoDB

next line with first tutorial, now have 3 testusers
that's good

then there's a line about creating HTML, but I'm not sure where to put that
save this for later

modified the app.js file to include the mongo and monk stuff
on to step 6

inside index.js
created serlist.jade

Things are going well, so these notes are a little sparse

http://localhost:3000/userlist
Shows the 3 test users set earlier
OK!

something about AJAX and JQuery about the client side vs server side user list modification
went over my head, but there's a separate tutorial after this

at this point, everything is localhost, so it won't be accessible from any other computer even if it's on the same network, right? not sure yet.

created the new user form






