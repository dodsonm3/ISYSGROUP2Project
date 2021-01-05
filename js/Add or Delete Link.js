function editLink() {
    var txt;
    var newLink = prompt("Please enter the new link data:", "Harry Potter");
    if (newLink == null || newLink == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + newLink + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
  }