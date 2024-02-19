function Animator(query, text) {
  let iter = text.length - 1;
  // A random string generator function ↓
  function randomStr(len) {
    let val = "";
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; /*The Random Character Set*/
    for (i = 0; i < len; i++) {
      val += charSet[Math.floor(Math.random() * ((charSet.length - 1) + 1))];
    }
    return val;
  }
  
  /* Working Of This Function */
  animate = setInterval(() => {
    if (iter == -1) {
      clearInterval(animate)
    } else {
      query.innerText = text.slice(0, text.length - iter) + randomStr(iter)
      iter -= 1 / 8;
    }
  }, 10)
}

/*
First Arguement: DOM Element
Second Arguement: The Text
*/
Animator(document.getElementById("download-button"), "DOWNLOAD THIS TEXT EFFECT")