/**
 * 定义食物类Food
 */ 
 class Food {

    // 食物对应的网页元素
    private element: HTMLElement;

    constructor() {
        // 获取页面中food元素，并赋值。! 表示忽略警告
        this.element = document.getElementById('food')!
    }

    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    changePosition(): void {
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'
    }

}

export default Food