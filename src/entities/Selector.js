import cheerio from 'cheerio'

class Selector {
  constructor (cssClass = '', nameSelector = '') {
    this.nameSelector = nameSelector
    this.cssClass = cssClass
  }

  selection (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this.cssClass)]
    return elemets.map( e => $(e).text() )
  }
}

export default Selector