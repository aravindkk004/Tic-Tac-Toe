var arr = [];
var started = false;
var player="X";
var clickedId;
var count = 0;
var winner = false;

settingGame();
function settingGame(){
    $(".start").click(function(event){
        $(".restart").addClass("disable")
        $(".start").addClass("startBtn")
        winner = false;
        $(".container p").html('');
        if(!started){
            $("h1").text("X turns");
            started = true;
            startGame();
        }
    })
}


function startGame(){
    $(".box").click(function(){
        if( (player == 'X') && ($(this).text()=='') && (!winner) ){
            count++;
            $("h1").text("O turns");
            $(this).text(player);
            clickedId =  $(this).attr('id');
            arr[clickedId] = player;
            console.log(arr);
            var result = validate(player); 
            player = "O";
        }
        else if( (player == 'O') && ($(this).text()=='') && (!winner) ){
            count++;
            $("h1").text("X turns");
            $(this).text(player);
            clickedId =  $(this).attr('id');
            arr[clickedId] = player;
            console.log(arr);
            var result = validate(player);
            player = "X";
        }
        if((count==9) && (!result)){
            $("h1").text("Match Draws!")
        }
    })
}

function validate(symbol){
    if( (arr[1]===symbol && arr[2]===symbol && arr[3]===symbol) || 
    (arr[4]===symbol && arr[5]===symbol && arr[6]===symbol) || 
    (arr[7]===symbol && arr[8]===symbol && arr[9]===symbol) || 
    (arr[1]===symbol && arr[4]===symbol && arr[7]===symbol) || 
    (arr[2]===symbol && arr[5]===symbol && arr[8]===symbol) || 
    (arr[3]===symbol && arr[6]===symbol && arr[9]===symbol) || 
    (arr[1]===symbol && arr[5]===symbol && arr[9]===symbol) || 
    (arr[3]===symbol && arr[5]===symbol && arr[7]===symbol) )
    {
        $("h1").text(symbol+" wins!!!");
        $("."+symbol).addClass("active");
        winner = true;
        return true;
    }
}


$("button").click( function () {
    $(".X").removeClass("active");
    $(".O").removeClass("active");
    arr = [];
    player = "X";
    $('.box').text('');
    $("h1").text("X turns");
    started = false;
    winner = false;
    count = 0;
    settingGame();
})