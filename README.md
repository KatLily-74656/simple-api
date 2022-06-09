# Simple-API

This is a Repo for a simple API. 

## Small Node App: Simple API

To run the app, first execute:
```
npm install
```

Then run the Command:
```
npm start
```

After this, you can go to `localhost:3000`, to see the App running.

---

## Requests

### GET

#### <b>/</b>
Retruns the JSON `{"foo": "bar"}`.

#### <b>/hello</b>
Returns `Hello, World!`.

#### <b>/hello/{name}</b>
Returns `Hello, {name}!`, with the `{name}` you entered in the URL. 
E.g. `/hello/Kat` results in `Hello, Kat!`.

#### <b>/new</b>
Returns `Hi! You are NEW!`.

### POST

#### <b>/handle</b>
Returns the following JSON: `{ "post-foo" : "post-bar", "request" : req.body }`, where `req.body` is the content of the body you added to the request.