function pass(name, score) {
    var passMark = 50;
    var passDistinct = 75;
    var Exceptional = 99;
    
    if (score >= Exceptional) {
        console.log ("The student, " + name + " has done exceptionally well by scoring " + score + " marks");
    }
    else if(score >= passDistinct) {
         console.log ("The student, " + name + " has passed with a distinction by scoring " + score + " marks");
    }
    else if(score >= passMark) {
         console.log ("The student, " + name + " has passed by scoring " + score + " marks") 
    }
    else {
         console.log ("The student, " + name + " has failed by scoring " + score + " marks");
    }
    
}


pass("Ron", 99);
pass("John", 67);
pass("Jane", 43);
pass("Neymur", 50);
pass("jenaa",75);