var cookiename;
  sss = setTimeout(showcache,8000)
  const mediaQuery = window.matchMedia('(max-width: 600px)')

// Check if the media query is true
  function cookieEval(e){
    e.preventDefault()
    cookiename = document.getElementById('cookieval').value;
    if(cookiename==""){
      document.getElementById('cookieval').placeholder="Please enter your name here...";
    }else{
    localStorage.setItem('name',cookiename);
    let v = localStorage.getItem('name');
    document.getElementById('cookieResult').innerHTML="WELCOME "+v.toUpperCase()+"!<a id='ideval' onclick='showcache2()'> change name?</a><span id='sep'> | </span><a id='idclear' onclick='idclearr()'>Clear</a>";
  }
  
}
  function idevall(){
    document.getElementById('cookieval').value="";
    document.getElementById('cookieResult').innerHTML="";
  }
  function navfunct(){
    if(document.getElementById("navv").checked==false){
      if(document.getElementById("passgen").style.display=="" && document.getElementById("passwordval").style.display==""){
        $("#passwordval").slideUp(200);
        $("#passgen").slideUp(200);

      }
    }
  }
  function idclearr(){
    document.getElementById('cookieResult').innerHTML="<h5 onclick='showcache2()'>Remember next time?</h5>";
    document.getElementById('cookieval').value="";
    localStorage.clear();
  }
  $(document).ready(()=>{
    $("#modalvisitbut").click(()=>{
      if(cookiename != ""){
$("#modalclose").click();
}
    })
  })
  function showcache(){
  if(cookval==null || cookval==""){
  $("#cache").click();
  clearTimeout(sss);

}
}
function showcache2(){
  $("#cache").click();
}
function showww(){
  clearpassgen();
  if(document.getElementById("navv").checked==false){
    $(document).ready(()=>{
      $("#passwordval").slideUp(300);
    })}
  $(document).ready(()=>{
      $("#passgen").slideToggle(300);
    })
}
function showpassval(){
  clearpassval();
  if(document.getElementById("navv").checked==false){
    $(document).ready(()=>{
      $("#passgen").slideUp(300);
    })}
    $(document).ready(()=>{
      $("#passwordval").slideToggle(300);
    })


}
function showlist(){
  if(document.getElementById("containerlist").style.display=="none"){
    document.getElementById("containerlist").style.display="block";
}else{
  document.getElementById("containerlist").style.display="none";
}
}
var textshr=true;
function shrinking(){
  if(textshr==true){
    textshr=false;
  }else{
    textshr=true;
  }return textshr;
}
function answerr1(e){
  e.preventDefault();
  var length = document.getElementById("passlen").value;
  try{
    if(length<8) throw "Too short";
    if(length > 256) throw "Too long!";
    document.getElementById('tippgen').style.display="none";
    document.getElementById('answer1').style.display="block";
    document.getElementById('answer1copy').style.display="block";
  var characters = "";
  if(document.getElementById("smallcaps").checked==true){
    characters+="abcdefghijklmnopqrstuvwxyz";
  }
  if(document.getElementById("bigcaps").checked==true){
    characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(document.getElementById("digits").checked==true){
    characters+="1234567890";
  }
  if(document.getElementById("specialchar").checked==true){
    characters+="@#$%&!";
  }
  if(document.getElementById("aspecialchar").checked==true){
    characters+="\"'()*+,-./:;<=>?[\]^_`{|}~";
  }
  if(characters!=""){
    var approval = false;
    var charactersLength = characters.length;
    var a         = '';
    while(approval!=true){
      a = "";
    for ( var i = 0; i < length; i++ ) {
       a += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
if(document.getElementById("smallcaps").checked==true){
  if(a.match(/[a-z]/g)!=null){
    approval=true;
  }else{
    approval=false;
    continue
  }
  }
  if(document.getElementById("bigcaps").checked==true){
    if(a.match(/[A-Z]/g)!=null){
    approval=true;
  }else{
    approval=false;
    continue
  }
  }
  if(document.getElementById("digits").checked==true){
    if(a.match(/[0-9]/g)!=null){
    approval=true;
  }else{
    approval=false;
    continue
  }
  }
  if(document.getElementById("specialchar").checked==true && document.getElementById("aspecialchar").checked==true){
    if(a.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)!=null){
    approval=true;
  }else{
    approval=false;
    continue
  }
}
  else if(document.getElementById("aspecialchar").checked==true){
    if(a.match(/["'()*+,-./:;<=>?[\]^_`{|}~]/g)!=null){
    approval=true;
  }else{
    approval=false;
    continue
  }
}
  else if(document.getElementById("specialchar").checked==true){
    if(a.match(/[@#$%&]/g)!=null){
    approval=true;
  }else{
    approval=false;
    continue
  }
  }else{
  }
    }

    document.getElementById('answer1').value=a;
    $("#ans1").fadeIn("fast");
    $("#answer1copy").css({"backgroundColor":"black","textAlign":"center"})
  $("#answer1copy").text("Copy")
  if(document.getElementById("autocopy").checked==true){
    copyToClipboard();
  }
  let val = a;
let c = 0;
if(val.match(/[a-z]/g)==null){
  c+=1;
}
if(val.match(/[A-Z]/g)==null){
  c+=1;
}
if(val.match(/[0-9]/g)==null){
c+=1
}
if(val.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)==null){
c+=1;
}
if(c==0){
  $("#valans").text("Strong password")
  $("#valans").css({color:"orange"})
}else{
  $("#valans").text("Weak password")
  $("#valans").css({color:"red"})
}
  }else{
    document.getElementById('tippgen').innerHTML="No boxes checked!";
    document.getElementById('tippgen').style.display="inline";
  document.getElementById('tippgen').style.fontWeight="bolder";
  document.getElementById('ans1').style.display="none";
  }
}catch(err){
  document.getElementById('tippgen').style.display="inline";
  document.getElementById('tippgen').style.fontWeight="bolder";
  document.getElementById('ans1').style.display="none";
  document.getElementById('tippgen').innerHTML=err;
}
}

function answerr2(e){
  e.preventDefault();
var val = document.getElementById('passvalue').value;
try{
    if(val=="") throw "Enter input";
var c = 0;
var text="<strong>"+"Tips: "+"</strong>"+"Include ";
if(val.length<8){
  c+=1;
  text+="more than 8 characters, "
}
if(val.match(/[a-z]/g)==null){
  c+=1;
  text+="lowers-case alphabets, "
}
if(val.match(/[A-Z]/g)==null){
  c+=1;
  text+="upper-case alphabet, "
}
if(val.match(/[0-9]/g)==null){
c+=1
text+="digits, "
}
if(val.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)==null){
c+=1;
text+="special characters, "
}
let textshrink1=shrinking();
if(c==0){
  if(textshrink1==true){
  document.getElementById('answer2').style.fontSize="42px";
  if (mediaQuery.matches) {
  document.getElementById('answer2').style.fontSize="31px";
}
  document.getElementById('answer2').style.background="linear-gradient(to right,green,lightgreen)";
  document.getElementById('answer2').style.webkitBackgroundClip="text";
  document.getElementById('answer2').style.webkitTextFillColor="transparent";
  }else{
    document.getElementById('answer2').style.fontSize="45px";
    if (mediaQuery.matches) {
  document.getElementById('answer2').style.fontSize="34px";
}
  document.getElementById('answer2').style.background="linear-gradient(to right,lightgreen,green)";
  document.getElementById('answer2').style.webkitBackgroundClip="text";
  document.getElementById('answer2').style.webkitTextFillColor="transparent";
  }
  
  document.getElementById('answer2').innerHTML="STRONG PASSWORD";
  document.getElementById('tipp').innerHTML="";
  document.getElementById('tipp').style.display="none";

}else{
  if(textshrink1==true){
    document.getElementById('answer2').style.fontSize="42px";
    if (mediaQuery.matches) {
  document.getElementById('answer2').style.fontSize="31px";
}
  document.getElementById('answer2').style.background="linear-gradient(to right,red,orange)";
  document.getElementById('answer2').style.webkitBackgroundClip="text";
  document.getElementById('answer2').style.webkitTextFillColor="transparent";
  }else{
    document.getElementById('answer2').style.fontSize="45px";
    if (mediaQuery.matches) {
  document.getElementById('answer2').style.fontSize="34px";
}
  document.getElementById('answer2').style.background="linear-gradient(to right,orange,red)";
  document.getElementById('answer2').style.webkitBackgroundClip="text";
  document.getElementById('answer2').style.webkitTextFillColor="transparent";
  }
  
  document.getElementById('tipp').style.display="block";
  document.getElementById('answer2').innerHTML="WEAK PASSWORD";
  document.getElementById('tipp').innerHTML=text.slice(0,-2)+".";
}
}catch(err){
  document.getElementById('answer2').innerHTML="";
  document.getElementById('tipp').style.display="block";
  document.getElementById('tipp').style.fontWeight="bolder";
  document.getElementById('tipp').innerHTML=err+"!";
}
}
function clearpassgen(){
  document.getElementById('answer1').innerHTML="";
  document.getElementById('ans1').style.display='none';
}
function clearpassval(){
  document.getElementById('answer2').innerHTML="";
  document.getElementById('tipp').style.display="none";
  document.getElementById('passvalue').value="";
}
$("document").ready(()=>{
  $("#insta").click(()=>{
    if(confirm("Do you want to visit Zainuddin's insta page?")){
      pass
    }else{
      event.preventDefault();
    }
  })
})
function ans1reset(){
  $("#ans1").fadeOut("fast",()=>{
    document.getElementById('answer1').innerHTML='';document.getElementById('answer1').style.display='none';document.getElementById('answer1copy').style.display='none';document.getElementById('tippgen').style.display='none';
  });
}
function copyToClipboard(e) {
  var copyText = document.getElementById("answer1");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  $("#answer1copy").css({"backgroundColor":"green","textAlign":"center"})
  $("#answer1copy").text("Copied")
}