const task3Element = document.getElementById('task-3');

function first(){
      alert('hello')
}

function second(name){
     alert(name)
}

first();
second('max');

task3Element.addEventListener('click', first)

function third(name, lastName, date){
     let combined = `${name} ${lastName} ${date}`
     return combined
}
let combinedString = third('one', 'two', 'three')
alert(combinedString)