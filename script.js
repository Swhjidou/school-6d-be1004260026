
<script>
 
        const allImages = document.querySelectorAll('.galerie img');
        let currentIndex = 0;

        const modal = document.getElementById("photo-modal");
        const modalImg = document.getElementById("modal-img");

        function openModal(index) {
            currentIndex = index;
            modal.style.display = "flex"; // Pour afficher le model
            modalImg.src = allImages[currentIndex].src // pour charger l'img
        }

        function closeModal() {
            modal.style.display = "none";
        }

        function changeSlide(n) {
            currentIndex +=n;
            if (currentIndex >= allImages.length) currentIndex = 0;
            if (currentIndex < 0) currentIndex = allImages.length - 1;
            modalImg.src = allImages[currentIndex].src;
        }

        // Fermer si on clique sur le fond noir
        modal.onclick = function(e) {
            if (e.target === modal) closeModal();        
        }

</script>