


function getRandom() {
  
  	var randomList = document.querySelector("#list").value;
  	

	// console.log(randomList)

	let arr = randomList.split("\n");


	// console.log(arr[1]);
	// console.log(arr.length);

	let number = Math.round (Math.random() * (arr.length-1));
	 document.getElementById('winner').innerText = (arr[number]);

	// return Math.random();
}



	// let randomList = document.querySelector("#list").value;
	// const myArray = randomList.split(" ");

	// document.getElementById("winner").innerHTML = myArray;

