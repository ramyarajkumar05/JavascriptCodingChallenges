// Sorting an array using Bubble sort.
// Time Complexity - O(n^2)
// Space Complexity - O(1)

function bubbleSort(a)
{
	if( a==null || a.length <=0)
	return null;

	for(var i=a.length-1; i >= 0; i--)
	{
		var maxValue = a[0];
		var maxIndex = 0;

		// Find the maximum value between 0 and i.
		// The value of 'j' will be the index of the max value.
		for(var j=0; j<=i ; j++)
		{
			if(maxValue < a[j])
			{
				maxValue= a[j];
				maxIndex = j;
			}

		}
		// Swap current value of 'i' with the maximum value in the array.

		var temp = a[maxIndex];
		a[maxIndex] = a[i];
		a[i] = temp;
	}
	return a;
}