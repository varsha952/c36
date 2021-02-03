class Form{
    constructor()
    {
    
    }
    display(){
        var title = createElement('h2')
        title.html("dom")
        title.position(130,0)
        var input = createInput("Name")
        var button = createButton("play")
       var greeting = createElement("h2")
       input.position(200,200)
       button.position(200, 250)
        button.mousePressed(function(){
            input.hide();
            button.hide() 
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello"+name)
            greeting.position(300,300)
            
            
        }

        )
    }

}