// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};
let A="A".charCodeAt(0);

let Z="Z".charCodeAt(0);
function rot13(str) {
	let ans="";
	for(let i=0;i<str.length;i++){
		let currentChar=str[i].charCodeAt(0);
		if(currentChar<=Z &&currentChar>=A){
			ans +=lookup[str(i)]
		}
		else{
			ans +=str[i];
		}
	}
 
  return ans; //return decodedArr
}


window.rot13 = rot13;
