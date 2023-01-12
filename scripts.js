

const gitBtn = document.getElementById('git');
const git = document.getElementById('github');
const mailBtn = document.getElementById('mail');
const email = document.getElementById('email');

mailBtn.addEventListener('click', toggleEmail);
gitBtn.addEventListener('click', toggleGitHub);

function toggleEmail() {
    email.classList.toggle('is-active');
}


function toggleGitHub() {
    git.classList.toggle('is-active');
}



const copyBtn = document.getElementById('copy-btn');
const copyEmail = document.getElementById('copy-email');

copyBtn.addEventListener('click', copy);

function copy() {
    navigator.clipboard.writeText(copyEmail.innerHTML);
    email.classList.remove('is-active');
}




const smallerScreenWidth = window.matchMedia("(max-width: 1000px)");

const aboutBtn = document.getElementById('about');
const grid = document.getElementById('grid-bg')
const windowMenu = document.getElementById('enter');
const frontBrowser = document.getElementById('front-window');
const frontContent = document.getElementById('front-content');
const redBtn = document.getElementById('close-browser');
const aboutContent = document.getElementById('about-me');
const xIcon = document.getElementById('x-icon');


aboutBtn.addEventListener('click', openAbout);

redBtn.addEventListener('click', closeAbout);

function openAbout() {
    grid.style.display = 'none';
    windowMenu.style.display = 'none';
    aboutContent.style.display = 'block';
    frontBrowser.style.transition = '1s';
    frontContent.style.backgroundColor = '#00222f';
    frontContent.style.transition = '.5s';
    redBtn.style.cursor = 'pointer';
    xIcon.style.display = 'block';
    window.addEventListener('resize', closeAbout);
    if (smallerScreenWidth.matches) {
        frontBrowser.style.transform = 'scale(1.6) translate(0, 10vmin)';
        frontBrowser.scrollIntoView({behavior: "smooth", block: 'start'});
    } else {
        frontBrowser.style.transform = 'scale(1.2) translate(-1vmin, -3vmin) rotate(-10deg)';
    }
}

function closeAbout() {
    grid.style.display = 'grid';
    windowMenu.style.display = 'block';
    aboutContent.style.display = 'none';
    frontBrowser.style.transition = '1s';
    frontBrowser.style.transform = 'scale(1) translate(0)';
    frontContent.style.backgroundColor = 'white';
    frontContent.style.transition = '.5s';
    redBtn.style.cursor = 'auto';
    xIcon.style.display = 'none';
}





