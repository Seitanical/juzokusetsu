var i,j;
var coordinate =  [];

var test1 = {
	sentence : "私は映画を見ることが好きです。",
	nouns : [ //we need to catalogue the different word types in this sentence and make them findable
	[1, 1, 0], //Last value determines whether or not the value has already been correctly chosen
	[3, 4, 0], //this also denotes range, first value is start, second is endpoint from base 1, not 0
	[8, 9, 0]
	],
	particles : [
	[2, 2, 0],
	[5, 5, 0], 
	[10, 10, 0]
	],
	juzoku : [3, 7, 0] //this is the real answer to the question and coincides with 映画を見る
};

document.writeln(test1.sentence + '<br>');


//this recreates a list of words based on word-type
for (i = 0; i < test1.nouns.length; i++) { 
	for (j= 0; j < test1.nouns.length - 1; j++ ){
	coordinate.push(test1.nouns[i][j]);
	};
	document.writeln(test1.sentence.slice(coordinate[0] - 1, coordinate[1])+ '<br>');
	coordinate = []
};

for (i = 0; i < test1.particles.length; i++) { 
	for (j= 0; j < test1.particles.length - 1; j++ ){
	coordinate.push(test1.particles[i][j]);
	};
	document.writeln(test1.sentence.slice(coordinate[0] - 1, coordinate[1]) + '<br>');
	coordinate = []
};

for (i = 0; i < test1.juzoku.length; i++) { 
	coordinate.push(test1.juzoku[i]);
};
document.writeln(test1.sentence.slice(coordinate[0] - 1, coordinate[1])+ '<br>');
	coordinate = []

//Place the following in the button function
//var result1; //Do an IF to see if it's correct or not.
//document.getElementById("result").innerHTML = result1;
//var answer = window.getSelection().toString();
//document.writeln(answer);