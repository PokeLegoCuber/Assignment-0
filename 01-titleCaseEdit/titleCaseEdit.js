function titleCaseEdit(title) {
	// Insert code here;

	//Seperates strings into array seperated by " "
	title = title.split(" ");

    for (let i = 0; i < title.length; i++) 
    {
    	//Changing the first character of the word at current position to upper
    	//Then concat it with the substring of the current word excluding [0] of the String   
        title[i] = title[i][0].toUpperCase() + title[i].substr(1);
    }

    //Joins the array back into a string and seperate each value by " "
    return title.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;