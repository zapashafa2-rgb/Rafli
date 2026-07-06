function gantiTema(){

    document.body.classList.toggle("dark");

    const tombol = document.getElementById("tema");

    if(document.body.classList.contains("dark")){
        tombol.innerHTML = "☀️";
    }else{
        tombol.innerHTML = "🌙";
    }

}
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }

    });
});

hiddenElements.forEach(element => {
    observer.observe(element);
});