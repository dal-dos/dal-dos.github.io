button1.addEventListener('click', meanfunc);
button2.addEventListener('click', weightfunc);

function weightfunc() {
    var weightA1var = document.getElementById('weightA1').value;
    var gradeTopA1var = document.getElementById('gradeTopA1').value;
    var gradeBotA1var = document.getElementById('gradeBotA1').value;
    var weightA2var = document.getElementById('weightA2').value;
    var gradeTopA2var = document.getElementById('gradeTopA2').value;
    var gradeBotA2var = document.getElementById('gradeBotA2').value;
    var weightA3var = document.getElementById('weightA3').value;
    var gradeTopA3var = document.getElementById('gradeTopA3').value;
    var gradeBotA3var = document.getElementById('gradeBotA3').value;
    var weightA4var = document.getElementById('weightA4').value;
    var gradeTopA4var = document.getElementById('gradeTopA4').value;
    var gradeBotA4var = document.getElementById('gradeBotA4').value;
    var temp;
    var grade;
    var grade1 = weightA1var * (gradeTopA1var / gradeBotA1var);
    var grade2 = weightA2var * (gradeTopA2var / gradeBotA2var);
    var grade3 = weightA3var * (gradeTopA3var / gradeBotA3var);
    var grade4 = weightA4var * (gradeTopA4var / gradeBotA4var);

    if (isNaN(grade1) || gradeBotA1var == 0) {
        grade1 = 0;
        weightA1var = 0;
        gradeTopA1var = 0;
        gradeBotA1var = 0;
    }
    if (isNaN(grade2) || gradeBotA2var == 0) {
        grade2 = 0;
        weightA2var = 0;
        gradeTopA2var = 0;
        gradeBotA2var = 0;
    }
    if (isNaN(grade3) || gradeBotA3var == 0) {
        grade3 = 0;
        weightA3var = 0;
        gradeTopA3var = 0;
        gradeBotA3var = 0;
    }
    if (isNaN(grade4) || gradeBotA4var == 0) {
        grade4 = 0;
        weightA4var = 0;
        gradeTopA4var = 0;
        gradeBotA4var = 0;
    }
    temp = weightA1var * 1 + weightA2var * 1 + weightA3var * 1 + weightA4var * 1;
    grade = ((grade1 + grade2 + grade3 + grade4) / temp);

    if (isNaN(grade)) {
        resultEnd.textContent = "Error";
    } else {
        resultEnd.textContent = (grade * 100).toFixed(2) + "%";
    }
    
}

function meanfunc() {
    var gradeTopA1var = document.getElementById('gradeTopA1').value;
    var gradeBotA1var = document.getElementById('gradeBotA1').value;
    var gradeTopA2var = document.getElementById('gradeTopA2').value;
    var gradeBotA2var = document.getElementById('gradeBotA2').value;
    var gradeTopA3var = document.getElementById('gradeTopA3').value;
    var gradeBotA3var = document.getElementById('gradeBotA3').value;
    var gradeTopA4var = document.getElementById('gradeTopA4').value;
    var gradeBotA4var = document.getElementById('gradeBotA4').value;
    var activites = 4;
    var grade1 = gradeTopA1var / gradeBotA1var;
    var grade2 = gradeTopA2var / gradeBotA2var;
    var grade3 = gradeTopA3var / gradeBotA3var;
    var grade4 = gradeTopA4var / gradeBotA4var;
    if (isNaN(grade1) || gradeBotA1var == 0) {
        grade1 = 0;
        gradeTopA1var = 0;
        gradeBotA1var = 0;
        activites--;
        
    }
    
    if (isNaN(grade2) || gradeBotA2var == 0) {
        grade2 = 0;
        gradeTopA2var = 0;
        gradeBotA2var = 0;
        activites--;
    }
    if (isNaN(grade3) || gradeBotA3var == 0) {
        grade3 = 0;
        gradeTopA3var = 0;
        gradeBotA3var = 0;
        activites--;
    }
    if (isNaN(grade4) || gradeBotA4var == 0) {
        grade4 = 0;
        gradeTopA4var = 0;
        gradeBotA4var = 0;
        activites--;
    }

    grade = (grade1 + grade2 + grade3 + grade4) / activites;

    if (isNaN(grade)) {
        resultEnd.textContent = "Error";
    } else {
        resultEnd.textContent = (grade * 100).toFixed(2) + "%";
    }
}

function percentA1func() {
    var gradeTopA1var = document.getElementById('gradeTopA1').value;
    var gradeBotA1var = document.getElementById('gradeBotA1').value;
    var temp = (100 * (gradeTopA1var / gradeBotA1var)).toFixed(2);
    percentA1.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA1var == 0) {
        if (gradeTopA1var == 0 && gradeBotA1var == 0) {
            percentA1.textContent = "";
        } else {
            percentA1.textContent = "Error";
        }
    } else {
        percentA1.textContent = temp + "%";
    }

}

function percentA2func() {
    var gradeTopA2var = document.getElementById('gradeTopA2').value;
    var gradeBotA2var = document.getElementById('gradeBotA2').value;
    var temp = (100 * (gradeTopA2var / gradeBotA2var)).toFixed(2);
    percentA2.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA2var == 0) {
        if (gradeTopA2var == 0 && gradeBotA2var == 0) {
            percentA2.textContent = "";
        } else {
            percentA2.textContent = "Error";
        }
    } else {
        percentA2.textContent = temp + "%";
    }
}

function percentA3func() {
    var gradeTopA3var = document.getElementById('gradeTopA3').value;
    var gradeBotA3var = document.getElementById('gradeBotA3').value;
    var temp = (100 * (gradeTopA3var / gradeBotA3var)).toFixed(2);
    percentA3.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA3var == 0) {
        if (gradeTopA3var == 0 && gradeBotA3var == 0) {
            percentA3.textContent = "";
        } else {
            percentA3.textContent = "Error";
        }
    } else {
        percentA3.textContent = temp + "%";
    }
}

function percentA4func() {
    var gradeTopA4var = document.getElementById('gradeTopA4').value;
    var gradeBotA4var = document.getElementById('gradeBotA4').value;
    var temp = (100 * (gradeTopA4var / gradeBotA4var)).toFixed(2);
    percentA4.textContent = temp + "%";
    if (isNaN(temp) || gradeBotA4var == 0) {
        if (gradeTopA4var == 0 && gradeBotA4var == 0) {
            percentA4.textContent = "";
        } else {
            percentA4.textContent = "Error";
        }
    } else {
        percentA4.textContent = temp + "%";
    }
}
