var number = parseInt(prompt("Enter a number For Multiplication Tabl."));

// Printing logic
for (i = 1; i <= 10; i++) {
    document.getElementById("multiplication-table").innerHTML +=
        `${number} * ${i} = ${number * i} <br>`;
}