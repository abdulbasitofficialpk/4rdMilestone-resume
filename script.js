var form = document.getElementById("Resumeform");
var resumeOutput = document.getElementById("resumeOutput");
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById("nameID").value;
    var email = document.getElementById("emailID").value;
    var phone = document.getElementById("phoneID").value;
    var education = (_a = document.getElementById("educationID")) === null || _a === void 0 ? void 0 : _a.value;
    var experience = document.getElementById("experienceID").value;
    var skills = document.getElementById("skillsID").value;
    var resumeContent = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h2>Education:</h2>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h2>Experience:</h2>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h2>Skills:</h2>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        <button id=\"saveResumeButton\">Save Changes</button>\n    ");
    resumeOutput.innerHTML = resumeContent;
    form.reset();
    var saveButton = document.getElementById("saveResumeButton");
    saveButton.addEventListener("click", saveResume);
});
function saveResume() {
    var updatedResume = resumeOutput.innerHTML;
    console.log("Updated Resume HTML:", updatedResume);
    alert("Your resume has been successfully updated. Review the changes and feel free to make further edits if needed.");
}
