$(document).ready(function() {
    // Wait for the data to load
    setTimeout(function() {
        // If data was loaded
        if($('.movie').length) {
            // Initially select the first loaded movie
            $('.movie:nth-child(1)').addClass('selected');

            // Selection of movie with mouse on hover
            // works only after the elements are loaded
            $('.movie').on('mouseenter', function() {
                $('.movie.selected').removeClass('selected');
                $(this).addClass('selected');
            })
            $('.movie').on('mouseleave', function() {
                $(this).removeClass('selected');
            })
        }
    }, 1000);

    // Selection of movie using navigation keys from keyboard (TV buttons)
    $(document).keydown(function(e) {
        switch(e.which) {
            // Right key
            case 37: {
                current_index = $('.movie.selected').index();

                if(current_index > 0) {
                    $('.movie.selected').removeClass('selected');
                    $('.movie').eq(current_index-1).addClass('selected');
                }
            }
            break;
    
            // Up key
            case 38: {
                current_index = $('.movie.selected').index();
                
                if(current_index > 3) {
                    $('.movie.selected').removeClass('selected');
                    $('.movie').eq(current_index-4).addClass('selected');
                }
            }
            break;
    
            // Left key
            case 39: {
                current_index = $('.movie.selected').index();
                
                if(current_index < $('.movie').length-1) {
                    $('.movie.selected').removeClass('selected');
                    $('.movie').eq(current_index+1).addClass('selected');
                }
            }
            break;
    
            // Up key
            case 40: {
                current_index = $('.movie.selected').index();
                
                if(current_index < $('.movie').length-4) {
                    $('.movie.selected').removeClass('selected');
                    $('.movie').eq(current_index+4).addClass('selected');
                }
            }
            break;

            // Enter key
            case 13: {
                $('.movie.selected a img').trigger('click');
            }
            break;

            // Back key
            case 8: {
                // To be implemented
            }
            break;
    
            default: return;
        }
        e.preventDefault();
    });
});