
 function validation()
 {
    
	var contactname=document.enq.name.value;
	var name_exp=/^[A-Za-z\s]+$/;
	if(contactname=='')
	{
		swal({   
            title: "Did you enter your name?",   
            type: "error",     
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Let me check",
            allowOutsideClick: true,
            timer: 8000
        });
		document.enq.name.focus();
		return false;
	}
	else if(!contactname.match(name_exp))
	{
		swal({   
            title: "Did you enter your name correctly?",   
            type: "error",     
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Let me check",
            allowOutsideClick: true,
            timer: 8000
        });
		document.enq.name.focus();
		return false;
	}
	
	var email=document.enq.email.value;
	//var email_exp=/^[A-Za-z0-9\.-_\$]+@[A-Za-z]+\.[a-z]{2,4}$/;
	var email_exp=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(email=='')
	{
		swal({   
            title: "Did you enter your email address?",   
            type: "error",     
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Let me check",
            allowOutsideClick: true,
            timer: 8000
        });
		document.enq.email.focus();
		return false;
	}
	else if(!email.match(email_exp))
	{
		swal({   
            title: "Did you enter your email address correctly?",   
            type: "error",     
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Let me check",
            allowOutsideClick: true,
            timer: 8000
        });
		document.enq.email.focus();
		return false;
	}
	
	
	var message=document.enq.message.value;
	if(message=='')
	{
		swal({   
            title: "Did you enter your message?",   
            type: "error",     
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Let me check",
            allowOutsideClick: true,
            timer: 8000
        });
		document.enq.message.focus();
		return false;
	}
    return true;
 }
