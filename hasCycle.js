
"use strict";
var hasCycleOrderOfNspace = function(list)
{
var map = {};
var temp = list;
while(temp != null)
{
	if(map[temp] == null){
		map[temp] = 1;
		temp = temp.next;
	}
	else{
		console.log("true");
		return true;
	}
}
console.log("false");
return false;
}

var hasCycleOrderOf1space = function(list){
	var ptr1 = list;
	var ptr2 = list;
	do{
		if(ptr2 == null || ptr2.next == null) return false;
		ptr1 = ptr1.next;
		ptr2 = ptr2.next.next;
	}while(ptr1 != ptr2);
	return true;
}

var executeHasCycle = function(){
	var list = new listNode(1,new listNode(2, new listNode(3,null)));
	return hasCycleOrderOf1space(list);
}