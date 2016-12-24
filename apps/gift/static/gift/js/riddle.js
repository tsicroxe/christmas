

$(document).ready(function(){
  console.log('ready!')

  count = 0;
  // console.log(x);

  document.onkeydown = function (e) {

    count++;
    function reset() {
      document.getElementById('capture').className = 'capture'
      document.getElementById('title').innerHTML = "Enter THE code:"
      passcode.innerHTML = ''
      count = 0;
    }
    function success(){
      $.ajax({
        type: 'GET',
        url: '/konami',
        success: function(){
        window.location.href='https://omescape.us/richmond/'
        }
      })
    }

    passcode = document.getElementById('passcode');


      e = e || window.event;
      console.log(e.code, e.keyCode);
      console.log(e, e, e)

      if(e.keyCode === 37){
        passcode.innerHTML = passcode.innerHTML + 'Left';
      }
      else if(e.keyCode === 38){
        passcode.innerHTML = passcode.innerHTML + 'Up';
        console.log('Up was pressed')
      }
      else if(e.keyCode === 39){
        passcode.innerHTML = passcode.innerHTML + 'Right';
      }
      else if(e.keyCode === 40){
        passcode.innerHTML = passcode.innerHTML + 'Down';
      }
      else{
        passcode.innerHTML = passcode.innerHTML + String.fromCharCode(e.keyCode);
      }
      // use e.keyCode

      if(passcode.innerHTML === 'ATNAS'){
        console.log("Passcode accepted")
        document.getElementById('title').innerHTML= ''
        document.getElementById('title').innerHTML= ''
        document.getElementById('capture').className = 'success'
        passcode.innerHTML = 'PASSCODE ACCEPTED'

        setTimeout(success, 3000);
      }
      if(count > 5){
        document.getElementById('capture').className = 'invalid'
        document.getElementById('title').innerHTML = '*** INVALID PASSCODE ***'
        // passcode.innerHTML = '*** INVALID PASSCODE ***'
        setTimeout(reset, 3000)
      }
      console.log(count);
      String.fromCharCode(e.keyCode);

      console.log(passcode.innerHTML);

  };
});
