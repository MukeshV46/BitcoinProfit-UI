// To Post the User mail and Password
let sub = document.querySelector('.submit');
let form = document.querySelector('.form')

let update = async (e)=>{
    e.preventDefault();
    const doc = {
        Name:form.name.value,
        pass:form.Pass.value,
        mail:form.Mail.value,
        Mob_No:form.Num.value
    }
    await fetch('http://localhost:3000/users',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{'Content-Type':'application/json'}
    })
    .then(()=>
    window.location.replace('About.html'),
    alert('SuccessFully Created'))
}



sub.addEventListener('click',update)