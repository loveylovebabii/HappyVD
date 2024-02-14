const alternatives = [
  {text:"", images:"cat-01.gif"},
  {text:"Sorry na Love ko naman ikaw palagi babawi ako sayo okie ?  I love you Lovey :* Mwa.", images:"cat-02.gif"},
  {text:"Sorry na Love ko naman ikaw palagi babawi ako sayo okie ?  I love you Lovey :* Mwa.", images:"cat-03.gif"},
  {text:"Sorry na Love ko naman ikaw palagi babawi ako sayo okie ?  I love you Lovey :* Mwa.", images:"cat-04.gif"},
  {text:"Sorry na Love ko naman ikaw palagi babawi ako sayo okie ?  I love you Lovey :* Mwa.", images:"cat-05.gif"},
]
const ohyes = {text:"Thankss kahit dami ko pagkukulang na appreciate ko ikaw I love youu so Much :*", images:"cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', () => {
      if (button.textContent == "Yes po") {
          updateDisplay(ohyes);
          // Remove this line to prevent hiding other buttons
          // buttons.forEach(btn => btn.style.display = 'none');
      }
      if (button.textContent == 'No kasi wala kang flower :P') {
          count++;
          if (count < alternatives.length) {
              updateDisplay(alternatives[count]);
          } else {
              buttons.forEach(btn => btn.style.display = 'none');
              errorButton.style.display = 'inline-block';
          }
      }
  });
});
