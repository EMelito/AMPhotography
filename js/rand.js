var mess = new Array('../images/10031164414_0093b56b98_o.jpg','../images/6927641164_0d2f322f9c_o.jpg','../images/8162396101_e16e8d44e0_o.jpg','../images/9454494560_3c514b84e3_o.jpg','../images/IMG_6565-001.JPG','../images/IMG_6711-001.JPG','../images/IMG_7250.JPG','../images/IMG_7093.JPG','../images/IMG_7147-001.JPG','../images/IMG_7167.JPG','../images/IMG_7208.JPG', '../images/9352583674_29a0ea7a2e_o.jpg');
var max = mess.length;
var num = Math.floor((Math.random() * max));
// document.writeln(mess[num]);

document.getElementById('randomImage').style.backgroundImage = "url("+mess[num]+")";
