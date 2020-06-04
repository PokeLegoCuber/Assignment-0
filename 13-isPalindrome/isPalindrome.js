function isPalindrome(word) {
	// Insert code here;
	let bool;
	let last_letter = word.length - 1;
	let run_time = word.length/2;
	//This is to check if there are a odd amount of letters 
	if(word.length%2 !== 0)
	{
		run_time = word.length/2 - 0.5;
	}
	for(let i = 0; i <= run_time; i++)
	{
		if(word[i] == word[last_letter])
		{
			last_letter--;
		}
		else
		{
			return false;
		}
	}
	return true;
}

// Do not edit this line;
module.exports = isPalindrome;