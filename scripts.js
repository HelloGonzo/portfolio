

//const gitBtn = document.getElementById('git');
//const git = document.getElementById('github');
const mailBtn = document.getElementById('mail');
const email = document.getElementById('email');

mailBtn.addEventListener('click', toggleEmail);
//gitBtn.addEventListener('click', toggleGitHub);

function toggleEmail() {
    email.classList.toggle('is-active');
}

/*
function toggleGitHub() {
    git.classList.toggle('is-active');
}
*/


const copyBtn = document.getElementById('copy-btn');
const copyEmail = document.getElementById('copy-email');

copyBtn.addEventListener('click', copy);

function copy() {
    navigator.clipboard.writeText(copyEmail.innerHTML);
    email.classList.remove('is-active');
}