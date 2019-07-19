var turn = 2;
function name() {
    setTimeout(function() {
        console.log('Hello');
      return 1;
    }.bind(this), 3000);
}
var i = 0;
while (turn == 2 || turn === undefined) {
    i++;
    turn = name();
    console.log(turn);
    if (i>10) {
        break;
    }
}
function fullTurn(done) {
    myTurn(function() {
        enemyTurn(function() {
            fullTurn();
        });
    })
}
function myTurn() {
    Notification.on('EndGame', function() {

    })
    Notification.on('EndTurn', function() {

    })
}
function enemyTurn() {

}