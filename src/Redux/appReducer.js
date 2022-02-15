const options = [
    {
        id: 0,
        imgSrc: './img/gameOanTuXi/bua.png'
    },
    {
        id:1,
        imgSrc:'./img/gameOanTuXi/bao.png'
    },
    {
        id:2,
        imgSrc:'./img/gameOanTuXi/keo.png'
    }
];
const appState = {
    player: {
        option:{
            id: 0,
            imgSrc:'./img/gameOanTuXi/bua.png',
        },
        win: 0,
        lose:0
    },
    npc:{
            id: 0,
            imgSrc:'./img/gameOanTuXi/bua.png',
    },
    game:{
        totalRound: 0,
        message: "Draw"
    }
};

const checkGameLogic = (playerSelection, npcSelection)=>{
    switch(playerSelection.option.id){ 
        case 0:{ // 0: ROCK 1:PAPER 2: SCISSOR
            if (npcSelection.id === 1){ 
                return false;// false == lose
            }else{
                return true;
            }
        };
        case 1: {
            if (npcSelection.id == 0){
                return true;
            }else{
                return false;
            }
        };
        case 2:{
            if (npcSelection.id == 1){
                return true;
            }else{
                return false;
            }
        }
        default: return "DRAW";
    }
}
const appReducer = (state = appState, action)=>{
    switch(action.type) {
        case "SELECT_OPTION":{
            let clonePlayer= {...state.player};
            let index = options.findIndex(option => option.imgSrc === action.option);
            // console.log("state.options",options[index])
            clonePlayer.option = options[index];
            state.player = clonePlayer;
            // state.player.selection = action.option;
            // console.log("newState",{...state})
            return {...state};
        };
        case "RANDOM":{
            let cloneState = {...state}
            let random = Math.floor(Math.random() * 3); 
            cloneState.npc = options[random];
            state = cloneState; 
            return {...state}
        };
        case "PLAY_GAME":{
            let cloneState = {...state}
            cloneState.game.totalRound += 1;
            // console.log("newState",{...state})
            if (state.player.option.id === cloneState.npc.id){
                cloneState.game.message = "Draw";
            }else{
                let result = checkGameLogic(state.player, cloneState.npc);
                console.log(result);
                if (result){
                    cloneState.player.win += 1; 
                    cloneState.game.message = "Congrat! You win"
                }else{
                    cloneState.game.message = "Ahh! You lose"
                }
            }
            state = cloneState; 
            return {...state}
        };
        default: return {...state};
    }  
};

export default appReducer;