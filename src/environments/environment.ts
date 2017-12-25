// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyA8VV56FVU-LsGYYUpsvBG2h_ApVC1l-Lk",
    authDomain: "myblog-89cae.firebaseapp.com",
    databaseURL: "https://myblog-89cae.firebaseio.com",
    projectId: "myblog-89cae",
    storageBucket: "myblog-89cae.appspot.com",
    messagingSenderId: "1076673455096"
  }
};
