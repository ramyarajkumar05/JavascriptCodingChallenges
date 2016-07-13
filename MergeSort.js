"use strict";
// Sort an array using merge sort
// Time complexity
// Space complexity
function doMergeSort(a){
	mergeSort(a,0,a.length-1);
	alert(a);
}
function mergeSort(a,low,high)
{
		if(low>=high) return;
		var mid=Math.floor((low+high)/2);
		mergeSort(a,low,mid);
		mergeSort(a,mid+1,high);
		merge(a,low,high,mid);
}
function merge(a,low,high,mid)
{
		var i = low;
		var j = mid+1;
		var b = [];
		for(var k=low; k<=high; k++){
			if(i>mid)
			{
				b[k] = a[j];
				j++;
			}
			else if(j > high)
			{
				b[k] = a[i];
				i++;
			}
			else
			{
				if(a[i] < a[j])
				{
					b[k]= a[i];
					i++;
				}
				else
				{
					b[k] = a[j];
					j++;
				}
			}
		}
		// copy the new array elements back to original array
		for(i = low;i<=high; i++)
		{
			a[i] = b[i];
		}
}