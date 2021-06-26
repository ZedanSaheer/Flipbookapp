// navbar function
function myFunction() {
    const hmenu = document.querySelector(".navlinks");
    hmenu.classList.toggle("responsive")
}

//file input
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
    console.log(realFileBtn.files);
});


//button click loading
const button = document.getElementById("button");
const loading = document.getElementById("wrapperloading");
button.addEventListener("click", activeLoad);


function activeLoad() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
        loading.classList.toggle("loadingactive")
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
        alert("No Document Added!")
    }
    
}
