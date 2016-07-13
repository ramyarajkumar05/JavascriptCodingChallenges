"use strict";
// Add a new list node to the end of the linked list.
function addFirst(list, value)
{
if(list == null)
	list = new listNode(value, null);
else
{
list = new listNode(value, list);
}

return list;
}

function executeAddFirst()
{
	var list = new listNode(2, new listNode(3,null));

	list = addFirst(list, 1);

	list.printList();
}
