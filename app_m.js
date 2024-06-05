const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//let nav_content=['materials','disciplines','labels','video','students','abitur','science','contacts'];
//let n,i; 
//n=nav_content.length;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main/index.html'));
});

router.get('/labels',function(req,res){
  res.sendFile(path.join(__dirname+'/labels/index.html'));
});

router.get('/dry_labels',function(req,res){
  res.sendFile(path.join(__dirname+'/dry_labels/index.html'));
});

router.get('/tags',function(req,res){
  res.sendFile(path.join(__dirname+'/tags/index.html'));
});

router.get('/contacts',function(req,res){
  res.sendFile(path.join(__dirname+'/contacts/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules/@dotlottie', express.static(__dirname + '/node_modules/@dotlottie'));
app.listen(process.env.port || 8085);
 
console.log('Running at Port 8085');