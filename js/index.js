(function(){
    const onActive = document.querySelectorAll(".ea");

    onActive.forEach(function(element){
        element.addEventListener("click", onActiveHandle);
    });

    function onActiveHandle() {
        this.classList.toggle('active');
    }
})();