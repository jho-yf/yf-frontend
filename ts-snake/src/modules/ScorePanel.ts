
/**
 * 记分牌
 */
 class ScorePanel {

    private _score = 0
    private _level = 1
    private _scoreEle: HTMLElement
    private _levelEle: HTMLElement
    private _maxLevel: number
    private _upLevelScore: number

    constructor(maxLevel: number = 10, upLevelScore: number = 10) {
        this._scoreEle = document.getElementById('score')!
        this._levelEle = document.getElementById('level')!
        this._maxLevel = maxLevel
        this._upLevelScore = upLevelScore
    }

    get score(): number {
        return this._score
    }

    set score(score: number) {
        this._score = score
    }

    get level(): number {
        return this._level
    }

    set level(level: number) {
        this._level = level
    }

    addScore(): void {
        this._scoreEle.innerHTML = ++this._score + ''

        // 每10分升一级
        if (this.score % this._upLevelScore === 0) {
            this.levelUp()
        }
    }

    levelUp(): void {
        if (this._level < this._maxLevel) {
            this._levelEle.innerHTML = ++this._level + ''
        }
    }

}

export default ScorePanel