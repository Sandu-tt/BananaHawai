import {MainMenu} from "./scenes/MainMenu.js";
import {Login} from "./scenes/Login.js"
import {SignIn} from "./scenes/SignIn.js";
import {InGameUI} from "./scenes/GameView.js";
import {Leaderboard} from "./scenes/LeaderBoard.js";

const speedDown=300;
const config={
    type:Phaser.AUTO,
    width:1920,
    height:1080,


    parent:"game-container",
    backgroundColor:"",
    scale:{
        mode:Phaser.Scale.CENTER_BOTH,
    },

    scene: [

        MainMenu,
        Login,
        SignIn,
        InGameUI,
        Leaderboard


    ],

    dom:{
        createContainer:true,
    },

    physics:{
        default:"arcade",
        arcade:{
            gravity:{y:speedDown},
            debug:false,
        }
    }

}
export default new Phaser.Game(config);