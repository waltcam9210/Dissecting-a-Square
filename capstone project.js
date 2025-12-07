const button = document.getElementById("myButton");
const outputParagraph = document.getElementById("output");

//clicking the button starts this loop
button.addEventListener("click", async function () {
  let m = document.getElementById("input");
  m=m.value;
  m=m*1;

//looping through square side lengths.
//After running this myself, I know 1248 is the smallest. So to save time, I started the code at a side length of 1200
for (let k=1200; k<m+1; k++){
let squareSide = k;

//looping through lengths for one of the legs
for (let i=1; i<squareSide; i++){
   let legA=i;
  
//looping through lengths for another leg
   for (let j=1; j<squareSide; j++){
    let legB=j;

// using the two leg lengths to create the bottom right triangle and checking that the hyp is an integer
    let smallLeg1 = squareSide-legA;
    let smallLeg2 = squareSide-legB;
    let smallHyp = smallLeg1*smallLeg1+smallLeg2*smallLeg2;
    smallHyp = Math.sqrt(smallHyp);
    let smallWorks = Number.isInteger(smallHyp);

//checking that second triangle hyp is an integer
    let secondHyp = legA**2 + squareSide*squareSide;
    secondHyp = Math.sqrt(secondHyp);
    let secondWorks = Number.isInteger(secondHyp);

//checking that third triangle hyp is an integer
    let thirdHyp = legB*legB + squareSide*squareSide;
    thirdHyp = Math.sqrt(thirdHyp);
    let thirdWorks = Number.isInteger(thirdHyp);

//if all three hyps are integers, this loop continues. this one splits the center triangle into two right triangles
    if (smallWorks == true && secondWorks==true && thirdWorks ==true){
       for(q=1; q<secondHyp; q++){
        let newSmallLeg=q;
        let secondHypMinusSmallLeg= secondHyp - newSmallLeg;
         
//checks that these right triangles have integer side lengths
        let height = Math.sqrt(smallHyp*smallHyp-newSmallLeg*newSmallLeg);
        let heightWorks = Number.isInteger(height);
        let finalHeightCheck = Math.sqrt(thirdHyp*thirdHyp-secondHypMinusSmallLeg*secondHypMinusSmallLeg)
         
//makes sure that both middle triangles are right, and also have integer side lengths. then outputs the results
        if(heightWorks == true && finalHeightCheck == height){
         outputParagraph.innerText += "small triangle: "+smallLeg1+ ", "+smallLeg2+", "+smallHyp+ " second triangle: "+legA+ ", "+squareSide+", "+secondHyp+
            " third triangle: "+legB+ ", "+squareSide+", "+thirdHyp+
            " height: "+height+ " values for w and z-w: "+newSmallLeg+ ", "+secondHypMinusSmallLeg + "\n";
          await new Promise(r => setTimeout(r, 0));
        }
       }
   
    }
   }
}
}
});



