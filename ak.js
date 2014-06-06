$(document).ready(function() {
  var htmlPage = document.documentElement.innerHTML;
  var findUSername = "var username = ";
  var username='';
  for (var index=htmlPage.search(findUSername)+findUSername.length;(htmlPage[index]!=';')&&(index<htmlPage.length);index++)
  {
    username+=htmlPage[index];
  }
  alert(username);
}
