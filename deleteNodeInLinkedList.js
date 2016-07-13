// Given an linked list and an index i, delete the ith node

"use strict";
var deleteNode = function(list, index)
{
	var prev = null;
	var curr = null;
	var counter = 0;
	if(counter === index)
	{
		list = list.next;
		return list;
	}
	while(counter < index)
	{
		counter++;
		prev = curr;
		curr = curr.next;
	}
	prev.next = curr.next;
	return list;
}

var executeDelete = function(){
	var list = new listNode(1,new listNode(2, new listNode(3,null)));
	list = deleteNode(list,0);
	list.printList();
	return list;
}