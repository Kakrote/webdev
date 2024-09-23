function cardLorder(image_url,text){
    let html=`<div class="card">
            <div class="image">
                <img src="${image_url}" alt="">
            </div>
            <div class="text"><h1>${text}</h1>
                <p>Anshul Pundir</p>
            </div>

        </div>`

    // document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
    document.querySelector(".container").insertAdjacentHTML("beforeend",html)
}

cardLorder("https://th.bing.com/th/id/OIP.GP_gCsG4AnjZM3cfc1BBOgHaEK?rs=1&pid=ImgDetMain","hi cutee how are you i hope your fine")