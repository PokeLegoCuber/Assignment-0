function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let amt = 0;
  for(let i = 0; i<nums.length; i++)
  {
  	if((nums[i]%2) === 0)
  	{
  		amt++;
  	}
  }
	return amt;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;