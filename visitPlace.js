document.getElementById('input-box').addEventListener('keyup',function (event) {
    const text=event.target.value;
    const deleteBtn=document.getElementById('btn-box');

    if (text === 'delete') {
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
})

document.getElementById('btn-box').addEventListener('click',function () {
    const secret=document.getElementById('visit-place');
    secret.style.display='none';
})