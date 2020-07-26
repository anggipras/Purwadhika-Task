var num = 5

//solve it 16
var a=''
for(i=0;i<num;i++){
    for(j=0;j<i;j++){
        a+='*'
    }
    a+='\n'
}

console.log(a)

//solve it 17
var b=''
for(i=0;i<num;i++){
    for(j=i;j<num;j++){
        b+='*'
    }
    b+='\n'
}

console.log(b)

//solve it 18
var c = ''
for(i=0;i<num;i++){
    for(j=i;j<num;j++){
        c+='*'
    }
    c+='\n'
}
for(i=1;i<num;i++){
    for(j=0;j<=i;j++){
        c+='*'
    }
    c+='\n'
}
console.log(c)

//solve it 19
var d = ''
for(i=0; i<=4; i++) {
    for(j=0;j<=(4-i); j++) {
        d+=' '
    }
    for(k=0;k<=i;k++) {
        d+='*'
    }
    for(k=1;k<=i;k++) {
        d+='*'
    }
    d+='\n'
}
console.log(d)

//solve it 20
var e = ''
for(i=num;i>0;i--) {
    for(j=0;j<(num-i); j++) {
        e+=' '
    }
    for(k=0;k<i;k++) {
        e+='*'
    }
    for(k=1;k<i;k++) {
        e+='*'
    }
    e+='\n'
}
console.log(e)

//solve it 21
var f = ''
for(i=0;i<num;i++) {
    for(j=0;j<(num-i); j++) {
        f+=' '
    }
    for(k=0;k<i;k++) {
        f+='*'
    }
    for(k=1;k<i;k++) {
        f+='*'
    }
    f+='\n'
}
for(i=3;i>0;i--) {
    for(j=0;j<(num-i); j++) {
        f+=' '
    }
    for(k=0;k<i;k++) {
        f+='*'
    }
    for(k=1;k<i;k++) {
        f+='*'
    }
    f+='\n'
}
console.log(f)