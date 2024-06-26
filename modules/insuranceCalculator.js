// Calculates the insurance quote from user input
exports.calculate = (age, answers) => {

    console.log("Input age:", age);
    console.log("Input answers", answers);
    let baseQuote = 100;

    // Adjust quote based on age
    if (age >= 18 && age <= 25) {
        baseQuote += 50;
    } else if (age >= 26 && age <= 40) {
        baseQuote += 30;
    } else if (age > 40) {
        baseQuote += 70;
    }

    console.log("Base quote after age adjustment: ", baseQuote);

    // Adjust quote based on answers to health questions

    //Smoker
    if (answers.q1) baseQuote += 100;

    //Days a week active?
    if (answers.q2 < 3) baseQuote += 50;
    else if (answers.q2 >= 3) baseQuote -= 30;

    //Cronic illnesses?
    if (answers.q3) baseQuote += 150;

    //Alcohol?
    if (answers.q4 < 2) baseQuote += 50;
    else if (answers.q4 >= 5) baseQuote -= 20;

    //Family illness history?
    if (answers.q5) baseQuote += 100;

    return baseQuote;
};
