"use strict";
// Add a new list node to the end of the linked list.
function listNode(val,next){
this.val = val;
this.next = next;
}
listNode.prototype.printList = function()
 {
 	for(var i=this;i!=null;i=i.next)
	{
		console.log(i.val);
	}
 }
 var executeAddLast = function()
{
	var list = new listNode(1,new listNode(2, new listNode(3,null)));
	
	list = addLast(5,list);
	
	list.printList();
}
var addLast = function(value,list)
{
	var templist = list;
	if(templist == null) 
	{
		templist = new listNode(value,null);
	}
else
{
	while(templist.next != null){
		templist=templist.next;
	}


	templist.next = new listNode(value,null);

}
return list;
}
