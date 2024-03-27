var subjects = [
    { name: "Math", fullMarks: 100 },
    { name: "urdu", fullMarks: 100 },
    { name: "English", fullMarks: 100 },
];

// Initialize an empty array for storing subject marks
var subjectMarks = [];

// Prompt the user to enter the marks for each subject
for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    var marks = prompt("Enter the marks for " + subject.name + " out of " + subject.fullMarks + ":");
    subjectMarks.push(parseInt(marks));
}

// Display the subject total marking table
document.write("<h1>Subject Total Marking Table</h1>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Marks</th><th>Full Marks</th><th>Percentage</th></tr>");

for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    var mark = subjectMarks[i];
    var percentage = (mark / subject.fullMarks) * 100;
    document.write("<tr><td>" + subject.name + "</td><td>" + mark + "</td><td>" + subject.fullMarks + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
}



