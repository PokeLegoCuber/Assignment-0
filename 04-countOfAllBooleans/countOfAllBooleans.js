function countOfAllBooleans(arr) {
  // Insert code here;
  let bool_amt = 0;
  for(let i = 0; i<arr.length; i++)
  {
  	if(arr[i] === true || arr[i] === false)
  	{
  		bool_amt++;
  	}
  }
	return bool_amt;
}

// Do not edit this line;
module.exports = countOfAllBooleans;