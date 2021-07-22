var list=[];
var input1=document.getElementById("input");
        // console.log(input1.value);
var nameList=document.getElementById("nameList");
function getInput(){
     if(input1.value ===""){
        alert("Please Enter the  Name before Submitting");
     }else {
         if(checkRepeat(input1.value)===true){
           input1.value="";
          alert("This Student Name is Already Exist");

         }else{
             list.push(input1.value);
              input1.value="";
               showNames();
     }
    //  console.log(getInput());
}
}
function checkRepeat(inputVal) {
    for (var i = 0; i < list.length; i++) {
        if (inputVal.toLowerCase() === list[i].toLowerCase()) {
            return true;
        }
        
    }
}
function showNames(){
    nameList.innerHTML="";
    list.forEach(function(element,index){
          nameList.innerHTML+=`<li>${element} <span> <button class="btn2" type="submit" onclick="deleteName(${index})">Remove</button></span></li>`;
    })
}
function deleteName(index) {
    list.splice(index, 1);
    showNames();
}