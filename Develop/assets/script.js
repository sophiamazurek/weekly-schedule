//Current day and time
var timeArray=['8','9','10','11','12','13','14','15','16','17'];
var currentTime=moment().format("HH");  //double check current time is in military
console.log(currentTime)

//1.create the blocks dynamically
//1.a : add classes
    //update the blocks ... when do we know it is present   
        //timeArray[index] == currentTime
    //when future timeArray[index] currentTime
        ////timeArray[index] > currentTime
    //when past
        ////timeArray[index] < currentTime
//1.b : update millitary  to reg time
    //timeArray[index]==12
        //timeArray[index]+"PM"
    //timeArray[index]<12
        //timeArray[index]+"AM"
    //timeArray[index]>12
        //timeArray[index]-12+"PM"

//2 get user input and store into local storage
//3 get data from local storage

/**
 <div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text">8</span>
    </div>
    <textarea class="form-control" aria-label="With textarea"></textarea>
    <button class="btn btn-outline-secondary" type="button" id="8">Submit</button>
</div>
 */

 function timeBlock(){
     for(var index=0;index <timeArray.length;index++){

     
     //1. create vars
     var d1=$("<div>");
     //<div></div>
     var d2=$("<div>");
     var span1=$("<span>");
     var textarea=$("<textarea>");
     var btn=$("<button>");
     //2. style it
     d1.attr("class","input-group");
     d2.attr("class","input-group-prepend");
     span1.attr("class", "input-group-text");
     span1.text(timeArray[index]);
       //update the blocks ... when do we know it is present   
        //timeArray[index] == currentTime
        if(timeArray[index] == currentTime){
            textarea.attr("class", "present form-control "+timeArray[index]);
        }
    //when future timeArray[index] currentTime
        ////timeArray[index] > currentTime
        else if(timeArray[index] > currentTime){
            textarea.attr("class", "future form-control "+timeArray[index]);
        }
    //when past
        ////timeArray[index] < currentTime
        else{
            textarea.attr("class", "past form-control "+timeArray[index]);
        }
     
     textarea.attr("aria-label", "With textarea");
     btn.attr("class", "btn btn-outline-secondary");
     btn.attr("type", "button");
     btn.attr("id", timeArray[index]);
     btn.text("Submit");

     //3. stick it together (parent child)
     d2.append(span1);
     /*
     <div class="input-group-prepend">
        <span class="input-group-text">8</span>
    </div>
     */

     d1.append(d2);
     d1.append(textarea);
     d1.append(btn);

     //4. stick it to the html page (.container)
     $(".container").append(d1)
     }

     $(".btn").click(function(){
        console.log($(this).attr("id"));
        //set hour to local storage
        //ls hour = userinput
        //userinput ="blah";
        localStorage.setItem($(this).attr("id"), JSON.stringify("blah"));
        
      });

      function getData(){
        console.log(localStorage.getItem("12"));
    
        $(".8").val(localStorage.getItem("8"))
        $(".12").val(localStorage.getItem("12"))
     }
     getData();
 }



 
 timeBlock();
    