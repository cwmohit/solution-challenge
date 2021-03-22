$("#Login").addClass("activeButton")
$('#SignUpForm').css("display","none")

$("#SignUp").click(()=>{
  $('#SignUpForm').css("display","block")
  $('#LoginForm').css("display","none")
  $("#SignUp").addClass("activeButton")
  $("#Login").removeClass("activeButton");
})

$("#Login").click(()=>{
    $('#SignUpForm').css("display","none")
    $('#LoginForm').css("display","block")
    $("#SignUp").removeClass("activeButton")
    $("#Login").addClass("activeButton");
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


const accept = document.getElementById("accept");
const reject = document.getElementById("reject");

accept.addEventListener("click",()=>{
  console.log("Clicked");
  accept.classList.add("acceptIcon");
})
reject.addEventListener("click",()=>{
  accept.classList.add("rejectIcon");
})


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
