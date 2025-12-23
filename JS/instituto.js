$(document).ready(()=>{

    $('#opEspecialidades').on('click', () =>{

        if($('#iconSeta').hasClass('fa-solid fa-sort-up')){
            especialidadesClicada();
        }else{
            especialidadesDesclicada();
        }
        
    });

    $('#iconMenu').on('click', () =>{

        if($('#iconSeta').hasClass('fa-solid fa-sort-down')){
            especialidadesDesclicada();
        }

    });

    function especialidadesClicada(){
        $('#iconSeta').removeClass('fa-solid fa-sort-up');
        $('#iconSeta').addClass('fa-solid fa-sort-down');

        $('#especialidades').toggleClass('disappear');
    }

    function especialidadesDesclicada(){
        $('#iconSeta').removeClass('fa-solid fa-sort-down');
        $('#iconSeta').addClass('fa-solid fa-sort-up');

        $('#especialidades').toggleClass('disappear');
    }

});