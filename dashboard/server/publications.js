import { Meteor } from 'meteor/meteor';
import {User} from "../imports/Collections";


Meteor.publish('user', function publishUser() {
  return User.find({});
});
