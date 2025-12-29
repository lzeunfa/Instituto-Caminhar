$(document).ready(()=>{

    //realizacao das apareicoes das especialidades no menu
    $('#opEspecialidades').on('click', () =>{
        $('#especialidades').toggleClass('disappear');
    });

    //atribui a classe disappear ao icone do menu sser clicado
    //para fechar as especialidades
    $('#iconMenu').on('click', () =>{

        if($('#iconSeta').hasClass('fa-solid fa-sort-down')){
            $('#especialidades').addClass('disappear');
        }

    });


    //interacao apra pausar animacao slider avaliacoes
    const $carousel = $('.carousel');
    const $groups = $('.group');
    
    if ($carousel.length && $groups.length) {
        let isPaused = false;
        let isDragging = false;
        
        // Função para pausar
        function pauseAnimation() {
            $groups.css('animation-play-state', 'paused');
            isPaused = true;
        }
        
        // Função para retomar
        function resumeAnimation() {
            if (!isDragging) {
                $groups.css('animation-play-state', 'running');
                isPaused = false;
            }
        }
        
        // Mobile touch
        $carousel.on('touchstart', function() {
            pauseAnimation();
            isDragging = true;
        });
        
        $carousel.on('touchend', function() {
            isDragging = false;
            setTimeout(resumeAnimation, 0);
        });
        
        // Desktop drag
        $carousel.on('mousedown', function() {
            pauseAnimation();
            isDragging = true;
        });
        
        $carousel.on('mouseup', function() {
            isDragging = false;
            setTimeout(resumeAnimation, 0);
        });
        
    };

});