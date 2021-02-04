/**
 * JS - Aula9: Simples Slide Show
 */

 var intervalo = 3000;

 function slide1() {
     document.getElementById("banner").src="Img/banner1.jpg";
     setTimeout("slide2()",intervalo);
 }

 function slide2() {
     document.getElementById("banner").src="Img/banner2.jpg";
     setTimeout("slide3()",intervalo);
 }

 function slide3() {
     document.getElementById("banner").src="Img/banner3.jpg";
     setTimeout("slide1()",intervalo);
 }