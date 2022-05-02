let Log = document.querySelector('.Login')
let Regform = document.querySelector('.Regform');


let check = async (e)=>{
    e.preventDefault();
    let mail=Regform.Email.value;
    let passs =Regform.Epass.value;
    // let flag =undefined;
    await fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((arr)=>{
        // Validation 
        let succ= false;        
        for(i=0;i<arr.length;i++){  
            // console.log(arr[i].mail);
            if(mail===arr[i].mail&&passs===arr[i].pass){
                succ = true 
                break    
            }
            else{
                succ=false;
            }
        }
        if(succ){
            console.log('Login Success');
            window.location.replace('contact.html')
        }
        else{
            alert('Login Failed');
        }
    })
}

Log.addEventListener('click',check);
  