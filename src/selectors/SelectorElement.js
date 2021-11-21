import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'

class SelectorElement extends Selector {
  constructor (cssSelector = '', name = '', id = '') {
    super(cssSelector, name, id)
    this._selectors = []
    this._element = {}
  }

  get selectors () {return this._selectors}

  selection (html){
    return this._selectors.map(selector => {
      return selector.selection(html)

    })
  }

  addSelector (selector) {
    if(selector instanceof Selector){
      const css = `${this._cssSelector} ${selector.cssSelector}`
      selector.cssSelector = css
      this._selectors.push(selector)
    }
  }

}

export default SelectorElement