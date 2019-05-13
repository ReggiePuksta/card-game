// Hover functionality
define(["cardsView","jquery", "utils"], function(CardsView, $, utils) {
    CardsView.prototype.hoverAnimation = function(obj) {
        //TODO We dont need jQuery here. Have to rewrite this into
        // vanilla js
        var coordArray = this.cardsCoord;
        this.$cardsFrame.hover(function() {
            var $this = $(this);
            var nextAll = $this.nextAll();
            var prevAll = $this.prevAll();
            var listItem, left;
            $this.css({
                "transform": "scale(1.1)",
                "z-index": 99999
            });
            nextAll.css({
                "transform": "translate(20%, 0)",
            });
            // Z-index is inversed for all cards after the hovered card.
            // This makes last card on the right to be behind other cards.
            for (var i = nextAll.length - 1, j = 0; i >= 0; i--, j++) {
                $nextAll = $(nextAll[j]);
                $nextAll.css({
                    "z-index": i
                });
            }
        }, function() {
            var $this = $(this);
            var nextAll = $this.nextAll();
            var prevAll = $this.prevAll();
            $this.css({
                "transform": "scale(1)",
                "z-index": 0
            });
            nextAll.css("transform", "translate(0, 0)");
            $this.siblings().css({
                "z-index": 0
            });
        });
    };
});
