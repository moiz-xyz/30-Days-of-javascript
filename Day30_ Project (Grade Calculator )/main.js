const percentCalculator = (userMarks , totalMarks) => {
   let percentage = userMarks / totalMarks * 100
   console.log(percentage + "%");
   if (percentage === 90){
       console.log('Grade is A1');
    } else if (percentage === 80){
        console.log('Grade is A');

    } else if (percentage === 70){
        console.log('Grade is B');

    } else if (percentage === 60){
        console.log('Grade is C');

    } else if (percentage === 50){
        console.log('Grade is D');
}
else {
    console.log('Youa re fail');
}
}
percentCalculator (495,550) 
percentCalculator (495,1100) 
