const form = document.getElementById("Resumeform") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

form.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    const name = (document.getElementById("nameID") as HTMLInputElement).value;
    const email = (document.getElementById("emailID") as HTMLInputElement).value;
    const phone = (document.getElementById("phoneID") as HTMLInputElement).value;
    const education = (document.getElementById("educationID") as HTMLInputElement)?.value;
    const experience = (document.getElementById("experienceID") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skillsID") as HTMLTextAreaElement).value;

    const resumeContent = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <h2>Education:</h2>
        <p contenteditable="true">${education}</p>
        <h2>Experience:</h2>
        <p contenteditable="true">${experience}</p>
        <h2>Skills:</h2>
        <p contenteditable="true">${skills}</p>
        <button id="saveResumeButton">Save Changes</button>
    `;

    resumeOutput.innerHTML = resumeContent;
    form.reset();
    const saveButton = document.getElementById("saveResumeButton") as HTMLButtonElement;
    saveButton.addEventListener("click", saveResume);
});

function saveResume() {
    const updatedResume = resumeOutput.innerHTML; 
    console.log("Updated Resume HTML:", updatedResume);

    alert("Your resume has been successfully updated. Review the changes and feel free to make further edits if needed.");
}