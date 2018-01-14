var answer = window.getSelection().toString();
document.writeln(answer);

var test1 = {
	sentence : "私は映画を見ることが好きです。",
	//nouns : ["私".position : 1, "映画".position : 3, "こと".position : 8],
	particles : ["は", "を", "が"],
	particlesPosition : [2, 5, 10]
};

var i;

document.writeln(test1.sentence);

//document.writeln(test1.nouns.length);

document.writeln(test1.particles.length);

//for (i = 0; i < test1.nouns.length; i++) {
//	document.writeln(test1.nouns[i])
//};

for (i = 0; i < test1.particles.length; i++) {
	document.writeln(test1.particles[i])
};
//Place the following in the button function
var result1; //Do an IF to see if it's correct or not.

document.getElementById("result").innerHTML = result1;