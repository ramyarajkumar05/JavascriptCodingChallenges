

function getFactorial(n){
	var x=1;
	for(var i=n;i>=1;i--)
	{
		x=x*i;
	}
	console.log(x);
	return x;

}


function getSumofElementsInArray(a)
{

	var sum=0;
	if(a!=null && a.length>0)
	{
		for (var i = 0; i< a.length; i++) {
			sum=sum+a[i];
		}
		console.log("The sum of elements in the array is " + sum);
		console.log("Average is "+sum/a.length);

	}
}

function getMaxinArray(a)
{
	var max=0;

	if(a !=null && a.length>0){
		for(var i=0;i<a.length;i++)
		{
			if(a[i]>max)
				max=a[i];

		}
		console.log("Maximum element is " +max);
	}
}

function getMinInArray(a)
{
	var min=0;
	if(a !=null && a.length>0){
		for(var i=0;i<a.length;i++)
		{
			if(a[i] < min)
				min=a[i];

		}
		console.log("Minimum element is " +min);
	}
}

//Range = max-min

function hasRepetitiveElements(a){
	var hasRepetitive=false;
	var map = {};
	if(a!=null && a.length>0){

		for(var i=0;i<a.length;i++){
			// console.log('a[i] is ' + a[i]);
			console.log(map[a[i]]);
			if(map[a[i]] == null )
				map[a[i]]=1;
			else
			{
				hasRepetitive=true;
				console.log(hasRepetitive);
				return true;
			}
		}
		console.log(hasRepetitive);
		return false;
	}
}
