function screensize() {
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)
}
function back(){
    document.getElementById("body").style.backgroundImage = 'url(images/Picsart_22-09-03_01-23-33-162.jpg)'
    document.getElementById("start").style.visibility = "visible"
    document.getElementById("back").style.visibility = "hidden"
    document.getElementById("last-score").style.visibility = "hidden"
    document.getElementById("gameover").style.visibility = "hidden"
}
function startGame(){
    var score = 0
    var time = 60
    var altura = 0
    var largura = 0
    document.getElementById("score").style.visibility = "visible"
    document.getElementById("last-score").style.visibility = "hidden"
    document.body.backgroundImage = 'images/background.png'
    document.body.style.backgroundImage = 'url(images/background.png)'
    document.getElementById("panel").style.visibility = "visible"
    document.getElementById("start").style.visibility = "hidden"
    
    var cronometer = setInterval(function(){
        time -= 1
        document.getElementById('cronometer').innerHTML = time
    }, 1000)
    var rndPos = setInterval(function(){
        randomPosition()
    }, 850)
    function screensize() {
        largura = window.innerWidth
        altura = window.innerHeight
        console.log(largura, altura)
    }
    screensize()
    
    function randomPosition(){
        if(document.getElementById('puffle')){
            document.getElementById('puffle').remove()
        }
        if(time === 0){
            document.getElementById("last-score").style.visibility = "visible"
            document.getElementById("score").style.visibility = "hidden"
            document.getElementById("panel").style.visibility = "hidden"
            document.getElementById("body").style.backgroundImage = 'url(images/background.png)'
            document.getElementById("gameover").style.visibility = "visible"
            document.getElementById("back").style.visibility = "visible"
            time = ''
            document.getElementById('cronometer').innerHTML = time
            clearInterval(rndPos)
            clearInterval(cronometer)
            puffle.src = ''
        }
        var PosiçãoX = Math.floor(Math.random() * largura) - 150
        var PosiçãoY = Math.floor(Math.random() * altura) - 120
        
        PosiçãoX = PosiçãoX < 0 ? 0 : PosiçãoX
        PosiçãoY = PosiçãoY < 0 ? 0 : PosiçãoY
        
        console.log(PosiçãoX, PosiçãoY)
        
        var puffle = document.createElement('img')
        puffle.src = randompuffle()
        puffle.className = randomsize()
        puffle.style.left = PosiçãoX + 'px'
        puffle.style.top = PosiçãoY + 'px'
        puffle.style.position = 'absolute'
        document.body.appendChild(puffle)
        puffle.id = 'puffle'
        puffle.onclick = function() {
        this.remove()
        score ++
        document.getElementById('score').innerHTML = 'pontuação: ' + score
        document.getElementById('last-score').innerHTML = 'Sua pontuação foi: ' + score
    }
    
    
    function randomsize(){
        var puffleClass = Math.floor(Math.random() * 3)
        switch(puffleClass){
            case 0:
            return 'puffle1'
            case 1:
            return 'puffle2'
            case 2:
            return 'puffle3'
        }
    }
    function randompuffle(){
        var skinPuffle = Math.floor(Math.random() * 4)
        console.log(skinPuffle)
        switch(skinPuffle){
            case 0:
            return 'images/puffleblue.png'
            case 1:
            return 'images/pufflegold.png'
            case 2:
            return 'images/pufflered.png'
            case 3:
            return 'images/pufflerainbow.png'
        }
    }
    
}
}    
