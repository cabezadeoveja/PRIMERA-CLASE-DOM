function add(){
//Almacenando valor
	var comments = document.getElementById("comment").value;
	//porque estoy rescatando ese valor(lo que va a escribir el usuario).
    document.getElementById("comment").value ="";
    //lo igualo a un elemento vacio para que lo limpie del text area al momento de enviar.
    var newComments = document.createElement('div');
    var cont = document.getElementById('cont');

    var check = document.createElement('input');
    check.type = "checkbox";
    //Input de tipo Checkbox

    var paragraph = document.createElement('p');
    paragraph.classList.add ('color');
    //crear una etiqueta P con una clase. P tiene un hijo que es un nodo de texto.
    //vamos a crear un nodo de texto.
    var nodoText = document.createTextNode(comments);
    //texto (P) es el papá y comments (nodo de texto) el hijo.
    paragraph.appendChild(nodoText);

    var heart = document.createElement('i');
    // creo el elemento i que será el icono del corazon.
    heart.classList.add('fa', 'fa-heart', 'heart'); 
    // ('fa, 'fa-heart', 'heart')  clases del corazón

    var trash = document.createElement('i');
    // creo el elemento i que será el icono del basurero.
    trash.classList.add('fa', 'fa-trash', 'trash');
    //('fa', 'fa-trash', 'trash') clases del tarro de basura

    //vamos de adentro hacia afuera, creamos elementos suelos, el P, nodos
    //y luego todo se appendea al papá newComments. Check.Trash.Heart.Paragraph aca no van con comillas porque son variables.

    newComments.appendChild(check);
    newComments.appendChild(trash);
    newComments.appendChild(heart);
    newComments.appendChild(paragraph);
    
    //newComments también tiene un papá que es Cont
    //<div id="cont"></div> cont es el papá papá papá supremo. 

    cont.appendChild(newComments);

    check.addEventListener("click", function(){
        paragraph.classList.toggle("strike-out");

    })
    //check.addEventListener("click", function(){ para que cuando hagamos click en check "pase algo", tiene 2 parametros (click y una funcion anonima)
    //togle insertar y remover por ejemplo que cuando haga click lo ralle o se ponga de color rojo.


    //como eliminar algo; remover algo: En trash le voy a hacer click y el evento addEventListener me va a escuchar para que se ejecute.
    trash.addEventListener("click", function(){
        cont.removeChild(newComments);
    })

    heart.addEventListener("click", function(){
        heart.classList.toggle("red");
    })
}
