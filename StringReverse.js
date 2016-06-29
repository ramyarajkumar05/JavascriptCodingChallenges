// Given a string, get the reverse string
// Time complexity  O(n)
// Space complexity O(n)

function getReverseString1(str)
{
	var revString='';
	if(str.length<0) return "String is invalid";
	else if(str.length == 0) return "The string is empty";
	
	for(var i=str.length-1; i>=0; i--)
	{
		revString+=str[i];
	}
return revString;
}

function getReverseString(str)
{
	var buffer='';
	low=0;
	high=str.length-1;
	while(low<high){
		console.log("str[0] and str[4] is "+str[0] + [str[4]]);
		console.log("buffer, str[low] and str[high] is "+ buffer+str[low]+str[high]);
		buffer=str[low];
		//str[low]=str[high];
		//str[high]=buffer;
		str=str.replaceAt(low,str[high]);
		str=str.replaceAt(high,buffer);

		console.log("After swap values are "+str[low] +" and "+str[high]);
		low++;
		high--;
	}
	return str;
}

function getReverseString2(s) {
  s = s.split('');
  var len = s.length,
      halfIndex = Math.floor(len / 2) - 1,
      tmp;


     for (var i = 0; i <= halfIndex; i++) {
        tmp = s[len - i - 1];
        s[len - i - 1] = s[i];
        s[i] = tmp;
      }
      return s.join('');
    }

    String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+1,this.length);
}