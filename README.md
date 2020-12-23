# objectifautobot

`objectifautobot` is a Twitter bot relaying the progress of a petition addressed to the French Senate, with the aim of improving the financial autonomy of disabled people.

You bot is accessible via [@objectifautobot](https://twitter.com/objectifautobot) on Twitter.

You can sign the petition via [https://petitions.senat.fr/initiatives/i-416](https://petitions.senat.fr/initiatives/i-416).

## Getting started

### Installing a node environment

You need a working node + npm environment to use this bot. This bot was developed and tested using node 15.4.0, but may probably run on different versions.

### Configure API credentials

You must first fill out the file [`src/config.json`](./src/config.json) with your twitter API credentials. 

Alternatively, you can also use the corresponding environment variables for the same result.

To configure a Twitter application and get your API credentials, you should set up an application on your Twitter account via [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new]).

### Installing node dependencies

```sh
npm install
```

### Build and run

```sh
npm run build
npm run start
```
