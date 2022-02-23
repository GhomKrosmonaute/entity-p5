import { Entity } from "@ghom/entity-base"

export class Base extends Entity {
  protected _zIndex?: number

  get zIndex(): number {
    return this._zIndex ?? this.parent?.children.indexOf(this) ?? 0
  }

  /**
   * Used to be overwritten by your own workings
   */
  onDraw(): boolean | void {}

  /**
   * Used to be overwritten by your own workings
   */
  onMouseReleased() {}

  /**
   * Used to be overwritten by your own workings
   */
  onMousePressed() {}

  /**
   * Used to be overwritten by your own workings
   */
  onKeyReleased() {}

  /**
   * Used to be overwritten by your own workings
   */
  onKeyPressed() {}

  /**
   * Should only be called if the current entity is a root.
   * Should not be overwritten!
   */
  public draw() {
    if (this.isSetup) {
      if (this.onDraw() !== false) this.transmit("draw")
    } else {
      console.warn(`draw is called before setup in ${this.constructor.name}`)
    }
  }

  /**
   * Should only be called if the current entity is a root.
   * Should not be overwritten!
   */
  public mousePressed() {
    if (this.isSetup) {
      this.onMousePressed()
      this.transmit("mousePressed")
    } else {
      console.warn(
        `mousePressed is called before setup in ${this.constructor.name}`
      )
    }
  }

  /**
   * Should only be called if the current entity is a root.
   * Should not be overwritten!
   */
  public mouseReleased() {
    if (this.isSetup) {
      this.onMouseReleased()
      this.transmit("mouseReleased")
    } else {
      console.warn(
        `mouseReleased is called before setup in ${this.constructor.name}`
      )
    }
  }

  /**
   * Should only be called if the current entity is a root.
   * Should not be overwritten!
   */
  public keyPressed() {
    if (this.isSetup) {
      this.onKeyPressed()
      this.transmit("keyPressed")
    } else {
      console.warn(
        `keyPressed is called before setup in ${this.constructor.name}`
      )
    }
  }

  /**
   * Should only be called if the current entity is a root.
   * Should not be overwritten!
   */
  public keyReleased() {
    if (this.isSetup) {
      this.onKeyReleased()
      this.transmit("keyReleased")
    } else {
      console.warn(
        `keyReleased is called before setup in ${this.constructor.name}`
      )
    }
  }
}