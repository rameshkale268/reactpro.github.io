const num1=40;
const num2=3;
function Calculator(){
    return (
    <>
    <ol className="heading">
        <li >Addition of Two number : {add(num1,num2)}</li>
        <li>subtraction of Two number : {sub(num1,num2)}</li>
        <li>multiplicatiion of Two number : {mul(num1,num2)}</li>
        <li>Division of Two number : {div(num1,num2)}</li>
    </ol>
     
     </>   );  

     
     function add(a, b){return a+b};
     function sub(a, b){return a-b};
     function mul(a, b){return a*b};
     function div(a, b){return (a/b).toFixed(2)};
}
export default Calculator;