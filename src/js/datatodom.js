// You can put building material for the views, but in this case
// we need to do preparations before sending the data to the views.
// We need to do the calculations according to the data so that the views
// wont have to do it.
// Or....
// Create a big fat view...
// Or ...
// Build a small module for connecting model with the view
//
define(["cardmodel"], function(cardModel) {
    var data = [{
            "id": 2,
            "cardId": 11,
            "position": "melee",
            "cost": 1,
            "event": "fast",
            "extra": function() {
                // This functionality going to be added to the card event
            }
        },
        {
            "id": 6,
            "cardId": 25,
            "position": "ranged",
            "cost": 3,
            "event": "none",
            "extra": function() {
                // This functionality going to be added to the card event
            }
        }
    ];
    // We need object as a data
    function DataToDom() {

    }

    DataToDom.prototype.init = function() {
        // We need dota and we need dom
    };

    DataToDom.prototype.build = function() {

    };

    return {};
});
