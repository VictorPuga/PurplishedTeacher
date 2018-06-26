checkQuiz = (string) => {
    let answers = cleanAnswers(string)
    answers = groupAnswers(answers)
    answers = getAnswersFromArray(answers)
    return answers
}

export default checkQuiz

//------ MetaUtilities ----------------------------------

findPosition = (string, param) => string.search(param)

cutString = (string, firstParam, secondParam) => {
    const start = findPosition(string, firstParam);
    const end = findPosition(string, secondParam);
    string = string.slice(start, end);
    return string;
}

defineDigit = (place, x) => {
    switch(place){
        case 'start':
            return((x.toString().length >= 2) ? x : "0" + x);
        case 'end':
            if (x <= 40) { return x + 20 };
            if (x <= 48) { return "0" + (x - 39) };
            if (x <= 59) { return x - 39 };
            if (x === 60) { return null};
            break;
        default:
            console.log('NO SUCH PLACE', place)
    }
}

clean = (string) => {
    string = string.replace(/\s/gi, "");
    string = string.replace(/[Oo]/gi, "0");
    string = string.replace(/[LlIi|]/gi, "1");
    string = string.replace(/[Zz]/gi, "2");
    string = string.replace(/[З]/gi, "3");
    string = string.replace(/[Ss]/gi, "5");
    return string + ' '; // For security issues...
};

cleanAnswers = (string) => {
    string = cutString(string, "01", "This");
    string = clean(string);
    return string;
};

groupAnswers = (string) => {
    let answers = [];
    for (let x = 1; x <= 60; x++) {
        const start = defineDigit('start', x);
        const end = defineDigit('end', x);
        answers.push(
            cutString(string, start, end)
            .split("")
            .splice(2, 0, "")
            .join(""));
    };
    answers.sort();
    return answers;
};

getAnswersFromArray = (array) => {
    let answers = array.map((item => {
        let answer;
        const A = item.includes('A');
        const B = item.includes('B');
        const C = item.includes('C');
        const D = item.includes('D');
        
        if (A && B && C && D) { answer = null }
        else if (B && C && D) { answer = 'A' }
        else if (A && C && D) { answer = 'B' }
        else if (A && B && D) { answer = 'C' }
        else if (A && B && C) { answer = 'D' }
        else { answer = null };
        
        return answer
        }
    ))
    return answers
}