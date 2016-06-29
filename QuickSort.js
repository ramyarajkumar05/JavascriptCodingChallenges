// Sort an array using quick sort
// Time Complexity - O(nlogn)
// Space Complexity - O(1)
function performQuickSort(a){
	quickSort(a,0,a.length-1);
	return a;
}

function quickSort(a,low,high)
{
	if(a==null || a.length<=0 || low>=high) return;
	var pos = partition(a,low,high);
	quickSort(a,low,pos-1);
	quickSort(a,pos+1,high);

}

function partition(a,low,high)
{
if(a==null || a.length<=0 ) return;
var pivot = a[high];

var pos= low;

for(var i=low; i<=high ; i++)
{
	if(a[i] < pivot)
	{
		if(i!=pos) 
		{
		var temp = a[pos];
		a[pos] = a[i];
		a[i] = temp;
		}
		pos++;

	}
}
temp = a[pos];
a[pos] = a[high];
a[high] = temp;
return pos;
}