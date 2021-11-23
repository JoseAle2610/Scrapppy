import cheerio from 'cheerio'

class Selector {
  constructor (cssClass = '', nameSelector = '') {
    this._nameSelector = nameSelector
    this._cssClass = cssClass
  }

  selection (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this._cssClass)]
    return elemets.map( e => $(e).text() )
  }

  get nameSelector () {return this._nameSelector}
  set nameSelector (nameSelector) { this._nameSelector = nameSelector}
  get cssClass () {return this._cssClass}
  set cssClass (cssClass) { this._name = cssClass}
}

export default Selector