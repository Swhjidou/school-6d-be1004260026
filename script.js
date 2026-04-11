<script>
    let images = document.querySelectorAll('.galerie img');
    let currentIndex = 0;

    function openModal(Index) {
        currentIndex = index;
        document.getElementById("modal").style.display = "flex";
        updateModal()
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    function changeSlide(n) {
        currentIndex += n;
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
    }

    function updateModal() {
        document.getElementById("modal-img").src = Image[currentIndex].src;
    }
</script>