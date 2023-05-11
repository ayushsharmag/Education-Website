const questions=document.querySelectorAll('.questions');

questions.forEach(questions => {
    questions.addEventListener('click',()=>
    {
        questions.classList.toggle('open');

        const icon = questions.querySelector('.ques');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus"
        }
    })
})