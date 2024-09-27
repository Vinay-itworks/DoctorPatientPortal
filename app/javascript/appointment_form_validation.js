$(document).ready(function() {
  $('.js-example-basic-single').select2();
});

$.validator.addMethod('checkstatus', function(value) {
  boolean = false
  var statuses = ["Pending", "Visited", "NoVisit"];
  for(var i in statuses)
  {
    if (value == statuses[i]) { boolean = true }
  } 
  return boolean;
});

var form = $("#new_appointment");
form.validate({
  rules: {
    "appointment[doctor_id]": {
      required: true,
      digits: true
    },
    "appointment[patient_id]": {
      required: true,
      digits: true
    },
    "appointment[appointment_date]":{
      date: true
    },
    "appointment[status]": {
      required: true,
      checkstatus: true
    }
    
  },

  messages: {
  "appointment[doctor_id]": {
    required: " Give proper id for doctor"
  },
  "appointment[last_name]": {
    required: " Give proper id for patient"
  },
  "appointment[appointment_date]":{
      date: " Give proper date"
    },
  "appointment[status]": {
    required: true,
    checkstatus: "Select one of the values"
  }
  }
});