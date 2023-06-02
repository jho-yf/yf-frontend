import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

/**
 * 游戏控制器
 */
class GameControl {

    private _snake: Snake
    private _food: Food
    private _scorePanel: ScorePanel

    constructor() {
        this._snake = new Snake()
        this._food = new Food()
        this._scorePanel = new ScorePanel(10, 2)
    }

    init() {
        document.addEventListener('keydown', this.onKeydown.bind(this))
        this._snake.isAlive = true
        this._snake.speed = this.countSpeed()
    }

    start() {
        // 初始化
        this.init()

        // 移动
        this._snake.move(this.checkEat.bind(this))
    }

    // 按键监听
    onKeydown(event: KeyboardEvent) {
        this._snake.direction = event.key
    }

    checkEat(snakeHeadX: number, snakeHeadY: number): void {
        if (snakeHeadX === this._food.X && snakeHeadY === this._food.Y) {
            this._food.changePosition()
            this._scorePanel.addScore()
            this._snake.speed = this.countSpeed()
            this._snake.addBody()
        }
    }

    countSpeed(): number {
        return 300 - (this._scorePanel.level - 1) * 30
    }

}

export default GameControl