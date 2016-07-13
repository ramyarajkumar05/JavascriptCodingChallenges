// Given a linked list, reverse it.
// Time complexity - O(n)
// Space complexity - O(1)
var reverseList = function(list)
{
	if(list == null || list.next == null) return list;

	var prev = list;
	var curr = list.next;


	while(curr.next != null)
		{
			var temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}

	curr.next = prev;
	list.next = null;
	list = curr;
	return list;
}

var execute = function(list)
{
	var list = new listNode(1,new listNode(2, new listNode(3,null)));
	list = reverseList(list);
	list.printList();
}