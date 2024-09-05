let result = document.getElementById("result");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

//todo clear the result when click on C button
clear.onclick = () => (result.value = 0);

//todo perform the operation when click on = button
equal.onclick = () => {

    result.value = eval(result.value);
};

//todo Get the all button value by clicking
document.querySelector(".key").addEventListener("click", (event) => {
    let key = event.target;
  
    let operators = key.classList.contains("operators");
    let digits = key.classList.contains("digits");
  
    if (key) {
      if (operators || digits) {
        if (result.value == 0 && digits) {
          result.value = key.textContent;
        } else if (result.value !== 0 && operators) {
          
          let lastChar = result.value[result.value.length - 1];
          if (["+","-","*","/"].includes(lastChar)) {
            
            result.value = result.value.slice(0, -1) + key.textContent;
          } else {
            result.value += key.textContent;
          }
        } else if (result.value !== 0 && digits) {
          result.value += key.textContent;
        }
      }
    }
  });

