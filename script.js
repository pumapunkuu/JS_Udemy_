(function(){//IIFE
    
    function Question(question,answers,correct){//these are arguments
    
    this.question=question;//Will be a string
    this.answers=answers;//Will be an array 
    this.correct=correct//Will be a number
    
}

//Creating question objects from constructor
var q1 = new Question('You wanna ask a question?',['yes','no'],1);
var q2 = new Question('Who is the tutor',['Tupin','Takron','Prumpt'],0);
var q3 = new Question('What is the subs name colour of the blood',['Cherry juice','Resotto'],2);

//Objects hold a reference in memory

var container =[q1,q2,q3];//Stored questions in an array
var x = Math.floor(Math.random()*container.length);//Random number
//is created to to select questions randomly

function  questionSelector(){
    
    for(var i = 0 ;i<=x;i++){
        
        if (container[x]==q1){
            
            console.log(q1.question);//Question will be displayed
            answersSelector();//Answer will be displayed
            
            var choices = prompt('Enter your choice'); 
            if(choices >q1.answers.length){
                console.log('Out of the length!!');
                return-1
            }else{
                if(choices == q1.correct){
                console.log(q1.answers[choices]+  ' is correct');
            }else{
             console.log(q1.answers[choices]+  ' is wrong');

            }
                break;
            
            }

            
        }else if(container[x]==q2){
    
            console.log(q2.question);
            answersSelector();
            
            var choices = prompt('Enter your choice'); 
            if(choices >q1.answers.length){
                console.log('Out of the length!!');
                return-1
            }else{
                if(choices == q2.correct ){
                console.log(q2.answers[choices]+  ' is correct');
            }else{
             console.log(q2.answers[choices]+  ' is wrong');

            }
                break;
        }
            }
            
        else{
            console.log(q3.question);
            answersSelector();
            var choices = prompt('Enter your choice'); 
            if(choices>q3.answers.length){
                console.log('Out of the length!!');
                return-1
            }else{
                if(choices == q1.correct){
                console.log(q3.answers[choices]+  ' is correct');
            }else{
             console.log(q3.answers[choices]+  ' is wrong');

            }
                break;
        }
            
    }
                
            }
            
}

function answersSelector(){//To select answers or to visualise them it was created and everytime question selector called this will pop up the choices under questions
    if(container[x]==q1){//If random number equals 0
        console.log(q1.answers);
    }
    else if(container[x]==q2){//If random number equals 1
        console.log(q2.answers);

    }
    else{//If random number equals 2
        console.log(q3.answers);

    }
    
}


    questionSelector(x);
    
}

)();