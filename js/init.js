window.addEventListener('load', function() {
  var pList = document.getElementsByClassName('the-body')[0];

  var fileNames = ['i0.jpg', 'i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg', 'i5.jpg', 'i6.jpg', 'i7.jpg', 'i8.jpg'];

  for(var i=0; i<fileNames.length; i++) {
    var img = document.createElement('div');
    img.classList.add('image');
    img.style.backgroundImage = 'url(../imgs/' + fileNames[i]+ ')';
    pList.appendChild(img);
  }
});
