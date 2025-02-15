import {Scene} from "phaser";

export class login extends Scene {
    constructor() {
        super("Login");
        this.baseUrl = "http://localhost:3000"
    }

    preload(){
        this.load.image("Login","assets/LoginButton.png")
        this.load.image("GameTitle", "assets/bananalogo2.png");
        this.load.image("PasswordIcon","assets/icons/passwordblack.png")
        this.load.image("SignIn","assets/icons/signup.png");
        this.load.image("UsernameIcon","assets/icons/userblack.png");
        this.load.image("Username","assets/Username.png");
        this.load.image("LoginBack","assets/tropical_island.webp");
        this.load.image("password","assets/password.png")

    }

    create(){
        const login= this.add.image(0,0, "LoginBack");
        login.setOrigin(0);
        login.setDisplaySize(this.scale.width,this.scale.height);

        this.add.image(960,250,"GameTitle").setScale(0.7);

        this.add.image(960,250,"UsernameIcon").setScale(0.7);


        this.usernameInput = this.add.dom(960, 465).createFromHTML(
            `<input type="text" name="username" placeholder="Username" 
         style="
           padding: 20px; 
           font-size: 20px; 
           width: 250px; 
           border-radius: 15px; 
           border: 1px solid #ccc; 
           background-color: #FFFF00;
           color: #000000;
         ">`
        );

        this.add.image(675, 580, "PasswordIcon").setScale(0.8);
        this.passwordInput = this.add.dom(960, 580)
            .createFromHTML(`<input type="password" name="password" placeholder="Password" 
        style="
          padding: 20px; 
          font-size: 20px; 
          width: 250px; 
          border-radius: 15px; 
          border: 2px solid #ccc; 
          background-color: #FFFF00;
          color: #000000;
        ">`);

        const loginButton = this.add
            .image(1085, 720, "Login")
            .setScale(0.7)
            .setInteractive({ useHandCursor: true })
            .on("pointerdown", () => this.handleLogin());

        const signInButton = this.add
            .image(700, 720, "SignIn")
            .setScale(0.7)
            .setInteractive({ useHandCursor: true })
            .on("pointerdown", () => this.handleSignIn());

        this.feedbackText = this.add
            .text(785, 720, "", { fontSize: "20px", color: "#FF0000" })
            .setOrigin(0.5);
    }

    handleLogin() {
        this.scene.start("InGameUI");
    }

    handleSignIn() {
        this.scene.start("SignIn");
    }



}



