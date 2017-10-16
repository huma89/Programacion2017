var num=0;
var cont=1;

num=prompt("Introduce un numero", "");
num=parseInt(num);

while (num>100 || num<1) {
  num=prompt("Introduce un numero", "");
  num=parseInt(num);
}

while (cont<=10) {
  console.log(cont + "*" + num + "=" + (cont*num));
  cont++;
}
