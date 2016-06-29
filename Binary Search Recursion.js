// Search for an element in a sorted array using recursion
//Binary Search using recursion
// Time complexity - O(n)
// Space complexity - O(1)
function binarySearchRecursionAlgorithm(low,high,target,array)
{
	var mid;
	if(array==null || array.length<=0 || target ==null || low>high) 
		{
console.log("The number is not present in the array");
return false;
}

	mid=Math.floor((low+high)/2);	
	if(target==array[mid])
	{
		
		console.log("The number is present");
		return true;
	}
	else if(target<array[mid])
		return binarySearchRecursionAlgorithm(low,mid-1,target,array);
	else
		return binarySearchRecursionAlgorithm(mid+1,high,target,array);

}

function findElementInSortedArray(target,array){
if(array==null || array.length<=0 || target==null)return false;
return binarySearchRecursionAlgorithm(0,array.length-1,target,array);
}
