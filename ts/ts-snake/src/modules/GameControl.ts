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
        this._scorePanel = new ScorePanel()
    }

    init() {
        document.addEventListener('keydown', this.onKeydown.bind(this))
        this._snake.isAlive = true
        this._snake.speed = 300 - (this._scorePanel.level - 1) * 30
    }

    start() {
        // 初始化游戏
        this.init()

        // 蛇移动
        try {
            this._snake.move()
        } catch(e) {
            alert(e)
            this._snake.isAlive = false
        }
    }

    // 按键监听
    onKeydown(event: KeyboardEvent) {
        this._snake.direction = event.key
    }

}

export default GameControl