import cheerio from 'cheerio'

class Selector {
  constructor (cssSelector = '', name = '', id = '') {
    this._name = name
    this._id = id
    this._cssSelector = cssSelector
  }

  selection (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this._cssSelector)]
    return elemets.map( e => $(e).text() )
  }
}

export default Selector