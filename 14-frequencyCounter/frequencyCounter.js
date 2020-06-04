function frequencyCounter(word) {
	// Insert code here;
	let letter_map = new Map();
	for(let i = 0; i < word.length; i++)
	{
		if(letter_map.has(word[i]))
		{
			letter_map.set(word[i], letter_map.get(word[i])+1);
		}
		else
		{
			letter_map.set(word[i], 1);
		}
	}
	//Converts Map to Object
	return Object.fromEntries(letter_map);
}

// Do not edit this line;
module.exports = frequencyCounter;