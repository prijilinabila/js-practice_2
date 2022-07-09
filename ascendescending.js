var x=204;
var y=524;
var z=320;
console.log('x=',x);
console.log('y=',y);
console.log('z=',z);
console.log('given order=',x,y,z);
console.log('ascending order is');
if(x>y && x>z && y>z){
    console.log(z,y,x)
}
else if(x>y && x>z && z>y){
    console.log(y,z,x)
}
else if(y>x && y>z && z>x){
    console.log(x,z,y)
}
else if(y>x && y>z && x>z){
    console.log(z,x,y)
}
else if(z>x && z>y && x>y){
    console.log(y,x,z)
}
else if(z>x && z>y && y>x){
    console.log(x,y,z)
}
console.log('descending order is');
if(x<y && x<z && y<z){
    console.log(z,y,x)
}
else if(x<y && x<z && z<y){
    console.log(y,z,x)
}
else if(y<x && y<z && z<x){
    console.log(x,z,y)
}
else if(y<x && y<z && x<z){
    console.log(z,x,y)
}
else if(z<x && z<y && x<y){
    console.log(y,x,z)
}
else if(z<x && z<y && y<x){
    console.log(x,y,z)
}