define(function(require) {
    // Helper functions
    function getEl(id, ele) {
        return document.getElementById(id);
    }

    function getElClass(ele, name) {
        return ele.getElementsByClassName(name);
    }
    var HandView = function(cardsList, container) {
        // These are individual cards in our hand created by
        // CardsStorage Class
        this.cards = cardsList;
        // Html Element where all the cards in the hand will be placed
        this.container = container || getEl('player-hand') || {};
        // Single card's percentile width inside the hand container
        this.cardWidth = 30;
        // List of cards coordinates for DOM positioning
        // this will change when we add new cards
        this.cardsCoord = [];
    };
    /**
     * Here we only use Hand html Template.
     * Individual Cards Template are used in the Card View.
     * In the hand View we just need to figure out where to place
     * individual card views.
     * @param {array} cardsList Holds information about individual
     * cards and instances of the cardControll which contain cardModel
     * and cardView
     * The individual card was created by the CardFactory class
     * and stored in CardsStorage. The Card Interface used here can be
     * found in CardsStorage.
     *
     * Attach cardsList individual cards to the Hand view DOM
     * we only use this function to build and render our initial 
     * hand of cards. To add new cards we don't need to redraw.
     * We use addCard() to update players hand.
     */
    HandView.prototype.render = function() {
        this.setCardsCoords();
        this.cards.forEach(function(card, i) {
            var position = this.cardsCoord[i];
            var cardRender = card.instance.view.render();
            // Includes card inside our Hand Template
            Template.insertInto('hand', cardRender);
        });
        // TODO we need to attach our chosen template to the DOM
        var html = Template.render('hand');
        // We append our HTML template with all the cards
        this.container.append(html);
    };
    /**
     * Calculate cards position in the hand according to its width
     * and the number of cards in the hand.
     * Before we place a new card in the list we need to reset
     * card Coordinates array.
     */
    HandView.prototype.setCardsCoords = function() {
        var cardsInHand = this.cards.length;
        // If all cards combined width is smaller than
        // container, dont overlap cards and dont
        // use card pushing animation
        if (this.cardWidth * cardsInHand <= 100) {
            var difference = 100 - (this.cardWidth * cardsInHand);
            var marginRight = difference / cardsInHand - 1;
            for (var i = 0; i < cardsInHand - 1; i++) {
                // First one is always 0
                if (i === 0) {
                    this.cardsCoord.push(0);
                }
                this.cardsCoord.push(this.cardWidth * i + marginRight);
            }
            // We return since we dont need to sort overlaping.
            return;
        }
        // How much of overlaping is needed to fit the cards inside
        // container
        // We need to make space for push animation after the last card
        var o = -(100 - (this.cardWidth * (cardsInHand + 1))) / (cardsInHand);
        overlapDistance = this.cardWidth - o;
        // if width is specified we align sections according to the width
        for (var j = 0; j < cardsInHand; j++) {
            this.cardsCoord.push(j * overlapDistance);
        }
    };
    // TODO Change this function into vanilla js
    function positionCards() {
        $ul.children().each(function(i, a) {
            $(this).css("left", this.cardsCoord[i] + "%");
        });
    }
    HandView.prototype.addCard = function(card) {
        this.cards.push(card);
        this.setCardsCoords();
    };
});
