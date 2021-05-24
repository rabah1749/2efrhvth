studen_array=[];
function submit(){
    var display_array=[];
    for(var i=1;i<=4;i++){
student_name=document.getElementById("name_of_the_student_"+i).value;
studen_array.push(student_name);
    }
    var l=studen_array.length;
    for(var j=0;j<l;j++){
        display_array.push("<h4>Name-"+studen_array[j]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    studen_array.sort();
    var l=studen_array.length;
    var display_array=[];
    for(var j=0;j<l;j++){
        display_array.push("<h4>Name-"+studen_array[j]+"</h4>");
    }
    
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}