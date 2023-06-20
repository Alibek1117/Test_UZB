const score = document.querySelector('.score')
const subtitle = document.querySelector('.subtitle')
const form = document.querySelector('.formcha')
const audio = document.querySelector('span')


let answer = ['C', 'B', 'A', 'C', 'A', 'B', 'B', 'B', 'A', 'B'];
// console.log(form);
form.addEventListener('submit', (e) => {
    let userScore = 0
    let userName = prompt('Iltimos ismingizni kiriting!')
    e.preventDefault();
    

    let userAnswer = [
        e.target.q1.value,
        e.target.q2.value,
        e.target.q3.value,
        e.target.q4.value,
        e.target.q5.value,
        e.target.q6.value,
        e.target.q7.value,
        e.target.q8.value,
        e.target.q9.value,
        e.target.q10.value,
    ]

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] == userAnswer[i]) {
            userScore += 10
        }
    }
    scrollTo(50,50);
    

    if (userScore == 100) {
        score.textContent = `${userScore}%`;
        score.classList.add('score1')
        subtitle.textContent = `E qoyilee ${userName} siz yorib tashladingiz!!! Siz bilan butun O'zbekiston faxrlanadi!`
        subtitle.classList.add('subtitle1')
        audio.innerHTML = ('<audio src="./audio/audio1.ogg" controls autoplay></audio>')
    }else if (userScore < 100 && userScore >= 60) {
        score.textContent = `${userScore}%`;
        score.classList.add('score2')
        subtitle.textContent = `${userName} sizni tabriklayman. Siz o'z vataninggiz haqidagi savollarga qoniqarli javob berdingiz!`
        subtitle.classList.add('subtitle2')
        audio.innerHTML = ('<audio src="./audio/audio3.ogg" controls autoplay></audio>')
    }else if (userScore < 60 ) {
        score.textContent = `${userScore}%`;
        score.classList.add('score3')
        subtitle.textContent = `Uyat! Sharmanda! ${userName} siz bu muqaddas yurtda yashashga noloyiqsiz! Tuyog'ingizni shiqqilating!`
        subtitle.classList.add('subtitle3')
        audio.innerHTML = ('<audio src="./audio/audio2.ogg" controls autoplay></audio>')
    }
    
})
