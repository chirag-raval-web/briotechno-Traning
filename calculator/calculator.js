let result = document.getElementById("result");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

//todo clear the result when click on C button
clear.onclick = () => (result.textContent = 0);

//todo perform the operation when click on = button
equal.onclick = () => {
  result.textContent = eval(result.textContent);
};

//todo Get the all button value by clicking
document.querySelector(".key").addEventListener("click", (event) => {
    let key = event.target;
  
    let operators = key.classList.contains("operators");
    let digits = key.classList.contains("digits");
  
    if (key) {
      if (operators || digits) {
        if (result.textContent == 0 && digits) {
          result.textContent = key.textContent;
        } else if (result.textContent !== 0 && operators) {
          
          let lastChar = result.textContent[result.textContent.length - 1];
          if (["+","-","*","/"].includes(lastChar)) {
            
            result.textContent = result.textContent.slice(0, -1) + key.textContent;
          } else {
            result.textContent += key.textContent;
          }
        } else if (result.textContent !== 0 && digits) {
          result.textContent += key.textContent;
        }
      }
    }
  });

