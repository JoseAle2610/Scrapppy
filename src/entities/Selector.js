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

  get name () {return this._name}
  get id () {return this._id}
  get cssSelector () {return this._cssSelector}
  set name (name) { this._name = name}
  set id (id) { this._name = id}
  set cssSelector (cssSelector) { this._name = cssSelector}
}

export default Selector