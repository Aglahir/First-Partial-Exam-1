function generateSequence(inputNumber)
{
  let container = document.getElementsByClassName("resultsSection")[0];
  container.innerHTML = "";
  
  for(var i = 1; i < inputNumber; i++)
  {
    if(i%3 == 0)
    {
      //fizzbuzz
      if(i%5 == 0)
      {
        container.innerHTML += `<div class="fizz-buzz-item fizz buzz" id="item${i}">fizzbuzz</div>`;
      }
      //fizz
      else {
        container.innerHTML += `<div class="fizz-buzz-item fizz" id="item${i}">fizz</div>`;
      }
    }
    // buzz
    else if(i%5 == 0)
    {
      container.innerHTML += `<div class="fizz-buzz-item buzz" id="item${i}">buzz</div>`;
    }
    // none
    else{
      container.innerHTML += `<div class="fizz-buzz-item" id="item${i}">${i}</div>`;
    }
  }
}

function subscribeSubmit(){
  let form = document.getElementById("fizzBuzzForm");
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputNumber = Number(event.target.elements[0].value);
    if(inputNumber > 0){
      generateSequence(inputNumber);
    }
  });
}

function subscribeChildren()
{
  let container = document.getElementsByClassName("resultsSection")[0];
  container.addEventListener('click', (event)=>{
    
    event.target.classList.add('disapear');
  });
}

function init(){
  subscribeSubmit();
  subscribeChildren();
}


init();