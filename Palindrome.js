// Given a string, return true if its a palindrome
function isPalindrome(str){
	if(str==null||str.length<0 || str[0]!=str[str.length-1])
		{
			console.log("The given string is NOT a palindrome");
			return false;
		}
	
		low=1;
		high=str.length-2;
		//console.log("High is "+high);
		while(low<high)
		{
			if(str[low]==str[high])
			{
				low++;
				high--;
			}
			else
			{
				console.log("The given string is NOT a palindrome");
				return false;
			}
		}
		console.log("The given string is a palindrome");
		return true;
}