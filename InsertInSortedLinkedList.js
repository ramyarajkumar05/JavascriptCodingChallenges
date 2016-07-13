"use strict";
var insertInSortedList = function (myVal, list)
{
	var prev = null;
	var curr = list;

	// If the list is empty, create a new node with the value = myVal and next= null
	if(list == null)
	{
		list = new listNode(myVal, null);
		return list;
	}
	// If the list has only 1 node
	else if(list.next == null)
	{
		// if myVal is before 1st node 
		if(list.val > myVal )
		{
			list = new listNode(myVal,list);
		}
		// if myVal is after the 1st node
		else
		{
			list.next = new listNode(myVal,null);
		}
	return list;
	}

	// TO add the new element as the 1st node to the existing list
	if(list.val > myVal) return new listNode(myVal,list);

	// if the node has 2 or more elements
	while(curr.next != null)
	{
		// Traverse the list until the element is greater than myVal
		if(curr.val < myVal)
		{
			prev = curr;
			curr = curr.next;
		}
		else
		{
			prev.next = new listNode(myVal,curr);
			return list;
		}
	}
	// Compare the last element in the list with myVal
	if(curr.val<myVal)
	{
		curr.next = new listNode(myVal,null);
	}
	else
	{
		prev.next = new listNode(myVal,curr);
	}

return list;

}

var insertInSortedList2 = function (myVal, list)
{
	if(list == null)
	{
		list = new listNode(myVal, null);
		return list;
	}
	var prev = null;
	var curr = list;
	while(curr != null && curr.val < myVal)
	{
		prev = curr;
		curr = curr.next;
	}
	if(prev != null)
	{
		prev.next = new listNode(myVal, curr);
	}
	else
		list = new listNode(myVal, list);
	return list;
}

var insertInSortedList3 = function (myVal, list)
{
	if(list == null)
	{
		list = new listNode(myVal, null);
		return list;
	}
	//-1 is a fake value for our fake head
	var fakeHead = new listNode(-1,list);
	var prev = fakeHead;
	var curr = list;
	while(curr != null && curr.val < myVal)
	{
		prev = curr;
		curr = curr.next;
	}
	prev.next = new listNode(myVal, curr);
	list = fakeHead.next;
	return list;
}

var executeInsert = function(){

	//var list = new listNode(1,new listNode(3, new listNode(4,new listNode(5,null))));
	 var list = new listNode(2,null);
	// var list = null;
	list = insertInSortedList2(6,list);
	list.printList();
}