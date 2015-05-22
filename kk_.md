# HTML5 video players

A Node.js app using [Express 4](http://expressjs.com/).

## github repo set-up
```
$ echo # HTML5Video >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin https://github.com/kklee0709/HTML5Video.git
$ git push -u origin master
```

## Start the application locally
Foreman installed as part of the Toolbelt: Foreman doesn’t just run your app - it also sets “config vars”, something you’ll encounter in a later tutorial.
```
$ foreman start web
```
OR
```
$ node index.js
```

- [http://localhost:5000/](http://localhost:5000/).
- [http://localhost:5000/cocotuts/](http://localhost:5000/cocotuts/).
- [http://localhost:5000/Adam/](http://localhost:5000/Adam/).
- [curl -i http://localhost:5000/](curl -i http://localhost:5000/).
- [xyz](xyz).
[xyz](xyz).
[xyz](xyz).

## Push to GitHub
$ git add .
$ git commit -m "version 0.1"
$ git push origin master

## push/Deploy to Heroku
For more information about using Node.js on Heroku,
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes](https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes).

```
$ heroku login
$ heroku create
$ git add .
$ git commit -m "Demo"
$ git push heroku master
$ heroku open
$ heroku apps:rename html5videoplayer-kk-
```

## Access heroku

- [https://html5videoplayer-kk-.herokuapp.com/](https://html5videoplayer-kk-.herokuapp.com/).
- [https://html5videoplayer-kk-.herokuapp.com/cocotuts/](https://html5videoplayer-kk-.herokuapp.com/cocotuts/).
- [https://html5videoplayer-kk-.herokuapp.com/Adam/](https://html5videoplayer-kk-.herokuapp.com/Adam/).
- [https://html5videoplayer-kk-.herokuapp.com/faces/](https://html5videoplayer-kk-.herokuapp.com/faces/).


# 디버그 모드 실행
```
$ node --debug index.js
```
# 다른 명령창에서 node-inspector 를 실행합니다.
```
$ node-inspector
```


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
