// Return Index Of Elements Whose Sum Adds To Zero
// Time complexity O(n)
// Space complexity O(n)
function getIndexOfElementsWhoseSumAddsToZero(a)
{
	var list=[];
	var map={};
	if(a==null || a.length <=0)return list;
	for(var i=0;i<a.length;i++)
	{
		if(map[-a[i]]==null)
			map[a[i]]=i;
		else{
			list.push(i);
			list.push(map[-a[i]]);
		}
	}
	return list;
}