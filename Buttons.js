function msg()
{  
    myBTN = document.getElementsByClassName("nav_options")
    //alert('Leido');  
    myBTN[0].innerHTML = '<h1>Colecciones</h1><button class="B1" type="button" value="imgs 1" onclick="msg()">Try it</button>\n                    <button class="B2" type="button" value="imgs 2" onclick="msg2()">Click it</button>\n                    <input class="B3" type="button" value="imgs 3" onclick="msg3()">\n\n                '

    myIMG = document.getElementsByClassName("column")
    //alert(myIMG[0].innerHTML);  

    myIMG[0].innerHTML = '\n            <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (11).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (5).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (11).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (3).WEBP">\n                    <figcaption style="color: aliceblue;"><h1>Heading</h1></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (6).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n        '
    myIMG[1].innerHTML = '\n            <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (11).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (5).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (11).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (3).WEBP">\n                    <figcaption style="color: aliceblue;"><h1>Heading</h1></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (6).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n        '

} 

function msg2()
{  
    myBTN = document.getElementsByClassName("nav_options")
    //alert('Leido');  
    myBTN[0].innerHTML = '\n                    <h1>Colecciones</h1>\n                    <button class="B2" type="button" value="imgs 1" onclick="msg()">Try it</button>\n                    <button class="B1" type="button" value="imgs 2" onclick="msg2()">Click it</button>\n                    <input class="B3" type="button" value="imgs 3" onclick="msg3()">\n\n                '


    myIMG = document.getElementsByClassName("column")

    //alert('Leido');

    myIMG[0].innerHTML = '\n            <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (8).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (5).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (11).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (3).WEBP">\n                    <figcaption style="color: aliceblue;"><h1>Heading</h1></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/IMG (6).WEBP">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n        '
}

function msg3()
{  
    alert('Hola mundo');  
}