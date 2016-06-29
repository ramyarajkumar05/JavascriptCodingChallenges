// In a sorted array,get the element which is repeated for the max no. of times.
// Time complexity - O(n)
// Space complexity - O(1)
function getElementOccuringMaxTimesInsortedArray(a)
{
	var counter=1;
	var maxRepeatedCount=1;
	var maxRepeatedElement=a[0];

	if(a==null || a.length<=0 )return -1;
	for(i=1;i<a.length;i++)
	{
		if(a[i-1]==a[i])
		{
			counter++;
		}
		else
		{

			if(counter>maxRepeatedCount){
				maxRepeatedCount=counter;
				maxRepeatedElement=a[i-1];

			}
			counter=1;
		}
	}
	if(counter>maxRepeatedCount){
				maxRepeatedCount=counter;
				maxRepeatedElement=a[a.length-1];
				}
	console.log("Max repeated element is "+maxRepeatedElement);
}