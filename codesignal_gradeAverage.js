function solution(records) {
    const gradesMap = {};

    // Process the records
    for (let i = 0; i < records.length; i += 2) {
        const name = records[i];
        const grade = +records[i + 1]; // Automatically convert string to number

        if (!gradesMap[name]) {
            gradesMap[name] = [];
        }
        gradesMap[name].push(grade);
    }

    let highestAverage = 0;
    let topStudent = '';

    // Calculate averages and find the top student
    for (const name in gradesMap) {
        const grades = gradesMap[name];
        let total = 0;

        // Sum the grades manually
        for (let j = 0; j < grades.length; j++) {
            total += grades[j];
        }

        const average = total / grades.length;

        if (average > highestAverage) {
            highestAverage = average;
            topStudent = name;
        }
    }

    return topStudent;
}

// Example input
const records = ['John', '5', 'Michelle', '4', 'Ruby', '2', 'Ruby', '5', 'Michelle', '5'];

const result = solution(records);
console.log(result); // Output: 'John'
