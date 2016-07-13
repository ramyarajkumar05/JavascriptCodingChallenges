"use strict";
// update the list with old value as new value.
function updateList(list, oldVal, newVal){
	var newList = list;
	while(newList != null){
		if(newList.val == oldVal)
		{
			newList.val = newVal;
			break;
		}

		newList = newList.next;
	}
	return list;
}
function executeUpdateList()
{
	var list = new listNode(1,new listNode(2, new listNode(3,null)));
	
	list = updateList(list,2,"II");
	
	list.printList();
}