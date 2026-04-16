function getButtonByText(text) {
    // old one
    // const buttons = document.querySelectorAll('.label.ytcp-button');

    // new one
    const buttons = document.querySelectorAll('.edit-draft-button');
    const list = [];
    for (let button of buttons) {
        if (button.textContent.trim() === text) {
            list.push(button);
        }
    }
    return list; // Return null if button with specified text is not found
}


function getSaveButton() {
    return document.querySelector('.ytcp-uploads-dialog #done-button');
}

function getNextButton() {
    return document.querySelector('.ytcp-uploads-dialog #next-button');
}
// ytcp-button#next-button

const sleepTime = 1000;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function publishVideo (button) {
    button.click();
    await sleep(1000);
    const nextButton = getNextButton();
    console.log('next button', nextButton);

    if(nextButton) {
        nextButton.click();
        await sleep(50);
        nextButton.click();
        await sleep(50);
        nextButton.click();
        await sleep(50);
    }
    const saveButton = getSaveButton();
    console.log('Save button', saveButton);
    if(saveButton) {
        console.log('clicking save button');
        saveButton.click();
    }
    await sleep(3000);
}



async function beginPublishing () {

    // Example usage:
    const draftButtons = getButtonByText('Edit draft');
    console.log('draftButtons', draftButtons.length);
    for(i = 0; i < draftButtons.length; i++) {
        await publishVideo(draftButtons[i]);
        console.log('inside the draft video');
    }
    await sleep(2000);
    await nextPage();
}


async function nextPage () {
    const button = document.getElementById('navigate-after');
    if (button) {
        button.click();
        await sleep(3000);
        beginPublishing();
    }
}

beginPublishing();

