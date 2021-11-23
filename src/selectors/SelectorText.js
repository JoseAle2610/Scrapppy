import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'

class SelectorText extends Selector {
  constructor (cssClass = '', nameSelector = '') {
    super(cssClass, nameSelector)
  }

  selection (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this._cssClass)]
    return elemets.map( e => $(e).text().trim() )
  }
}

export default SelectorText