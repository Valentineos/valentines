function noButton() {
    const noCat = document.getElementById("noCat");
    const yesCat = document.getElementById("yesCat");
    if (noCat.style.display == "block") {
        noCat.style.display = "none";
    }else if(noCat.style.display == "none") {
        noCat.style.display = "block"
        yesCat.style.display = "none"
    }
}

function yesButton() {
    const noCat = document.getElementById("noCat");
    const yesCat = document.getElementById("yesCat");
    if (yesCat.style.display == "block") {
        yesCat.style.display = "block";
    }else if(yesCat.style.display == "none") {
        yesCat.style.display = "block"
        noCat.style.display = "none";
    }
}
