const appState = {
    player: {
        selection: './img/gameOanTuXi/bua.png',
        win: 0,
        lose:0
    },
    option: [{
        rock: {
            imgSrc: './img/gameOanTuXi/bua.png',
        },
        paper:{
            imgSrc:'./img/gameOanTuXi/bao.png'
        },
        scissor:{
            imgSrc:'./img/gameOanTuXi/keo.png'
        }
    }],
    game:{
        totalRound: 0,
        message: "Draw"
    }
};

const appReducer = (state = appState, action)=>{
    switch(action.type){
        case "SELECT_OPTION":{
            console.log(action.option);
            state.player.selection = action.option;
            console.log("newState",{...state})
            return {...state};
        };break;
        case "TEST":{
            state.player.win = action.win + 1;
            return {...state}
        };break;
        default: return {...state};
    }  
};

export default appReducer;