function editUser() 
{
    var txt;
    var user = prompt("Please enter the new link data:", "Harry Potter");
    if (user == null || user == "") 
    {
      txt = "User cancelled the prompt.";
    } 
    else 
    {
      txt = "Hello " + user + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
  }
  function deleteUser() 
  {
    var txt;
    var user = "USER 1"
    if (confirm("Are you sure you want to delete " + user))
    {
      txt = "User " + user + " has been deleted";
    } 
    else 
    {
      txt = "Cancel was pressed nothing was deleted.";
    }
    console.log(txt);
  }
  function AddUser()
  {
      var user = "User 1 "
      var Added = true; 
      if (Added == true)
      {
        alert(user + " was succesfully added.");
      }
      if (Added == true)
      {
        alert("ERROR! \n" + user + " was not added.");
      }

  }