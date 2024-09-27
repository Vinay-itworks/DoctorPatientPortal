var form = $("#new_doctor");
form.validate({
  rules: {
    "doctor[first_name]": {
      required: true,
      rangelength: [ 3, 15 ]
    },
    "doctor[last_name]": {
      required: true,
      rangelength: [ 3, 15 ]
    },
    "doctor[qualification]":{
      required: true
    },
    "doctor[contact]": {
      digits: true,
      minlength: 10,
      maxlength: 12
    }
    
  },

  messages: {
  "doctor[first_name]": {
    required: " Please enter First Name"
  },
  "doctor[last_name]": {
    required: " Please enter Last Name"
  },
  "doctor[qualification]":{
      required: " Select your Gender"
    },
  "doctor[contact]": {
    digits: " Enter numbers only",
    minlength: " Please enter 10 digits",
    maxlength: " Please enter less 12 digits"
  }
  }
});