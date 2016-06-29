//Return true if any two elements in the array adds to zero. Else return false.
function isBiELementAddsToZero(a)
{
	if(a==null || a.length <=0)return false;
	var map={};

	for(var i=0;i<a.length;i++)
	{
		if(map[-a[i]]==null)
			map[a[i]]=1;
		else
		{
			console.log("True");
			return true;
		}
	}
	console.log("false");
	return false;
}
