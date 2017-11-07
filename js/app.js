window.onload = function(){
  var board = document.querySelector('.board-js');
  /*debugger;*/

board.addEventListener('click',addX);

};

var centinel = true;
function addX(event){
 if (event.target.matches('td')) {
   if (centinel)
      event.target.textContent = 'x';

   else
      event.target.textContent = 'o';

     centinel = !centinel

 }

}
