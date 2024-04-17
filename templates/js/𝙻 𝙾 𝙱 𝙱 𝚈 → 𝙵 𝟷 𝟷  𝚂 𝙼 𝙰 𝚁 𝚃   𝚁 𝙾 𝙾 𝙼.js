        // Function to redirect to the index.html page
        function redirectToIndex() {
            window.location.href = "index.html";
        }
  
        // Show/hide scroll to top button based on scroll position
        window.onscroll = function() {
            var scrollToTopBtn = document.getElementById("scroll-to-top");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };