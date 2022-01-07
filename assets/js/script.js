const upVote = document.getElementById('upVote');
const downVote = document.getElementById('downVote');

const voted = 'voted';

upVote.addEventListener('click', changeUpVote);
downVote.addEventListener('click', changeDonwVote);

function changeUpVote() {
    upVote.classList.toggle(voted);
    if(upVote.classList.contains(voted)){

        upVote.textContent = ' Gostei'
    } else {
        upVote.textContent = ''
    }
}

function changeDonwVote() {
    downVote.classList.toggle(voted);
    if (downVote.classList.contains('voted')) {
        downVote.textContent = ' Não Gostei'
    } else {
        downVote.textContent = ''
    }
}

