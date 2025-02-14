import { Scene } from "phaser";

export class MainMenu extends Scene {
    constructor() {
        super("MainMenu");
        this.player;
    }

    preload() {
        this.load.image("background", "assets/tropical_island.webp"); // Load background
        // this.load.image("GameMainMenu01", "assets/GameMainMenu01.png");
        // this.load.image("BananaFigures", "assets/BananaFigures.png");
        this.load.image("PlayButton", "assets/menu/play_button.png");
        this.load.image("SettingButton", "assets/SettingButton.png");
        this.load.image("ExitButton", "assets/ExitButton.png");
        this.load.image("GameTitle01", "assets/GameTitle01.png");
        this.load.image("HomeButton", "assets/menu/menu2.png");
        this.load.image("HelpButton", "assets/menu/info.png");
        this.load.audio("backgroundMusic", "assets/backgroundMusic.mp3");
        this.load.image("play", "assets/menu/sound.png");
        this.load.image("pause", "assets/menu/pause2.png");
        this.load.image("Banana", "assets/Banana.png");
    }

    create() {
        // Get center coordinates
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        // Add background image first
        const background = this.add.image(centerX, centerY, "background");
        background.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Game Title
        const gameTitle = this.add.image(centerX, centerY - 200, "GameTitle01");
        gameTitle.setScale(0.1);

        // Bounce animation for title
        this.tweens.add({
            targets: gameTitle,
            y: centerY - 80, // Move it slightly down
            duration: 800,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: -1,
        });

        // Play Button
        const playButton = this.add
            .image(940, 750, "PlayButton")
            .setInteractive({ useHandCursor: true })
            .setScale(0.5)
            .setOrigin(0.5, 0.5);

        playButton.on("pointerdown", () => {
            this.startGame();
        });

        playButton.on("pointerover", () => {
            playButton.setScale(1.1);
        });

        playButton.on("pointerout", () => {
            playButton.setScale(1);
        });

        // Play background music
        this.backgroundMusic = this.sound.add("backgroundMusic", {
            volume: 0.7,
            loop: true,
        });

        this.isPlaying = false;
        this.musicButton = this.add
            .image(1800, 100, "play")
            .setInteractive({ useHandCursor: true })
            .setScale(0.4);

        this.musicButton.on("pointerdown", () => {
            this.toggleMusic();
        });

        // Home Button
        const homeButton = this.add
            .image(1800, 200, "HomeButton")
            .setInteractive({ useHandCursor: true })
            .setScale(0.4);

        homeButton.on("pointerdown", () => {
            this.scene.start("HomeScene");
        });

        // Help Button
        const helpButton = this.add
            .image(1800, 300, "HelpButton")
            .setInteractive({ useHandCursor: true })
            .setScale(0.4);

        helpButton.on("pointerdown", () => {
            this.scene.start("HelpScene");
        });

        // Banana animation
        this.player = this.physics.add
            .image(1650, 0, "Banana")
            .setOrigin(0, 0)
            .setScale(0.2);
    }

    toggleMusic() {
        if (this.isPlaying) {
            this.backgroundMusic.stop();
            this.musicButton.setTexture("play");
        } else {
            this.backgroundMusic.play();
            this.musicButton.setTexture("pause");
        }
        this.isPlaying = !this.isPlaying;
    }

    startGame() {
        console.log("Play button clicked");
        this.backgroundMusic.stop();

        const token = localStorage.getItem("token");

        if (token) {
            this.scene.start("GamePlay");
            return;
        }

        this.scene.start("Login");
    }
}
