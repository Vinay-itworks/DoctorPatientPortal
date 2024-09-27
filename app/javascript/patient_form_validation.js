$.validator.addMethod('checkgender', function(value) {
  boolean = false
  var genders = ["Male", "Female", "Other"];
  for(var i in genders)
  {
    if (value == genders[i]) { boolean = true }
  } 
  return boolean;
});
var form = $(".new_patient");
form.validate({
  rules: {
    "patient[first_name]": {
      required: true,
      rangelength: [ 3, 15 ]
    },
    "patient[last_name]": {
      required: true,
      rangelength: [ 3, 15 ]
    },
    "patient[gender]":{
      required: true,
      checkgender: true
    },
    "patient[age]": {
      digits: true
    },
    "patient[contact]": {
      digits: true,
      minlength: 10,
      maxlength: 12
    }
    
  },

  messages: {
  "patient[first_name]": {
    required: " Please enter First Name"
  },
  "patient[last_name]": {
    required: " Please enter Last Name"
  },
  "patient[gender]":{
      required: " Select your Gender",
      checkgender: " Select one of the values"
    },
  "patient[age]": {
    digits: " Age must be a digit"
  },
  "patient[contact]": {
    digits: " Enter numbers only",
    minlength: " Please enter 10 digits",
    maxlength: " Please enter less 12 digits"
  }
  }
});