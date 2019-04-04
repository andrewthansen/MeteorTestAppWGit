Template.home.onCreated(function homeOnCreate(){
    console.log("Created the home template");
});

Template.home.onRendered(function homeOnRendered(){
    console.log("Rendered the home template");
});

Template.home.onDestroyed(function homeOnDestroyed(){
    console.log("Destroyed the home template");
});

Template.home.helpers({
    exampleHelper: function(){
        return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
    }
});