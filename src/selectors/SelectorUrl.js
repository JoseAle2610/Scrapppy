import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'
import Url from '../entities/Url.js'

class SelectorUrl extends Selector {
  constructor (cssSelector = '', name = '', page='') {
    super(cssSelector, name)
    this._urls = []
    this._pages = []
    this._pageClass = page
    this._selectors = []
  }

  selection (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this._cssSelector)]
    this._urls = elemets.map( e => $(e).attr('href') )
    this.loadPages()
    console.log('finish')
    return this._urls
  }

  loadPages ( ) {
    const pages = this._urls.map(async url => {
      const page = new Url(url, 'subUrl')
      const html = await page.loadPage()
      this._selectors.map(selector => {
        page.addSelector(selector)
      })
      console.log(page.getSelections())
      // console.log(html)
      // console.log(this._pageClass)
      return page
    })
    console.log(pages)
  }

  addSelector (selector) {
    if (selector instanceof Selector)
      this._selectors.push(selector)
  }
}

export default SelectorUrl