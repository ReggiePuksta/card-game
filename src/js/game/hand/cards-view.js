//TODO REFACTORING this class into HandView without jQuery
var cardsModel = require("cardsModel");
var utils = require("utils");
//Hover cards, Version 3
// Need more fine tuned controll over each card and
// String before appending it to dom
// Create an array of card coordinations
// appending it to DOM

function CardsView(container, cardsFrame) {
    this.$container = container || $(".cards-player-area");
    this.cardsFrame = cardsFrame || "card-frame";
    this.data = cardsModel.getData();
    this.$cardsFrame = {};
    this.width = 30;
    this.cardsCoord = []; // This is where the main string will be hold before
}

CardsView.events = {};
// TODO We will handle DOM events later for now I leave this
// function here
CardsView.prototype.attach = function(el, events) {
    for (var selector in events) {
        if (events.hasOwnProperty(selector)) {
            console.log("Yes");
            var parts = selector.slice(" ", 2);
            var callback = events[i];
            $(el).on(parts[0], parts[1], callback);
        }
    }
};

CardsView.getCardsCoord = function() {
    return this.cardsCoord;
};

/* @param {type} name description */
CardsView.prototype.init = function() {
    this.render(this.width);
    // We can only find cards frame elements after they were attached
    this.$cardsFrame = $("." + this.cardsFrame);
    // cardsCoord = setCardCoord(4);
};

// Cards View coordinates are set on initialization
CardsView.prototype.setCardCoord = function() {
    sectionsNum = this.data.numberOfCards;
    // If all cards combined width is smaller than
    // container, dont overlap cards and dont
    // use card pushing animation
    if (this.width * sectionsNum <= 100) {
        var difference = 100 - (this.width * sectionsNum);
        var marginRight = difference / sectionsNum - 1;
        for (var i = 0; i < sectionsNum - 1; i++) {
            // First one is always 0
            if (i === 0) {
                this.cardsCoord.push(0);
            }
            this.cardsCoord.push(this.width * i + marginRight);
        }
        return this.cardsCoord;
    }
    // How much of overlaping is needed to fit the cards inside
    // container
    // We need to make space for push animation after the last card
    var o = -(100 - (this.width * (sectionsNum + 1))) / (sectionsNum);
    var overlapDistance = this.width - o;
    // if width is specified we align sections according to the width
    for (var j = 0; j < sectionsNum; j++) {
        this.cardsCoord.push(j * overlapDistance);
    }
};

function positionCards() {
    $ul.children().each(function(i, a) {
        $(this).css("left", this.cardsCoord[i] + "%");
    });
}

// @param {Array} cardsCoord Left positions of each card
CardsView.prototype.render = function() {
    // Get 6 card coordinates
    this.setCardCoord();
    // TODO Modular Hover functionality
    var cards = this.data.cardsList;
    var cardHtml = [];
    // Get card placement container div
    // List all cards
    for (var i = 0, n = this.cardsCoord.length; i < n; i++) {
        // cardHtml = [];
        var card = cards[i];
        // build html
        cardHtml.push("<li class='" + this.cardsFrame + "' ",

            'style="left:' + this.cardsCoord[i] + '%;" ',
            "data-pos='" + card.pos + "' ",
            "data-card-id='" + card.cardId + "'>",

            "<div class='card-name'>" + card.name + "</div>",
            "<div class='card-cost'>" + card.cost + "</div>",
            "<div class='card-stats'>" + card.stats + "</div>",
            "<div class='card-stats'>" + card.currentLife + "</div>");
        // How to inject into css the card image??
        cardHtml.push("<div class='card-art' src='" + card.art + "'></div>");
        cardHtml.push("</li>");
    }
    this.$container.append(cardHtml.join(""));
    console.log("Appended");
    this.attach(this.cardsFrame, CardsView.events);
};
moduel.exports = CardsView;
