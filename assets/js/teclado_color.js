var color;

document.addEventListener("keydown", function(event) {
    if (event.key === 'a'|| event.key === "A") {
        color = "pink";
    } else if (event.key === 's' || event.key === "S") {
        color = "orange";
    } else if (event.key === 'd' || event.key === "D") {
        color = "lightblue";
    }else if(event.key === 'q' || event.key === "Q"){
        color = "purple";
    }else if(event.key === 'w' || event.key === "W"){
        color = "gray";
    }else if(event.key === 'e' || event.key === "E"){
        color = "brown";
    }
    document.getElementById("key").style.backgroundColor = color;
    document.getElementById("segundo").style.backgroundColor = color;
})

