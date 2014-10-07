$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("mXkBQqvnQRuuLaWn90JhvPKZHuBnopDVNpApRNrW", "fgAnjH6VPKQHfGNyiI1e2w5GmfrUP10mw26TQyVE");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});