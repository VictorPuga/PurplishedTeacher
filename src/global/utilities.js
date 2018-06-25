const response1 = "Quiz Name\nName\nStudent ID:\n01 A B C D 21 ABC D 41 A B CD\n02 A B C D22 A B C D 42 A B CD\n03 A B C D 23 A B C D 43 A B CD\n04 A B C D24 A BC D 44 A B CD\n05 A B C D 25 A BC D 45 A B C D\n06 A B C D 26 A B C D 46 A B C D\n07 A B C D 27 A BC D 47 AB C D\n08 A B C D28 A BC D 48 AB C D\n09 A B C D 29 A B C D49 A B C D\n10 A B C D 30 A B C D 50 A B CD\nII A B C D 3I A B C D 51 A B C D\n12 A B C D32 A BC D 52 A B C D\n13 A B C D ЗЗ A B C D 53 A B C D\n14 A B C D34 A B C D 54 A B C D\n15 A B C D 35 A BC D 55 A B C D\n16 A B C D36 A B C D 56 A B CD\n17 A B C D З7 A B C D 57 A B C D\n18 AB C D38 A B C D 58 AB CD\n19 ABC D39 A B C D 59 A B C D\n20 A B C D 40 A BC D 60 A B C D\nThis test was made with\nby your teacher and Purplished\n"

const response2 = "Quiz Name\nName\nStudent ID\nCD21 AB\nD\n41 A\nC D\n01 A\n02 A B\n03 A @ CD23#BCD43A@. С\n04萝B C D 24 A B C 44 B C\n05AB CO 25 A\n06 A\n07 A BD 27 A B G47 A BD\nD 22 A@. С D 42 A B\nC D 45 A B C\nC D26 A B D 46 A\nC D\n49 B C D\nC D 50 A B C\nD\n09 B C D 29 ABC\n10 A B C\n30 A\nCD31 AB\n51 A\nC D\n32 A @. С D 52 A\n12 A B\n13A@\" С D 33ep B C D 53 A@ С\n14 B C D 34 A B C 54 BCD\n15 A B C35 A\n16 A\n17 A BD 37 A B 657 A B D\n18 A B D38 B C D 58A B 6D\n19 @ B C D 39 А В С@59 @ В С\n20 A B C迴40 A参C D 60 A B C\nC D 55 ABC\nC D36 A B GD56 A\nC D\nThis test was made with\nby your teacher and Purplished\n"

const answerKey =[
    'A','B','D','C','B','B','C','D','D','C','A','D','C','B','B','B','C','D','C','B','C','B','D','B','C','C','D','A','D','C','D','B','D','A','B','C','A','C','C','D','C','A','B','B','D','A','C','C','C','C','C','A','A','D','C','D','C','C','C','C', 
]

findStart = (string, param) => string.search(param)
findEnd = (string, param) => string.search(param)

cutString = (string, firstParam, secondParam) => {
   const start = findStart(string, firstParam)
   const end = findEnd(string, secondParam)
   string = string.slice(start, end)
    return string
}

checkForX1 = (x) => (x.length >= 2) ? x : "0" + x
checkForX2 = (x) => (x <= 41) ? x +20 : (x !== 60) ? x - 39 : null

clean = (string) => string.replace(/\s/g, "")
proofread = (string) => {
    string = string.replace(/[Oo]/gi, "0")
    string = string.replace(/[LlIi|]/gi, "1")
    string = string.replace(/[Zz]/gi, "2")
    string = string.replace(/[Ss]/gi, "5")
    return string
}

// calcStart = (string, x) => (6*(x-1))
// calcEnd = (string, x) => (6*x)

validate = (string) => (string.length === 360) ? true : false // I guess we dont need this anymore

error = () => {throw Error('Something went wrong. Try to take the picture again')}

cleanAnswers = (string) => {
    // const start = findStart(string, "01")
    // const end = findEnd(string, "This")
    // string = string.slice(start, end)
    string = cutString(string, "01", "This")
    string = clean(string)
    string = proofread(string)
    return string
}
                // Number of questions from the answer key 
groupAnswers = (string , questions) => {
    let answers = []
    for (let x = 1; x <= questions; x++) {
        // const start = calcStart(response, x)
        // const end = calcEnd(response, x)
        // let answer = string.slice(start, end)
        const start = checkForX1(x)
        const end = checkForX2(x)
        let answer = cutString(string, start, end)
        answer = answer.split("")
        answer.splice(2, 0, "_")
        answer = answer.join("")
        answers.push(answer)
        answers.sort()
    }
    // answers.sort()
    // answers.push('33')
    // answers.push('37')
    // answers.push('33 ABCD')
    // answers.push('37 ABCD')
    // answers.sort()
    return answers
}

let response = response1

response = cleanAnswers(response)

response = groupAnswers(response, 60)

console.log(response)
