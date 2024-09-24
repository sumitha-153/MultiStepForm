
const next=document.getElementById('next')
const previous=document.getElementById('previous')

next.addEventListener('click',(e)=>{

    const clgname =document.getElementById("clgname")
    const dep=document.getElementById("dep")
    const year=document.getElementById("year")
    const skills=document.getElementById('skills')
    document.getElementById("clgname").addEventListener('focus', () => {
        document.getElementById("clgerror").style.display = "none";
        document.getElementById("clgname").style.borderColor = '';
    });
    document.getElementById("dep").addEventListener('focus', () => {
        document.getElementById("deperror").style.display = "none";
        document.getElementById("dep").style.borderColor = '';
    });
    document.getElementById("year").addEventListener('focus', () => {
        document.getElementById("yrerror").style.display = "none";
        document.getElementById("year").style.borderColor = '';
    });
    document.getElementById("skills").addEventListener('focus', () => {
        document.getElementById("skillerror").style.display = "none";
        document.getElementById("skills").style.borderColor = '';
    });

    if(clgname.value!=="" && dep.value!=="" && year.value!=="" && skills.value!=="")
    {
        const educational_details={
            CollgeName:"",
            Department:"",
            Year:"",
            Skills:""
        }
        let i=0
        const values=[clgname.value,dep.value,year.value,skills.value]
        for(const key in educational_details){
            educational_details[key]=values[i]
            i++;
        }
        localStorage.setItem("Educational Details",JSON.stringify(educational_details))
        window.location.href='../Contact/contact.html'
        window.history.go(1)
    
    }else{
        e.preventDefault()
        if(clgname.value ===""){
            clgerror.textContent="Field should be empty"
            clgerror.style.display='block' 
            clgname.style.borderWidth='0.5px'
            clgname.style.borderColor='red'        
        }
        if(dep.value === ""){
            deperror.textContent="Select your department"
            deperror.style.display='block'
            dep.style.borderWidth='0.5px'
            dep.style.borderColor='red'
        }
        if(year.value ===""){
            yrerror.textContent="Field should not be empty"
            yrerror.style.display='block'
            year.style.borderWidth='0.5px'
            year.style.borderColor='red'
        }
        if(skills.value ===""){
            skillerror.textContent="Please enter your skills"
            skillerror.style.display='block'
            skills.style.borderColor='red'
            skills.style.borderWidth='0.5px'
        }
    }


    
})

previous.addEventListener('click',(e)=>{
    
    window.location.href='../Personal/personal_details.html'
    window.history.go(-1);

})