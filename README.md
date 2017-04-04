# search-proxy

A Bluemix app that when run, proxies any traffic arriving at `/search` to a Cloudant database.

e.g.

```
https://myhost.mybluemix.net/search?q=pouchdb&limit=20&counts=%5B"topic"%2C"technologies"%2C"level"%2C"languages"%5D&include_docs=true
```

or

```
https://search-service.mybluemix.net/search?q=pouchdb
```