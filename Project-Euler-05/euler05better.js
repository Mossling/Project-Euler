//I did not create this solution. I found it on a discussion board.
//I would like to understand this solution better so I'm saving it here so I don't forget.

let answers = [20];

for(let i=0; i<20; i++){
    answers[i] = i+1;
}

let answer =1;
for(let i =0; i<answers.length;i++){
        if(answers[i]!=1){
            answer *= answers[i];
            for(let j=answers.length-1; j>=i ;j--){
                if(answers[j]%answers[i]==0){
                    answers[j]=answers[j]/answers[i];
                }
            }
        }
}
console.log(answer);
