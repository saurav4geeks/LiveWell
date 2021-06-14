//emailJs validation
function sendMail(params)
{
    var tempParams={
        name : document.getElementById("name").value,
        age: document.getElementById("age").value
    };
    emailjs.send('service_ljtmwj9','template_5m4j06a','tempParams')
    .then(function(res){
        console.log("Success",res.status);
    }, function(err) {
       console.log('FAILED...', err);
})
}
//form validation
function validation(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var error = document.getElementById("error").value;
    var answer = document.getElementById("answer").value;


    error.style.padding = "10px";

  var text;
  if(name.length < 4){
    text = "Please Enter a valid Name";
    error.innerHTML = text;
    return false;
  }
  if(age < 10 || age > 100 || isNaN(age)){
    text = "You are not eligible";
    error.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error.innerHTML = text;
    return false;
  }
  if(address.length <= 10){
    text = "Please Enter More Than 40 Characters";
    error.innerHTML = text;
    return false;
  }
 
  alert("Form Submitted Successfully!");
  return true;
}
//end
