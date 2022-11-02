

const dice = document.getElementById("dice");


const fetchAdvice = async ()=>{
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()

    console.log(data);
    document.getElementById("advice-number").innerHTML = data.slip.id;
    document.getElementById("advice-text").innerHTML = data.slip.advice;
}

fetchAdvice();

dice.addEventListener('click',fetchAdvice);

// const dice = document.querySelector('.dice');
// const idNumber = document.querySelector('.advice-id-number');
// const quotes = document.querySelector('.advice-text');

// const getAdvice = async () => {
//     try {
//         const result = await axios.get('https://api.adviceslip.com/advice');
//         quotes.innerText = result.data.slip.advice;
//         idNumber.innerText = result.data.slip.id;
//     } catch (error) {
//         console.log('ERROR', error);
//     }
// }

// dice.addEventListener('click', getAdvice);