Student_Array = [];

function submit(){

var display_student_array = [];

for (var j = 1; j<= 4; j++){
    var student_name = document.getElementById("name_of_the_student_"+j).value;
    Student_Array.push(student_name);
}
var len = Student_Array.length;

for (var i = 0; i<len; i++){
   display_student_array.push("<h4> name-"+Student_Array[i]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML = display_student_array;
var dispaly_student_array_2 = display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML = dispaly_student_array_2;
document.getElementById("submit_button").style.display = "none";

document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){

    Student_Array.sort();
    var display_student_array = [];
    var len = Student_Array.length;

for (var i = 0; i<len; i++){
   display_student_array.push("<h4> name-"+Student_Array[i]+"</h4>");
}
var dispaly_student_array_2 = display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML = dispaly_student_array_2;
}