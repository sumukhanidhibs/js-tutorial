const ans = document.querySelector("#bmicontain")

function del(){
  let ul = document.querySelector('h1')
  ul.remove()
}

function cal(){
  del()
  let h = document.querySelector("input[name=ht]").value;
  let h1 = h/100;
  const w = document.querySelector("input[name=wt]").value;
  let bmi = Math.round(w / (h1*h1))
  let answer = document.createElement('h1');
  answer.innerHTML = `${bmi}`
  ans.appendChild(answer)
}


