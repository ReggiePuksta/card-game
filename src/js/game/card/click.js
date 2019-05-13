define(["jquery", "cardsView", "cardsModel", "utils"], function($, CardsView, model, utils) {
    var $allPositions = $(".ranged, .melee, .trap");
    var boardState = {
        ranged: [0, 0, 55, 0],
        melee: [3, 0, 0, 0],
        traps: [0, 0, 0, 0]
    };
    var checkPositions = function() {

    };
    var postCardActivate = function(cardId, positionId) {

    };
    /*
     * Displays available positions for the card on the board
     * acording to its position ID
     */
    var glowAvailablePos = function(posId, boardState) {
        //TODO cache all jquery DOM selections
        switch (posId) {
            case 0:
                // Spells that affect board state
                break;
            case 1:
                $(".ranged").addClass("available-placement");
                // Illuminate divs for ranged position
                break;
            case 2:
                $(".melee").addClass("available-placement");
                // Illuminate divs for melee position
                break;
            case 3:
                $(".ranged, .melee").addClass("available-placement");
                // Both ranged and melee
                break;
            case 4:
                $(".trap").addClass("available-placement");
                // Lane spells like traps and walls
                break;
            default:
        }
    };
    var clearAvailablePos = function() {
        $allPositions.removeClass("available-placement");
    };
    // Placing cards On board
    CardsView.prototype.cardPlacement = function() {
        $allPositions.hover(function() {
            var $this = $(this);
            if ($this.hasClass("available-placement")) {
                $this.css({
                    "box-shadow": "inset 0px 0px 10px 10px rgba(50,90,234,0.5)"
                });
                $this.click(function() {
                    // Take away the card from data Object
                    // Redraw the card inside the clicked box
                    // We need to know which card was selected in the data
                    // Object

                    // Send request to the server that they want to put this
                    // this card in that position
                    // Sever returns the new Card Array and the placed position
                    var cardId = CardsView.activeCardId;
                    var selectedBoardElem = $this.data("boardId");
                    model.removeCard(cardId);
                    // cm.init();
                    // Wait for async responce from the server
                });
            }
        }, function() {
            var $this = $(this);
            $this.css({
                "box-shadow": "none"
            });
        });
    };
    CardsView.prototype.click = function() {
        var $cards = this.$cardsFrame;
        CardsView.selectedCard = {};
        $cards.click(function() {
            var $this = $(this);
            var $parent = $this.parent();
            // TODO Fix double click issue if it was already clicked
            // on the the sibling element
            if ($parent.data("clicked")) {
                $parent.children().css({
                    "background-color": "grey",
                    "box-shadow": "none"
                });
                clearAvailablePos();
                $parent.data("clicked", false);
            } else {
                $parent.data("clicked", true);
                CardsView.activeCardId = $this.data("cardId");
                glowAvailablePos($this.data("pos"));
                $this.css({
                    "background-color": "rgb(210,210,234)",
                    "box-shadow": "inset 0px 0px 10px 10px rgba(50,90,234,0.5)"
                });
            }
        });
    };
});
