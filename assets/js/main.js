jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });

});

/* ======= Language Switcher ======= */
function setLang(lang) {
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.getElementById('btn-' + lang).classList.add('active');

    // Persist preference
    try { localStorage.setItem('cv-lang', lang); } catch(e) {}

    // Toggle visibility of translatable elements
    document.querySelectorAll('[data-lang]').forEach(function(el) {
        el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });
}

// On page load, restore saved language preference (default: EN)
(function() {
    var saved = 'en';
    try { saved = localStorage.getItem('cv-lang') || 'en'; } catch(e) {}
    setLang(saved);
})();
