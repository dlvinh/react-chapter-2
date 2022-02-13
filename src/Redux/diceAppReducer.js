
const gameState = {
    player: {
        selection: "NONE",
        playRound: 0,
        win: 0,
        lose: 0,
    },
    dice: [],
    gameResult: {
        result: "TAI"
    }
};

const UpdateGameResut = (totalDice) => {
    if (totalDice >= 3 && totalDice <= 10) {
        return "XIU";
    } else {
        return "TAI";
    }
}


const diceAppReducer = (state = gameState, action) => {
    switch (action.type) {
        case "SELECT_SIDE": {
            console.log(action.selectedSide);
            state.player.selection = action.selectedSide;
            return { ...state };
        };
            break;

        case "START_GAME": {
            if (state.player.selection !== "NONE") {
                let diceList = [];
                let totalValue = 0;
                for (let i = 0; i <= 2; i++) {
                    let diceValue = Math.floor(Math.random() * 6) + 1;
                    totalValue = totalValue + diceValue
                    let newDice = {
                        value: diceValue,
                        imgSrc: "./img/gameXuxXac/" + diceValue + ".png",
                    }
                    diceList.push(newDice);
                }
                // UPDATE DICE OBJECT
                state.dice = diceList;
                console.log(diceList);

                //UPDATE GAME
                state.gameResult.result = UpdateGameResut(totalValue);

                // CHECK WITH PLAYER
                state.player.playRound += 1;
                if (state.gameResult.result === state.player.selection){
                    state.player.win += 1
                }else{
                    state.player.lose += 1 
                }
            }
            return { ...state }
        }; break;

        default: return { ...state };
    }
};

export default diceAppReducer;