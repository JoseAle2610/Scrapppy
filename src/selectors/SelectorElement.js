import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'

class SelectorElement extends Selector {
  constructor (cssSelector = '', name = '', id = '') {
    super(cssSelector, name, id)
  }

  selection (html){
    const $ = cheerio.load(html)
    return elemets = [... $(this._cssSelector)]
  }
}

export default SelectorElement