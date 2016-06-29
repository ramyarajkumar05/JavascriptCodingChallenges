// Return true if the number is present in the array.
function isNumberInTheArray(a,n){
	if(n==null||a==null || a.length<=0) return false;
	for(var i=0;i<a.length;i++){
		//console.log(n + "== "+a[i]);
		if(n==a[i])
			{
				console.log("The number is present");
				return true;
			}
	}
	console.log("The number is not present in the array");
	return false;
}