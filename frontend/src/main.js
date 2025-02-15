import {MainMenu} from "./scenes/MainMenu.js";


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
        Login

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