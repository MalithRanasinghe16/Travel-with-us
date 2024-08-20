function changeImage(event) {
    var img1_detail = "2011 – “THE LITTLE MASTER” FINALLY LIFTS THE WORLD CUP.";
    var img2_detail = "Sri lanka wins the world cup in 1996.";
    var img3_detail = "Phillip Hughes dies in an accident while a match in a match November 27, 2014.";
    var img4_detail = "Martin Guptill scores 237 against West Indies Mar 21 2015.";
    var img5_detail = "Mahela jayawardene and Kumar sangakkara retired after playing against Australia at South africa Worldcup quater finals.";

    event = event || window.event;

    var targetElement = event.target || event.srcElement;

    if (targetElement.tagName == "IMG"){

        if(targetElement.id == "image01"){
            document.getElementById("imageDescription").innerText = img1_detail;
            
        }
        if(targetElement.id == "image02"){
            document.getElementById("imageDescription").innerText = img2_detail;
        }
        if(targetElement.id == "image03"){
            document.getElementById("imageDescription").innerText = img3_detail;
        }
        if(targetElement.id == "image04"){
            document.getElementById("imageDescription").innerText = img4_detail;
        }
        if(targetElement.id == "image05"){
            document.getElementById("imageDescription").innerText = img5_detail;
        }
        //alert(targetElement.id);
        document.getElementById("mainView").src = targetElement.getAttribute("src");
    }
}


function checkOptions() {
    var selected_value = document.getElementById("pagecolor_change").value;

    if(selected_value == 2) {
        document.body.style.backgroundColor = "#ff99ff";
    }
    else if(selected_value == 3) {
        document.body.style.backgroundColor = "#ffff66";
    }
    else if(selected_value == 4) {
        document.body.style.backgroundColor = "#b3ecff";
    }
    else if(selected_value == 5) {
        document.body.style.backgroundColor = "#ce99ff";

    }
    else {
        document.body.style.backgroundColor = "#aaff80";
    }
}

function checkTextsize() {
    var selected_text = document.getElementById("textcolor_change").value;
    if(selected_text == 2) {
        document.getElementById("description").style.fontSize = "small";
    }
    else if(selected_text == 3){
        document.getElementById("imageDescription").style.fontSize = "medium";
    }
    else if(selected_text == 4){
        document.getElementById("imageDescription").style.fontSize ="large";
    }
    else if(selected_text == 5){
        document.getElementById("imageDescription").style.fontSize ="x-large";
    }
    else{
        document.getElementById("imageDescription").style.fontSize ="medium";
    }
}