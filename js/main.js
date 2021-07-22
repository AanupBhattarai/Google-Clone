const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    } 
});


function search(){
    const input = searchInput.value;

    window.location.href = "http://www.google.com/search?q=" + input
}

document.getElementById("googlesearchBtn").onclick = function () {
     const input = searchInput.value;
    
     window.location.href = "http://www.google.com/search?q=" + input
    };

document.getElementById("search-icon").onclick = function () {
     const input = searchInput.value;
    
     window.location.href = "http://www.google.com/search?q=" + input
    };
