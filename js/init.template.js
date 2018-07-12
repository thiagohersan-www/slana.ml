window.addEventListener('load', function() {
  var pList = document.getElementsByClassName('the-body')[0];

  var fileNames = ['___FILES___'];

  for(var i=0; i<fileNames.length; i++) {
    var img = document.createElement('div');
    img.classList.add('image');
    img.style.backgroundImage = 'url(../imgs/' + fileNames[i]+ ')';
    pList.appendChild(img);
  }
});
