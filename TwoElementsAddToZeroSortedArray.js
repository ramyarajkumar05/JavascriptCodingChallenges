// Return true if any 2 elements add to zero in a sorted array.
// Time complexity = O(n)
// Space complexity = O(1)
function ifTwoElementsAddToZeroInSortedArray(a) {
	if(a==null || a.length<=0 )return false;
	low=0;
	high=a.length-1;
	while(low<high)
	{
		console.log(a[low] +"== " + -a[high]);
		if(a[low] == -a[high])
			return true;
		else if(a[low] > -a[high])
			high--;
		else
			low++
	}
	return false;
}