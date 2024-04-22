function calculateAttendance() {
    const subjectName = document.getElementById("subjectName").value;
    const deliveredClasses = parseInt(document.getElementById("deliveredClasses").value);
    const attendedClasses = parseInt(document.getElementById("attendedClasses").value);
    const currentAttendance = (attendedClasses * 100) / deliveredClasses;
    document.getElementById("currentAttendance").textContent = `Your current attendance for ${subjectName} is: ${currentAttendance.toFixed(2)}%`;
}

function updateAttendance() {
    const bunkClasses = parseInt(document.getElementById("bunkClasses").value);
    const attendedClasses = parseInt(document.getElementById("attendedClasses").value);
    const deliveredClasses = parseInt(document.getElementById("deliveredClasses").value) + bunkClasses;
    const updatedAttendance = (attendedClasses * 100) / deliveredClasses;
    document.getElementById("updatedAttendance").textContent = `Your updated attendance is: ${updatedAttendance.toFixed(2)}%`;
}

