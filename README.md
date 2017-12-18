# search-proxy

A Bluemix app that when run, proxies any traffic arriving at `/search` to a Cloudant search view.

e.g.

```
https://myhost.mybluemix.net/search?q=pouchdb&limit=20&counts=%5B"topic"%2C"technologies"%2C"level"%2C"languages"%5D&include_docs=true
```

or

```
https://search-service.mybluemix.net/search?q=pouchdb
```

It assumes that a database `devcenter` exists so appends `/devcenter/_design/search/_search` to the `CLOUDAN_HOST` you supply.

## Deployment

Create a an environment variable containing the Cloudant host e.g.

```
export CLOUDANT_HOST="https://myhost.cloudant.com"
```

and deploy with 

```
bx cf push devcenter-proxy
```