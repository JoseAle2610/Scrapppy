import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'

class SelectorElement extends Selector {
  constructor (cssClass = '', name = '') {
    super(cssClass, name)
    this.selectorsElement = []
  }

  selection (html){
    return this.selectorsElement.map(selector => {
      return selector.selection(html)

    })
  }

  addSelector (selector) {
    if(selector instanceof Selector){
      const css = `${this.cssClass} ${selector.cssClass}`
      selector.cssClass = css
      this.selectorsElement.push(selector)
    }
  }

}

export default SelectorElement