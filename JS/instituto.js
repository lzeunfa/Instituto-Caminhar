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
            $('#especialidades').addClass('disappear');
        }

    });

    function especialidadesClicada(){
        $('#especialidades').toggleClass('disappear');
    }

    function especialidadesDesclicada(){
        $('#especialidades').toggleClass('disappear');
    }

});