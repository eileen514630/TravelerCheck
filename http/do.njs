<<<<<<< HEAD
#!/usr/local/bin/node

var querystring = require('querystring');
var fs = require('fs');
 
 var parsedstring = querystring.parse(process.env.QUERY_STRING); 
 var studentID = parsedstring.id;

 var dataArr = JSON.parse(fs.readFileSync('name.json', 'utf8'));
 var found = false;

 console.log("Content-type: text/html; charset: 'utf-8'\n");
 for(var i = 0; i < dataArr.length; i++){
  if (dataArr[i].id == studentID){
      console.log("<h1>Welcome, " + dataArr[i].name +  "!</h1>");
          found = true;
              return;
                }
                }


if(!found){
   console.log("<h1>Sorry. you are not our team member</h1>");
}
=======
#!/usr/local/bin/node

var querystring = require('querystring');
var fs = require('fs');
 
 var parsedstring = querystring.parse(process.env.QUERY_STRING); 
 var studentID = parsedstring.id;

 var dataArr = JSON.parse(fs.readFileSync('name.json', 'utf8'));
 var found = false;

 console.log("Content-type: text/html; charset: 'utf-8'\n");
 for(var i = 0; i < dataArr.length; i++){
  if (dataArr[i].id == studentID){
      console.log("<h1>Welcome, " + dataArr[i].name +  "!</h1>");
          found = true;
              return;
                }
                }


if(!found){
   console.log("<h1>Sorry. you are not our team member</h1>");
}
>>>>>>> 61f715c91c9e2938699b2498deecfd3fb05c260d
