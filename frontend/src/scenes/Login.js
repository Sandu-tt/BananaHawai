import { Scene } from "phaser";

export class Login extends Scene {
    constructor() {
        super("Login");
        this.baseUrl = "http://localhost:3000";
    }

    preload() {
        this.load.image("Login", "assets/icons/LoginButton.png");
        this.load.image("password", "assets/password.png");
        this.load.image("SignIn", "assets/icons/signup.png");
        this.load.image("PasswordIcon", "assets/PasswordIcon.png");
        this.load.image("UsernameIcon", "assets/UsernameIcon.png");
        this.load.image("Username", "assets/Username.png");
        this.load.image("GameTitle", "assets/bananalogo2.png");
        this.load.image("LoginBack", "assets/LoginBack.png");
    }

    create() {
        const loginBg = this.add.image(0, 0, "LoginBack");
        loginBg.setOrigin(0);
        loginBg.setDisplaySize(this.scale.width, this.scale.height);

        this.add.image(960, 250, "GameTitle").setScale(0.7);

        this.add.image(675, 465, "UsernameIcon").setScale(0.8);
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
            .setScale(0.8)
            .setInteractive({ useHandCursor: true })
            .on("pointerdown", () => this.handleLogin())
            .on("pointerover", () => loginButton.setScale(0.9))  // Enlarge when hovered
            .on("pointerout", () => loginButton.setScale(0.8)); // Reset when not hovered

        const signInButton = this.add
            .image(700, 720, "SignIn")
            .setScale(0.8)
            .setInteractive({ useHandCursor: true })
            .on("pointerdown", () => this.handleSignIn())
            .on("pointerover", () => signInButton.setScale(0.9))  // Enlarge when hovered
            .on("pointerout", () => signInButton.setScale(0.8)); // Reset when not hovered


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
