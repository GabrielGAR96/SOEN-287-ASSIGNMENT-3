function search()
{
	var splitter = document.getElementById("split").value;
	var text = document.getElementById("myTextArea").value;
	var temp = new Array();
	var regex = new RegExp(document.getElementById("test").value, document.getElementById("modifier").value);

	var count = 0;
	if(text.length > 0 && splitter.length > 0)
	{
		temp = text.split(document.getElementById("split").value);
		for (var i = 0; i < temp.length; i++) 
		{
			if(regex.test(temp[i])) count++;
		}
	document.getElementById("result").innerHTML = "<p>There is a total of " + temp.length +" non-empty words" 
	 + " in the text, including "+count+ " words matching the regex.</p>";
	}
}