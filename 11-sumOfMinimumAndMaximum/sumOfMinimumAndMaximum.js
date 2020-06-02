function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let low_val = nums[0];
  let high_val = nums[0];
  for(let i = 0; i<nums.length; i++)
  {
  	//Checks for lowest value
  	//if the left is greater than the right, we know that the right is smaller
  	if(low_val > nums[i])
  	{
  		low_val = nums[i];
  	}
  	//if it's false, the value to the right must be higher
  	else
  	{
  		high_val = nums[i];
  	}
  }
	return low_val + high_val;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;