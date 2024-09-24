const button_container=document.getElementById('button_container')
    const button=[
        
        {id:"hbtn",icon:"fa-home",text:"Home"},
        {id:"fbtn",icon:"fa-bars",text:"Features"},
        {id:"sbtn",icon:"fa-wrench",text:"Services"},
        {id:"abtn",icon:"fa-info",text:"About us"},
        {id:"stbtn",icon:"fa-gear",text:"Settings"},
        {id:"lbtn",icon:"fa-user",text:"Register",onclick:"Login()"},
        
     ]
     button.forEach(element=>{;
        let button_element=document.createElement('button')
        button_element.id=element.id 
        button_element.innerHTML=`<i class="fa ${element.icon}"></i>${element.text}`
        if(element.onclick){
            button_element.setAttribute('onclick',element.onclick)
        }
        button_container.appendChild(button_element) 
        button_container.appendChild(document.createElement('br'))    
     })

    //  const contactus=document.getElementById("contactus")
    //  const icons=[
    //     {class:"fa fa-linkedin"},{class:"fa fa-envelope"},
    //     {class:"fa fa-instagram"},{class:"fa fa-facebook"},
    //     {class:"fa fa-twitter"}
    //  ]
    //  icons.forEach(element=>{      
    //     let ielement=document.createElement('i')
    //     ielement.className=element.class
    //     contactus.appendChild(ielement)
    //  })


    function Login(){
        window.location.href='../Personal/personal_details.html'
    }
