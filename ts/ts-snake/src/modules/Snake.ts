class Snake {

    private _element: HTMLElement
    // 蛇头
    private _head: HTMLElement
    // 蛇身
    private _body: HTMLCollection
    private _direction: string = 'ArrowRight'
    private _isAlive: boolean = true
    private _speed: number = 300

    constructor() {
        this._element = document.getElementById("snake")!
        this._head = document.querySelector("#snake > div")!
        this._body = this._element.getElementsByTagName("div")
    }

    get X() {
        return this._head.offsetLeft
    }

    set X(value: number) {
        if (this.X == value) {
            return
        }
        
        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!')
        }

        this._head.style.left = value + 'px'
    }
    
    get Y() {
        return this._head.offsetTop
    }

    set Y(value: number) {
        if (this.Y == value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!')
        }

        this._head.style.top = value + 'px'
    }

    set direction(direction: string) {
        this._direction = direction
    }

    set speed(speed: number) {
        this._speed = speed
    }

    set isAlive(isAlive: boolean) {
        this._isAlive = isAlive
    }

    addBody(): void {
        let div = document.createElement("div")
        this._element.insertAdjacentElement("beforebegin", div)
    }

    move() {
        switch (this._direction) {
            case "ArrowUp":
                this.Y -= 10
                break
            case "ArrowDown":
                this.Y += 10
                break
            case "ArrowLeft":
                this.X -= 10
                break
            case "ArrowRight":
                this.X += 10
        }
        this._isAlive && setTimeout(this.move.bind(this), this._speed)
    }

}

export default Snake