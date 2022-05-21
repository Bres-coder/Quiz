//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const ranking_btn = document.querySelector(".ranking_btn button");

const info_box = document.querySelector(".info_box");
const ranking_box = document.querySelector(".ranking_box");

const continue_btn = info_box.querySelector(".buttons .restart");
const back_btn = ranking_box.querySelector(".buttons .restart");

const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");



// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

ranking_btn.onclick = ()=>{
    ranking_box.classList.add("activeRanking"); //show ranking box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
   // ranking_box.classList.remove("activeRanking"); hide ranking box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

back_btn.onclick = ()=>{
    ranking_box.classList.remove("activeRanking");
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    var option_tag = [];
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<img src="https://countryflagsapi.com/png/'+questions[index].numb+'">';
    option_tag [0] = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>';
    option_tag [1] = '<div class="option"><span>'+ questions[index].options[1] +'</span></div>';
    option_tag [2] = '<div class="option"><span>'+ questions[index].options[2] +'</span></div>';
    option_tag [3] = '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    
    option_tag.sort();

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag [0] + option_tag [1] + option_tag [2] + option_tag [3]; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
    
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    ranking_box.classList.remove("activeRanking"); //hide ranking box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    const scoreIcon = result_box.querySelector(".icon");
    const ranking = result_box.querySelector(".ranking");
    if (userScore >= 7){ // if user scored more or equal 7
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
        let starsRaking = '<i class="fas fa-crown" style="color: #F806CCbe"></i> <i class="fas fa-crown" style="color: #F806CCbe"></i> <i class="fas fa-crown" style="color: #F806CCbe"></i>';
        scoreIcon.innerHTML = starsRaking;
        let divRanking = '<div>You deserve to be in our score ranking! Please write your name and press Enter</div><div class="newtodo"><div class="newtodo-input"><form onsubmit="addItem(event)"><input id="todo-input" type="text" placeholder="Your Name" /></form></div></div>'
        ranking.innerHTML = divRanking;
    }
    else if(userScore > 4){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
        let starsRaking = '<i class="fas fa-crown" style="color: #A91079be"></i><i class="fas fa-crown" style="color: #A91079be"></i>';
        scoreIcon.innerHTML = starsRaking;
    }
    else{ // if user scored less than 5
        let scoreTag = '<span>But... you got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> </span>';
        scoreText.innerHTML = scoreTag;
        let starsRaking = '<i class="fas fa-crown" style="color: #570A57be">';
        scoreIcon.innerHTML = starsRaking;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

function addItem(event) {
    event.preventDefault();
    let text = document.getElementById("todo-input");
    db.collection("quiz-bestscore").add({
        text: text.value,
        status: userScore
    })
    text.value = "";
}

function getItems(){
    db.collection("quiz-bestscore").orderBy("status", "desc").onSnapshot((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc)=>{
            items.push({
                id: doc.id,
                ...doc.data()
            })
        })
        generateItems(items);
        console.log(items);
    })
}


function generateItems(items){

    let itemsHTML = "";
    items.forEach((item)=>{
        itemsHTML += `
        <tr>
            <td>
                ${item.text}
            </td>
            <td class="score">
                ${item.status}
            </td>
        </tr>
        `
    })
    document.querySelector(".todo-items").innerHTML = `<thead><tr class="title_tr"><th>Name</th><th class="score">Score</th></tr></thead>`+ itemsHTML;
}

getItems();
