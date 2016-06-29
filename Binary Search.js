// Searching for an element in a sorted array.
function binarySearch(n,a){
	if(n==null ||a==null||a.length<=0)return false;
	var low=0;
	var high=a.length-1;
	var mid;
	while(low<=high)
	{
		console.log(low +" "+high)
		 mid=Math.floor((low+high)/2);
		 console.log("Mid is "+mid + " "+a[mid]);
		if(n==a[mid]) 
			{
				console.log("The number is present in the array");
				return true;
			}
		else if(n<a[mid]){
			high=mid-1;
		}
		else
		{
			low=mid+1;
		}
	}
	console.log("The number is not present in the array");
	return false;
}