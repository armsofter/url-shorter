There is 2 folders 1)API, 2)client.
API => the rest API of project. It is getting GET and POST requests and returning JSON data
CLIENT => Generated with YEOMAN ANGULAR.JS

There is one page for client side with input and button that is sending the input data to backend. Backend saving it as URL and searching it in the DATABASE(add mongodb connection url to /api/app.js).

When someone entering the short URL in the URL bar it is going to the URLS controller in frontend and that is sending the shorted side to backend (example : the shorted url is http://localhost:9000/KJs56, the shorted side is “KJs56”. The the backend is checing it. If there is something like that in the database it is returning the original URL to frontend example:www.google.com and the frontend is redirecting to that URL).

## Installation and first run ##

backend:

Install node.js. download it from node.js official site. Download and install the git. After that open the CMD as admin and do npm install express –g, after that npm install bower –g, npm install grunt –g, npm install grunt-cli –g, npm install yo –g.

# frontend: #

Go to the folder ‘client’ than do npm install like in the api.
After that do bower install. It will install angular and other small frontend things that are necessary.

After that do ‘grunt serve’ in that folder. It will start the page in your browser “localhost:9000/”.
That’s all ☺. Ping me when it will done or for some questions.
