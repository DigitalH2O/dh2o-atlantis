interface Constructor {
    el: any
    location: string // Possible options: top, right, bottom, left
    overlay: boolean
    width: string
    height: string
    beforeShow: Function
    afterShow: Function
    beforeHide: Function
    afterHide: Function
}

// Object used to define css classes
let classes = {
    main: 'dh2o-drawer',
    
    // Hide/Show
    show: 'dh2o-drawer-show',
    hide: 'dh2o-drawer-hide',

    // Overlay
    overlay: 'dh2o-drawer-overlay',

    // Positions
    top: 'dh2o-drawer-top',
    right: 'dh2o-drawer-right',
    bottom: 'dh2o-drawer-bottom',
    left: 'dh2o-drawer-left'
}

class Drawer {
    drawer: HTMLElement
    location: string = 'left'
    overlay: boolean = false
    animationSpeed: number = 300 // In ms
    isShowing: boolean = true

    // Callbacks
    beforeShow: Function = null
    afterShow: Function = null
    beforeHide: Function = null
    afterHide: Function = null

    // Styles
    display: string = 'block'
    height: string = '0px'
    width: string = '0px'

    constructor (info: Constructor) {
        // Validate
        this.validate(info)

        // Set element to drawer variable
        this.drawer = <HTMLElement>(typeof info.el === 'string' ? <HTMLElement>document.querySelector(info.el) : info.el)
        if (!this.drawer) {throw Error('Could not find element')}

        // Identify if drawer is currently open
        if (this.drawer.classList.contains('hide')) {this.isShowing = false}

        // Set location
        if (info.location) {this.location = info.location}

        // Set overlay
        if (info.overlay) {this.overlay = info.overlay}

        // Get original styles
        if (info.height) {this.height = info.height}
        if (info.width) {this.width = info.width}

        // Lets make sure the drawer has the necessary classes
        this.addInitialClasses()

        // Callbacks - Add after everything to ensure no callbacks are triggered during setup
        if (info.beforeShow) {this.beforeShow = info.beforeShow}
        if (info.afterShow) {this.afterShow = info.afterShow}
        if (info.beforeHide) {this.beforeHide = info.beforeHide}
        if (info.afterHide) {this.afterHide = info.afterHide}
    }

    // Validate certain perameters to ensure proper setup
    private validate (info: Constructor) {
        // Make sure element was passed in
        if (!info.el) {throw Error('el field is required')}

        // Make sure location is passed
        if (!info.location) {throw Error('position field is required')}

        // Based upon location lets make sure height or width is set
        if (['left', 'right'].includes(info.location) && !info.width) {throw Error('width field is required on left or right locations')}
        if (['top', 'bottom'].includes(info.location) && !info.height) {throw Error('height field is required on top or bottom locations')}
    }

    // Add required classes to drawer element
    private addInitialClasses () {
        this.drawer.classList.add(classes.main)
        this.drawer.classList.add(classes[this.location])
        if (this.isShowing) {this.show()} else {this.hide()}

        // Add overlay if config set
        if (this.overlay) {this.drawer.classList.add(classes.overlay)}

        // Add height or width based upon what type of location it is
        if (['left', 'right'].includes(this.location)) {
            this.drawer.style['width'] = this.width
            // Needed for better browser support
            this.drawer.style['min-width'] = this.width
            this.drawer.style['max-width'] = this.width
        }
        if (['top', 'bottom'].includes(this.location)) {
            this.drawer.style['height'] = this.height
            // Needed for better browser support
            this.drawer.style['min-height'] = this.height
            this.drawer.style['max-height'] = this.height
        }
    }

    toggle () {
        if (this.isShowing) { this.hide() } else { this.show() }
    }

    show () {
        // Run beforeShow callback
        if (this.beforeShow) {this.beforeShow()}

        this.drawer.classList.remove('hide')
        
        // SetTimeout is used because we want to make sure hide is removed before running animations
        setTimeout(() => {
            this.drawer.classList.remove(classes.hide)
            this.drawer.classList.add(classes.show)
            if (['left', 'right'].includes(this.location)) {
                this.drawer.style.marginLeft = `0px`
            }
            if (['top', 'bottom'].includes(this.location)) {
                this.drawer.style.marginTop = `0px`
            }
        }, 20)

        setTimeout(() => {
            this.isShowing = true

            // Run afterShow callback
            if (this.afterShow) {this.afterShow()}
        }, this.animationSpeed)
    }

    hide () {
        // Run beforeHide callback
        if (this.beforeHide) {this.beforeHide()}

        this.drawer.classList.remove(classes.show)
        this.drawer.classList.add(classes.hide)
        if (['left', 'right'].includes(this.location)) {
            this.drawer.style.marginLeft = `-${this.width}`
        }
        if (['top', 'bottom'].includes(this.location)) {
            this.drawer.style.marginTop = `-${this.height}`
        }

        let hasAfterHide = this.afterHide
        setTimeout(() => {
            this.isShowing = false
            this.drawer.classList.add('hide')

            // Run afterHide callback
            if (hasAfterHide) {this.afterHide()}
        }, this.animationSpeed)
    }
}

export default Drawer
declare var module: any;
(module).exports = Drawer