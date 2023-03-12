window.onresize = function(event){
  if(document.body.clientWidth > 1330){
    document.querySelector(".blackBox").style.visibility = 'hidden';
    document.querySelector("#menu").style.visibility = 'visible';
  } else if(document.querySelector("#menuIcon").classList.contains('closeIcon')) {
    document.querySelector(".blackBox").style.visibility = 'visible';
  }
}


document.querySelector("#menuIcon").addEventListener('click', function(){
  if(document.querySelector("#menuIcon").classList.contains('closeIcon')){
    document.querySelector("#menuIcon").classList.remove('closeIcon');
    document.querySelector(".blackBox").style.visibility = 'hidden';
    document.querySelector("#menu").style.visibility = 'hidden';
    document.querySelector("#menu").style.right = '-90vw';
  } else {
    document.querySelector("#menuIcon").classList.add('closeIcon');
    document.querySelector(".blackBox").style.visibility = 'visible';
    document.querySelector("#menu").style.visibility = 'visible';
    document.querySelector("#menu").style.right = '0';
  }
});
