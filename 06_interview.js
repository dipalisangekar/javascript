

var graduationScore= function(gradScore,hscScore,sssScore,candidateName){
    if (gradScore>=70||hscScore>=80||sssScore>=90) {
        console.log(`congrates ${candidateName} You are eligible for TCS interview `);
    } else {
        console.log(`Unfortunately.... ${candidateName} You are not eligible for TCS interview `);
    }


}
graduationScore(80,86,90,"Dipali");
graduationScore(70,65,55,"Ashwini");
graduationScore(60,79,88,"Shruti");