
# github
echo # HTML5Video >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/kklee0709/HTML5Video.git
git push -u origin master

# Server
# Now start your application locally using Foreman, which was installed as part of the Toolbelt:
# Foreman doesn’t just run your app - it also sets “config vars”, something you’ll encounter in a later tutorial.

foreman start web == node index.js

# client
http://localhost:5000/
curl -i http://localhost:5000/

http://localhost:5000/cocotuts/
http://localhost:5000/Adam/
http://localhost:5000/faces

# 디버그 모드 실행
node --debug index.js
# 다른 명령창에서 node-inspector 를 실행합니다.
node-inspector


//
Simple logging middleware:
app.use(function(req,res,next){
  console.log(req.method+' '+req.url+' '+(new Date()));
  next();
});

app.use(function(err,req,res,next){
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
