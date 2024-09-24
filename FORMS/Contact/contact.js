const submit=document.getElementById('submit')

submit.addEventListener('click',(e)=>{

    const num=document.getElementById('num')
    const email=document.getElementById("email")
    num.addEventListener('focus' ,()=>{
        document.getElementById('numerror').style.display='none'
        num.style.borderColor=''
    })
    email.addEventListener('focus' ,()=>{
        document.getElementById('emailerror').style.display='none'
        email.style.borderColor=''
    })

    if(num.value.length === 10 && email.value!==""){
        const contact_details={
            Number:"",
            Email:"",
        }
        contact_details.Email=email.value
        contact_details.Number=num.value
        localStorage.setItem("Contact details",JSON.stringify(contact_details))
        window.location.href='../Display/display.html'
    }else{
        e.preventDefault()
        if(num.value.length <10 || num.value.length > 10 || num.value ===""){
            numerror.textContent="Enter valid Phone number"
            numerror.style.display='block'
            num.style.borderWidth='0.5px'
            num.style.borderColor='red'
        }
        if(email.value === ""){
            mailerror.textContent="Field should not be empty"
            mailerror.style.display='block'
            email.style.borderWidth='0.5px'
            email.style.borderColor='red'
        }
    }
})

const previouseducation=document.getElementById('previous')

previouseducation.addEventListener('click',(e)=>{
    window.location.href='../Education/education.html'
    window.history.go(-1);
})