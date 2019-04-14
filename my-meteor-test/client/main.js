import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './templates/layout.html';
import './templates/home.html';

Template.home.events({
  'click button': function(e,template){
    console.log("fired alert event");
    alert("Good Anyday Price is 34.99");
  }
});



