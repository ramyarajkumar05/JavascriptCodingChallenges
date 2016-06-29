// Sorting an array using Insertion sort
// Time complexity - O(n^2)
// Space complexity - O(1)
function insertionSort(a) {
	
	if( a==null || a.length <=0)
	return null;
	for(var i=1; i<=a.length-1; i++)
	{
		for(j=i; j>=1; j--)
		{
			if(a[j]<a[j-1])
			{
				var temp = a[j];
				a[j]=a[j-1];
				a[j-1]=temp;

			}
			else
			{
				break;
			}
		}
	}
	return a;
}