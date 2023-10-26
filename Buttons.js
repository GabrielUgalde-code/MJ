function btnPinturas()
{  
    myBTN = document.getElementsByClassName("nav_options")
    //alert('Leido');  
    myBTN[0].innerHTML = '<h1>Colecciones</h1>\n                    <button class="B1" type="button" value="imgs 1" onclick="btnPinturas()">Pinturas</button>\n                    <button class="B2" type="button" value="imgs 2" onclick="btnBodyPaint()">BodyPaint</button>\n'

    myIMG = document.getElementsByClassName("column")
    //alert(myIMG[0].innerHTML);  

    myIMG[0].innerHTML = '\n            <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (11).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (5).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (11).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (3).webp">\n                    <figcaption style="color: aliceblue;"><h1>Heading</h1></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (6).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n        '
    //myIMG[1].innerHTML = '\n            <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (11).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (5).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (11).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (3).webp">\n                    <figcaption style="color: aliceblue;"><h1>Heading</h1></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (6).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n        '

} 

function btnBodyPaint()
{  
    myBTN = document.getElementsByClassName("nav_options")
    //alert('Leido');  
    myBTN[0].innerHTML = '<h1>Colecciones</h1>\n                    <button class="B2" type="button" value="imgs 1" onclick="btnPinturas()">Pinturas</button>\n                    <button class="B1" type="button" value="imgs 2" onclick="btnBodyPaint()">BodyPaint</button>\n'


    myIMG = document.getElementsByClassName("column")

    //alert('Leido');

    myIMG[0].innerHTML = '\n            <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (8).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (1).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (9).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (7).webp">\n                    <figcaption style="color: aliceblue;"><h1>Heading</h1></figcaption>\n                </figure>\n             </div>\n             <div class="gallery">\n                <figure class="card">\n                    <img src="img/photo (5).webp">\n                    <figcaption style="color: aliceblue;"><h2>Heading</h2></figcaption>\n                </figure>\n             </div>\n        '
}