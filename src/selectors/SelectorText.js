import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'

class SelectorText extends Selector {
  constructor (cssSelector = '', name = '') {
    super(cssSelector, name)
  }

  selection (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this._cssSelector)]
    return elemets.map( e => $(e).text().trim() )
  }
}

export default SelectorText