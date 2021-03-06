var i,j;
var coordinate =  [];

var test1 = {
	sentence : "私は映画を見ることが好きです。",
	nouns : [ //we need to catalogue the different word types in this sentence and make them findable
	[1, 1, false], //Last value determines whether or not the value has already been correctly chosen
	[3, 4, false], //this also denotes range, first value is start, second is endpoint from base 1, not 0
	[8, 9, false]
	],
	particles : [
	[2, 2, false],
	[5, 5, false], 
	[10, 10, false]
	],
	juzoku : [3, 7, false] //this is the real answer to the question and coincides with 映画を見る
};

document.writeln(test1.sentence + '<br>');


//this recreates a list of words based on word-type
function callNouns (){
for (i = 0; i < test1.nouns.length; i++) { 
	for (j= 0; j < test1.nouns.length - 1; j++ ){
	coordinate.push(test1.nouns[i][j]);
	};
	document.writeln(test1.sentence.slice(coordinate[0] - 1, coordinate[1])+ '<br>');
	coordinate = [] };
};

function callParticles (){
for (i = 0; i < test1.particles.length; i++) { 
	for (j= 0; j < test1.particles.length - 1; j++ ){
	coordinate.push(test1.particles[i][j]);
	};
	document.writeln(test1.sentence.slice(coordinate[0] - 1, coordinate[1]) + '<br>');
	coordinate = [] };
};

// call this function to see if selected text is identical to the answer
function answer (){
	for (i = 0; i < test1.juzoku.length; i++) { 
		coordinate.push(test1.juzoku[i]);
	};
	return test1.sentence.slice(coordinate[0] - 1, coordinate[1]);
};

// go through verification of the juzokusetsu
function verify (){
	var selectedText = window.getSelection().toString();
	var verification = answer();
	if (selectedText === verification) {
		document.writeln("Correct");	
		test1.juzoku[3] = true
	} else {
		document.writeln("wrong");
	} ;
	coordinate = []
};

//Place the following in the button function
//var result1; //Do an IF to see if it's correct or not.
//document.getElementById("result").innerHTML = result1;
//var answer = window.getSelection().toString();
//document.writeln(answer);