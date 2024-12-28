function convertToRoman(num) {
  	const obj = {
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1],
    };

	let roman = '';

	for(let i=0; i < Object.keys(obj).length; i++){
		const [symbol, value] = obj[i];
		while(num >= value){
			roman += symbol;
			num = num - value;
			// console.log("roman, num",roman,num)
		}
	}
	// console.log("Roman :",roman)

  //your code here

}
// convertToRoman(199);
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
