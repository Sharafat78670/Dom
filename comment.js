
document.getElementById('btn-box').addEventListener('click',function () {
    const commentBox=document.getElementById('comment-box');
    const newComment =commentBox.value;

    const commentContainer=document.getElementById('comment-container');
    const p= document.createElement('p');
    p.innerText=newComment;
    commentContainer.appendChild(p);

    commentBox.value = '';
})
