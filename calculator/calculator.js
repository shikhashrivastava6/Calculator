function back(){
  var back = document.forms.textin.value;
  document.forms.textin.value = back.substring(0,back.length-1);
}