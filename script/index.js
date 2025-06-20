function concatValue(student) {
    return `${student.name}/${student.age}/${student.level}`;  
}

function processStudentInput() {
    const input = document.getElementById("studentInput").value;
    const output = document.getElementById("output");
    
    try {
    const students = JSON.parse(input);
    if (!Array.isArray(students)) throw new Error("Input must be an array");

    const result = students.map(concatValue).join(', ');
    output.textContent = result;

    } catch (error) {
    output.textContent = `Error: ${error.message}`;
    }
}


function cleanString() {
    let text = document.getElementById("textInput").value;
    let puncFree = text.replace(/[^a-zA-Z0-9\s/]/g, '').trim();
    let arr = puncFree.split(" ");
    document.getElementById("show-array").innerText = JSON.stringify(arr);
    return arr;
}