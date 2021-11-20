import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'

class SelectorUrl extends Selector {
  constructor (cssSelector = '', name = '', id = '') {
    super(cssSelector, name, id)
  }

  selection (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this._cssSelector)]
    return elemets.map( e => $(e).attr('href') )
  }
}

export default SelectorUrl