$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){
        // $('.bxslider').bxSlider({
    //     mode: 'fade',
    //     captions: true,
    //     slideWidth: 600
    //   });
    }
    let globalTheme=localStorage.getItem('theme');
    //console.log("Color del tema global : "+globalTheme);
    $('#theme').attr('href',globalTheme);

    if(window.location.href.indexOf('index') > -1){
        console.log("Estas en index");
        const posts = [
            {
            tittle:"Prueba de titutlo 1",
            date: new Date(),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit vitae culpa molestiae blanditiis exercitationem possimus sequi ipsam distinctio ex minus similique mollitia ea nesciunt, corporis dolorem? Aspernatur, rerum minus"
            },
            {
                tittle:"Prueba de titutlo 2",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit vitae culpa molestiae blanditiis exercitationem possimus sequi ipsam distinctio ex minus similique mollitia ea nesciunt, corporis dolorem? Aspernatur, rerum minus"
            },
            {
                tittle:"Prueba de titutlo 3",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit vitae culpa molestiae blanditiis exercitationem possimus sequi ipsam distinctio ex minus similique mollitia ea nesciunt, corporis dolorem? Aspernatur, rerum minus"
            },
            {
                tittle:"Prueba de titutlo 4",
                date: `Publicado el ${moment().format('DD')} del ${moment().format('MMMM')} del ${moment().format('YYYY')}`,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit vitae culpa molestiae blanditiis exercitationem possimus sequi ipsam distinctio ex minus similique mollitia ea nesciunt, corporis dolorem? Aspernatur, rerum minus"
            },
            {
                tittle:"Prueba de titutlo 5",
                date: moment().format('MMMM DD YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit vitae culpa molestiae blanditiis exercitationem possimus sequi ipsam distinctio ex minus similique mollitia ea nesciunt, corporis dolorem? Aspernatur, rerum minus"
            },
            {
                tittle:"Prueba de titutlo 6",
                date: moment().format('MMMM DD YYYY'),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit vitae culpa molestiae blanditiis exercitationem possimus sequi ipsam distinctio ex minus similique mollitia ea nesciunt, corporis dolorem? Aspernatur, rerum minus"
            }
        ]
        
        posts.forEach((item,index)=>{
            var post=`
                <article class="post">
                    <h2>${item.tittle}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
            `;
            $('#post').append(post);
        });
    }
    let $theme=$('#theme');
    $('#to-blue').click(()=>{
        $theme.attr('href','css/blue.css');
        localStorage.setItem('theme','css/blue.css');
    });
    $('#to-red').click(()=>{
        $theme.attr('href','css/red.css');
        localStorage.setItem('theme','css/red.css');
    });
    $('#to-green').click(()=>{
        $theme.attr('href','css/green.css');
        localStorage.setItem('theme','css/green.css');
    });

    $('#subir').click((e)=>{
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
        return false;
    });
    $('#login form').submit(()=>{
        let form_name = $('#form_name').val();
        localStorage.setItem('userName',form_name);
    });
    let form_name=localStorage.getItem('userName');
    if(form_name != null && form_name != 'undefined'){
        let cerrar=$('.about p');
        $('.about p').html('<br><hr><strong>Bienvenido : '+form_name+'</strong');
        $('#login').hide();
        cerrar.append('<a href="#" id="logout">Cerrar Sesion</a>');
        $('#logout').click(()=>{
            localStorage.clear();
            location.reload();
        });
    }
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(()=>{
            let time=moment().format('h:mm:ss a');
            $('.reloj-content').html(time);
        },1000);
    }
    if(window.location.href.indexOf('contact') > -1){
        $('#main-form').submit((e)=>{
            //e.preventDefault();
        });
        $('form input[name="date"]').datepicker({
            dateFormat:'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition:'top',
            scrollToTopOnError:true
          });
    }
    // if(window.location.href.indexOf('index') > -1){

    // }
});