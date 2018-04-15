const cal = (str) => {
    let strArr = str.split('({d+ N.Q. d+})');
    
    const Q = (a, b) => {
        return a*b - (a+b);
    }
    const N = (a, b) =>{
        a*a +b;
    }
}

cal('2Q(3N4)');