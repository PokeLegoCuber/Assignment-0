function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let amt = 0;
  for(let i = 0; i<nums.length; i++)
  {
  	if(nums[i] === i)
  	{
  		amt++;
  	}
  }
	return amt;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;