/*Script for lockscreen clock*/

function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var session = document.getElementById('session');

  if(hrs >= 12){
    session.innerHTML = 'PM';
  }else{
    session.innerHTML = 'AM';
  }
  
  if(hrs > 12){
    hrs = hrs -12;
  }
  

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);

/*Script for calculator */

let calcdisplay = document.getElementById('calcdisplay');

let calcbuttons = Array.from(document.getElementsByClassName('calcbutton'));

calcbuttons.map ( calcbutton => {
    calcbutton.addEventListener('click', (e) => {
        switch(e.target.innerText){
          case "C":
            calcdisplay.innerText = '';
            break;
          case '←':
            if(calcdisplay.innerText){
              calcdisplay.innerText = calcdisplay.innerText.slice(0, -1);

            }
            break;
          case '=':
            try {
              calcdisplay.innerText = eval(calcdisplay.innerText);

            } catch {
                calcdisplay.innerText = 'Error';
            }

            break;
          default:
            calcdisplay.innerText += e.target.innerText;
        }
    });
});