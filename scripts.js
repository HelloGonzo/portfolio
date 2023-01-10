

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