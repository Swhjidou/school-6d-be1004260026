<script>
 
    const allImages = document.querySelectorAll('.galerie img');
    let currentIndex = 0;

    const modal = document.querySelectorAll("photo-modal");
    const modalImg = document.getElementById("modal-img");

    function openFull(index) {
        currentIndex = index;
        modal.style.display = "flex"; // Pour afficher le model
        modalImg.src = allImages[currentIndex].src // pour charger l'img
    }

    function closeFull() {
        modal.style.display = "none";
    }

    function changeSlide() {
        currentIndex ++;
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
        modalImg.src = allImages[currentIndex].src;
    }

    // Fermer si on clique sur le fond noir
    modal.onclick = function(e) {
        if (e.target === modal) closeFull();        
    }

</script>