function validateForm() {
  var x = document.forms["page3"]["password"].value;
  if (x.length < 8) {
    alert("password must be 8 characters or longer");
    return false;
  }
}