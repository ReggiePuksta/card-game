// Triger action Targetting
CardAbilities = {
    Anael: {
        init: [{
            type: 'heal',
            target: ['targeting', 'friendly', 1],
            amount: 'full',
            extra: {
                removeCounter: 'all'
            }
        }],
        repeating: {
            on: 'attack',
            type: 'heal',
            target: ['targeting', 'friendly', 1],
            amount: 'full',
            extra: {
                removeCounter: 'all'

            }
        }
    },
    Forcer: {
        init: [{
                type: 'dmg',
                target: ['creature', 'enemy', '-', 'lane'],
                amount: 1
            },
            {
                type: 'dmg',
                target: ['creature', 'enemy', 'melee'],
                amount: 1
            }
        ]
    },
    Elenore: {
        repeating: {
            on: 'turn',
            type: 'heal',
            target: ['creature', 'friendly'],
            amount: 'full'
        }
    },
    Marksman: {
        repeating: {
            on: 'attack',
            type: 'dmg',
            target: ['creature', 'enemy', 'melee'],
            amount: 2
        }
    },
    Vindicator: {
        repeating: {
            on: 'dmg',
            type: 'special',
            target: ['creature', 'enemy'],
            condition: ['target', {
                'strength': 5
            }],
            amount: 'kill'
        }
    },
    Wolf: {
        repeatin: {
            on: 'always',
            type: 'buff',
            target: ['creature', 'friendly'],
            amount: 2,
            stat: 'agility'
        }
    }
};

