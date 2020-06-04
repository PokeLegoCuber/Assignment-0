function fizzBuzz(start, end) {
  // Insert code here;
	//- For multiples of three, insert "Fizz" instead of the number into the output array
	//- For multiples of five, insert "Buzz" instead of the number into the output array
	//- For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
	//- For numbers which are neither a multiple of three nor a multiple of five, insert the number into the output array
	let new_arr = [];
	let a = start; //This keeps track of the starting number that will be iterated
	for(let i = 0; i <= end - start; i++)
	{
		if(a%3 === 0 && a%5 === 0)
		{
			new_arr[i] = "FizzBuzz";	
		}
		else if(a%3 === 0)
		{
			new_arr[i] = "Fizz";
		}
		else if(a%5 === 0)
		{
			new_arr[i] = "Buzz";
		}
		else
		{
			new_arr[i] = a;
		}
		a++;
	}
	return new_arr;
}

// Do not edit this line;
module.exports = fizzBuzz;