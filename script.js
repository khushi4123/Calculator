console.log("Hello bebs");
function cal(val)
{
   
    
    let ans = document.getElementById("display");
    ans.style.color='yellow';
    if(val=='AC')
    {
        ans.value='';
    }
    else if(val=='=')
    {
        let a = ans.value;
        ans.value=eval(a);
    }
    else{
        ans.value+=val;
    }
}

