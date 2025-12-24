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

});