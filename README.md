# A Synchronous Swim #
Your synchronized swim team is ready to take commands from you! Right now, they can only hear your commands when issued from within the client. They'll be a better team if they can receive your commands when you are away from the client too. Your goal is to make both the server program and client program coordinate the activities of the swim team.
> This was a pair-programming project that was assigned to me and another when students at Hack Reactor.

## Goals ##
 * Learn how to work with two different programs and get them to coordinate with each other
 * Gain more experience with asynchronous behaviors through the use of keyboard events and network events
 * Achieve a deeper understanding of how client and server systems interact with each other through CORS, uploading of files, requests, and responses.
 * Learn to write tests, use binary data, buffers, as well as reading and writing files to the hard drive.

## Repo and Program Structure ##
This repo contains two programs -- one that lives in the **`client`** folder and one that lives in the **`server`** folder. Both programs are started from the terminal so you'll need two terminal windows to run these programs. Each program has its own **`package.json`** file and must have its dependencies installed separately. The two programs are currently not connected in any way, but both can do interesting things.

The client program displays the swim team and their movements. It can accept commands (via the left/right/up/down arrow keys), and the swim team follows the commands that are received. This functionality should remain intact throughout the entire sprint.

The server program can accept directional commands from the keyboard using the arrow keys, or by typing the command out in full ("up"/"down"/"left"/"right") and pressing enter. When a valid command is received, the command is displayed on the screen and all others are ignored.

### Installing Project Dependencies ###
This repo will be your first introduction to running JavaScript applications outside of the browser using Node.js. Although both the browser and Node.js have JavaScript interpreters, there are some significant differences in what resources your application can interact with depending upon where the application is running.

Up to this point in the course, we have been primarily running front-end JavaScript applications in the browser. As we have seen in previous projects, JavaScript running in the browser can fetch and run JavaScript code from other locations on the internet such as fetching the jQuery or React library from a Content Delivery Network(CDN). This feature gives us the ability to fetch external JavaScript files to create dynamic web applications but it comes at a cost. When running JavaScript in the browser, your JavaScript code can't directly interact with your file system except via a select few browser APIs. Thinking about this, this limitation makes sense as it's far too easy for some nefarious person to gain unauthorized access to the JavaScript stored on a remote server. If we had an application that unknowingly used a malicious script and then we allowed JavaScript unfettered access to our file system, then we have just given hackers the ability to steal or modify your private information stored locally on your machine.

JavaScript applications running in Node cannot fetch JavaScript from a remote location and execute that code for a very good reason. When running a JavaScript application in Node.js, JavaScript can interact with your local file system. For the very same reasons as above, we do not want to unintentionally give malicious individuals the ability to interact with our file system. As a result of this, Node.js is only able to execute JavaScript code that is stored locally on the machine where we are running our JavaScript application.

This poses a problem as it is extremely common for us to use third-party libraries and frameworks to construct our server-side applications. The solution to this problem is via a specific application included with your installation of Node.js called the [Node Package Manager](https://www.npmjs.com/) or more commonly abbreviated as NPM. NPM is a package management application that gives you the ability to easily install libraries and modules locally onto your file system for use in your application.

NPM relies on a file stored within your project called the **`package.json`** file. In this file, you will find some general information about your project as well as a list of all of the project dependencies. Dependencies in this context are software modules that your application needs to run. When getting a repository for the first time, you should first look at the **`package.json`** file to get an idea of what libraries are included in the project and then install them via the command **`npm install`**. This command will read your **`package.json`** file and then download the dependencies listed in that file.

TL;DR: In this sprint, you will need to navigate to both the client and server directories and then run **`npm install`** in each directory to install the dependencies for both your client and server applications.

### Starting the programs ###
Both programs can be started with **`npm start`** in development mode. This runs the client using **`live-server`** so that code changes automatically refresh the browser. The server runs using **`nodemon`**, so that code changes cause automatic reloads.

When you are ready to get more interactive, start the server using **`npm run server`** -- this will run the server without **`nodemon`**. When running using **`nodemon`**, you'll need to press enter after each swim command (both arrow keys and written commands). Without **`nodemon`**, arrow commands will behave more responsively. To understand the difference, try running the server using each of the two methods before you start coding.

## Bare Minimum Requirements ##
All swim commands are in the form of the strings: 'up' 'down' 'left' 'right'. Swim commands can be sent to **`SwimTeam.move()`** in the client. ___Give it a try by opening up the console and sending the team some commands!___
 - [ ] Write a test to verify the server responds with a random swim command to a GET request. Then write the functionality that implements this feature.
 - [ ] Connect the client to the server. Using AJAX, periodically request a random swim command from the server. Confirm your swim team is moving around randomly.
 - [ ] Refactor the server program so that instead of responding with random commands, the user's directional keypresses and typed commands from the server terminal are sent in response. Keep your tests passing so be sure to update previously written test(s) to match this change.
 - [ ] Add a background image to the pool! For basic requirements, this feature should only support JPEG images. The file, ./background.jpg, is designated as the file for storing a background image in your server. For your convenience, this file is gitignored and configured for use in your source files. Sample images are provided in the spec folder.
  - [ ] If the background file isn't present, the server should return a 404. If the file is present, the file should be sent in response to a client request for it. A test for the 404 scenario is mostly complete; enable the test (change xit to it) and fill in the blanks. Then write the test for the success case.
  - [ ] Modify your GET handler to also respond to requests for a background image. Your background image tests should now be passing.
  - [ ] Be sure to update prior tests and the app code as needed to complete the feature and not break any prior features. Copy one of the images from the spec folder, then reload your client to confirm your background image is loaded correctly.
 - [ ] Next, add the ability for your server to accept an upload for a custom background image.
  - [ ] Tests for the POST request are mostly complete; enable the tests (change xit to it) and fill in the blanks, then write the post request HTTP handler. Be sure to read and understand how node accepts file uploads via POST requests using the data and end events. The file that is received during the upload should replace (overwrite) whatever is currently at ./background.jpg.
 - [ ] The last and final step will be to connect the AJAX file uploader from your client app to your server's API. Even though you have a working API as verified by your tests, you will need to modify the tests and API to work with multipart file formats -- see the included links on multipart data.
  - [ ] Modify the ajaxFileUpload function to use the correct URL.
  - [ ] Upload a file to your POST API, then examine the file contents to see that it's a multipart file. You may have observed that the background image is now broken. Why is this?
  - [ ] Modify the POST tests to use water-lg.multipart instead of a simple JPG file. Then modify your server to correctly extract the image data from the multipart data. Use the included multipart utilities to extract the image data the multipart data.
