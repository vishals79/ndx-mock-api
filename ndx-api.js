var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.send(`{
  "status":"200",
  "respose":{
    "sales": {
      "cumulative-value-sales": "",
      "cumulative-equ-sales": ""
    },
    "price": {
      "non-promo-pkg-price": "",
      "non-promo-equ-price": ""
    },
    "promotion": {
      "any-promo-percent-of-equ": "",
      "any-promo-acv": "",
      "any-pkg-price": "",
      "any-promo-price": ""
    },
    "distribution": {
      "percent-acv-reach": "",
      "tdp-reach": "",
      "any-promo-acv": "",
      "any-pkg-price": ""
    }
  }
}`)
});

app.get('/api/facts',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.send(`{
  "status":"200",
  "respose":{
    "sales": {
      "cumulative-value-sales": "",
      "cumulative-equ-sales": ""
    },
    "price": {
      "non-promo-pkg-price": "",
      "non-promo-equ-price": ""
    },
    "promotion": {
      "any-promo-percent-of-equ": "",
      "any-promo-acv": "",
      "any-pkg-price": "",
      "any-promo-price": ""
    },
    "distribution": {
      "percent-acv-reach": "",
      "tdp-reach": "",
      "any-promo-acv": "",
      "any-pkg-price": ""
    }
  }
}`)
});

app.get('/api/trends',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.send(`{
  "status":"200",
  "respose":{
    "sales": {
      "cumulative-value-sales": "",
      "cumulative-equ-sales": ""
    },
    "price": {
      "non-promo-pkg-price": "",
      "non-promo-equ-price": ""
    },
    "promotion": {
      "any-promo-percent-of-equ": "",
      "any-promo-acv": "",
      "any-pkg-price": "",
      "any-promo-price": ""
    },
    "distribution": {
      "percent-acv-reach": "",
      "tdp-reach": "",
      "any-promo-acv": "",
      "any-pkg-price": ""
    }
  }
}`)
});

app.get('/api/periods',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.send('10')
});
app.listen(3000);

