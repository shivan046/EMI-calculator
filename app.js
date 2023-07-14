function emi(){
    let p=document.getElementById('p').value;
    let r=document.getElementById('r').value;
    let n=document.getElementById('n').value;
    let s=r/12;
    let a=s/100;
    let t=n*12;
    let x=Math.pow((1+a),t);
    let y=x-1;
    let emi=p*a*(x/y);
    document.getElementById('result').innerText=emi.toFixed(2);
}