#using localtunnel@1.8.3 to share the app locally.
# there are bunch of other option to consider 
1) localtunnel
    - It offers an elegant way to expose your local host via a public url.
    - It punches a holw in your firewall so that your local machine can operate as a web server
    - Setup:
        1) npm install localtunnel -g
        2) Start you app
        3) lt --port 3000
2) ngrok
    - it offers some additional feature over localtunnel
    - Setup:
        1) Signup
        2) Install ngrock
        3) Install authtoken
        4) Start your app
        5) ./ngrok http 80
        
3) now
    - It takes different approach than localtunnel and ngrok
    - It doesn't punch a hole in your firewall
    - Its an easy way to deploy your application up to the cloud
    - And directory that conytains package.json can be uploaded to the cloud using one command: "now"
    - Each time you deploy to now, you're assigned a new unique url.And you can alos use now for your real production deployment
    - Setup
        1) npm install -g now
        2) Create start script
        3) now
        
    - So now is a usefull service if you are building a node.js application
    - Since, now is actually pushing local file to public webserver, it is more permanent solution that ngrok or localtunnel
    - You don't need to keeo your machine on for the people to see your work-in-progress
    - And if your application has a server side component such as node, then now is great option
    
 4) surge
    - Surge assumes that your app is just static javascript, html and css files
    - So the downside of Surge is it only supports static files.
    - Setup
        1) npm  install -g surge
        2) surge    
        
--------------------------------------
     
 # HTTP Call Approaches:
 
 1) Only Node application :
    - http
    - request
 2) Only Browser Application :
    - XMLHttpRequest
    - jQuery
    - Fetch
    - framework provided api's like angular's $http
    
 3) Node & Browser:
    - isomorphic fetch
    - xhr
    - SuperAgent
    - Axioz       
        
 --------------------------------------
 
 #Mocking APIs:
 
  1) If you are writing unit test then NOCK is handy way
  2) Static JSON
  3) Create development webserver
    - api-mock
    - JSON server
    - JSON Schema faker: generates random data
    - BrowserSync
    - Express    
 
 #Step for Mocking HTTP:
  1) Declare our schema:
        - JSON Schema Faker
  2) Generate Random Data:
        - faker.js
        - chance.js
        - randexp.js
  3) Serve Data via API:
        - JSON Server            
                
