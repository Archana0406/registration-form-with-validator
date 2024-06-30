$("document").ready(function(){
    $.validator.setDefaults({
        submitHandler:function(){
            alert("Submitted");
        }
    });
    $('#frm').validate({
        rules:{
            // this should have name
            name:"required",
            dob:{
                required:true,
                date:true
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8,
            },
            cpass:{
                required:true,
                minlength:8,
                equalTo:"#pass"
            },
            cnum:{
                required:true,
                digits:true,
                maxlength:10,
                minlength:10
            }
        },
        messages:{
            name:"*Please Enter Your Name ",
            dob:{
                required:"*Please Enter Your Date of Birth",
                date:"*Please Enter Correct Date Format"
            },
            email:{
                required:"*Please Enter Your E-mail Address",
                email:"*Please Enter The Valid E-mail Address"
            },
            password:{
                required:"*Please Enter Your Password",
                minlength:"*Password Length  Must be 8"
            },
            cpass:{
                required:"*Please Enter Confirm Password",
                minlength:"*Password Length  Must be 8",
                equalTo:"Password Mismatching"
            },
            cnum:{
                required:"*Please Enter Your Contact Number",
                digits:"*Contact Number Must Be Numeric",
                minlength:"*Contact No Length  Must be 10",
                maxlength:"*Contact No Length  Must be 10"
            }
        }
    });
});