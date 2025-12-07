const button = document.getElementById("myButton");
const outputParagraph = document.getElementById("output");
let array= [];

button.addEventListener("click", function () {
  let m = document.getElementById("input");
  m=m.value;
  m=m*1;
for (k=1; k<m+1; k++){
let squareSide = k;
for (i=1; i<squareSide; i++){
   let secondLeg=i;
   for (j=1; j<squareSide; j++){
    let thirdLeg=j;

    let smallLeg1 = squareSide-secondLeg;
    let smallLeg2 = squareSide-thirdLeg;
    let smallHyp = smallLeg1*smallLeg1+smallLeg2*smallLeg2;
    smallHyp = Math.sqrt(smallHyp);
    let smallWorks = Number.isInteger(smallHyp);

    let secondHyp = secondLeg**2 + squareSide*squareSide;
    secondHyp = Math.sqrt(secondHyp);
    let secondWorks = Number.isInteger(secondHyp);

    let thirdHyp = thirdLeg*thirdLeg + squareSide*squareSide;
    thirdHyp = Math.sqrt(thirdHyp);
    let thirdWorks = Number.isInteger(thirdHyp);

    if (smallWorks == true && secondWorks==true && thirdWorks ==true /*&& smallLeg1<smallLeg2*/){
       for(q=1; q<secondHyp; q++){
        let newSmallLeg=q;
        let secondHypMinusSmallLeg= secondHyp - newSmallLeg;
        let height = Math.sqrt(smallHyp*smallHyp-newSmallLeg*newSmallLeg);
        let heightWorks = Number.isInteger(height);

        let finalHeightCheck = Math.sqrt(thirdHyp*thirdHyp-secondHypMinusSmallLeg*secondHypMinusSmallLeg)

        if(heightWorks == true && finalHeightCheck == height){
         outputParagraph.innerText += "small triangle: "+smallLeg1+ ", "+smallLeg2+", "+smallHyp+ " second triangle: "+secondLeg+ ", "+squareSide+", "+secondHyp+
            " third triangle: "+thirdLeg+ ", "+squareSide+", "+thirdHyp+
            " height: "+height+ " values for w and z-w: "+newSmallLeg+ ", "+secondHypMinusSmallLeg + "\n";
         /*array.push("small triangle: "+smallLeg1+ ", "+smallLeg2+", "+smallHyp+ " second triangle: "+secondLeg+ ", "+squareSide+", "+secondHyp+
            " third triangle: "+thirdLeg+ ", "+squareSide+", "+thirdHyp+
            " height: "+height+ " values for w and z-w: "+newSmallLeg+ ", "+secondHypMinusSmallLeg);*/

           
        }
       }
   
    }
   }
}
}
//for(const item of array){
//outputParagraph.innerText += item + "\n";
//}
});
