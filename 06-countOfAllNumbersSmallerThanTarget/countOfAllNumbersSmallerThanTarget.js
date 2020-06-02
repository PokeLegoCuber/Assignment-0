function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let amt = 0;
  for(let i = 0; i<nums.length; i++)
  {
  	if(nums[i]<target)
  	{
  		amt++;
  	}
  }
	return amt;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;