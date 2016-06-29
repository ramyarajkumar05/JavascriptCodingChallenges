// Given an array return the element that occurs maximum number of times. eg: 3 2 1 2 3 2 ---> return 2

function getElementOccuringMaxNoOFTimes(a)
{
	if(a==null || a.length<=0) {
		console.log("The array is either Null or Empty");
		return -1;}
	var map={};
	var maxValue=0;
	var maxKey=null;
	for(var i=0;i<a.length;i++){
		if(map[a[i]]==null){

			map[a[i]]=1;
		}
		else
		{
			map[a[i]]= map[a[i]]+1;
			if(maxValue < map[a[i]])
			{
				maxKey=a[i];
				maxValue = map[a[i]];
			}
		}

	}
console.log("The element that returned maximum number of times is "+maxKey)
return maxKey;
}

//Follow up: what if the array is sorted? Can you do it more efficiently?