




var textarea = document.querySelector("textarea");
var para=document.getElementById("para");


textarea.addEventListener("input", function(){
    var maxlength = this.getAttribute("maxlength");
    var currentLength = this.value.length;

    if( currentLength >= maxlength ){
        para.innerHTML="You have reached the maximum number of characters."
        para.style="border: 0;font-size: 17px;width: 428px;font-weight: 400;margin-left: 355px;color: #dc3545;"
    }else{
        para.innerHTML= maxlength - currentLength + "<span>chars left</span>";//48
         para.style="border: 2px solid gray;padding: 8px;font-size: 25px;width: 168px;text-align: center;font-weight: 600;margin-left: 608px;margin-top: 7px;height: 56px;padding-top: 7px;color: #28a745;"
    }
});