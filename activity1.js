var score=0;

function save_score(){
    localStorage.setItem("ganith",score);
}

function update_score(){
    score=score+1;
    document.getElementById("output_score").innerHTML="Score ="+score;
    console.log("Score="+score);
}

function next_page(){
    window.location="activity_2.html";
}