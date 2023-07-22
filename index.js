document.onmousemove = function(event){
    var x = (window.innerWidth / 2 - event.x);
    var y = (window.innerHeight / 2 - event.y);
    console.log(x + " " + y);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    document.querySelector('.gradient-button').style.transform = 'rotate3d('+y+', '+x+',  0, 50deg)';
   
}

  
 /* document.onmousemove = function(event) {
    var x = (window.innerWidth / 2 - event.x) / 10;
    var y = (window.innerHeight / 2 - event.y) / 10;
    console.log(x + " " + y);
    document.querySelector('.gradient-button').style.transform = 'rotateX('+y+' deg) rotateY('+x+'deg)';
};*/
