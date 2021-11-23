import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'

class SelectorElement extends Selector {
  constructor (cssClass = '', name = '') {
    super(cssClass, name)
    this._selectorsElement = []
  }

  get selectorsElement () {return this._selectorsElement}

  selection (html){
    return this._selectorsElement.map(selector => {
      return selector.selection(html)

    })
  }

  addSelector (selector) {
    if(selector instanceof Selector){
      const css = `${this._cssClass} ${selector.cssClass}`
      selector.cssClass = css
      this._selectorsElement.push(selector)
    }
  }

}

export default SelectorElement