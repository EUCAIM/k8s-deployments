import { Meteor } from 'meteor/meteor';
import {User} from "/imports/Collections";
import './publications'
import './methods'
import {WebApp} from "meteor/webapp";

/*
WebApp.rawConnectHandlers.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Authorization,Content-Type");
  return next();
});
*/

Meteor.startup(async () => {


  if(User.find().count() === 0){
    User.insert({
      _id : "3HgyZzASx3E5rSZrQ",
      requests: [],
      library: []
    })
  }



});

Meteor.methods ({

})
