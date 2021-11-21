import Url from './entities/Url.js'
import SelectorText from './selectors/SelectorText.js'
import SelectorUrl from './selectors/SelectorUrl.js'
import SelectorElement from './selectors/SelectorElement.js'
import readline from './stdin.js'

// const baseUrl = 'https://gptables.azurecurve.co.uk/products/microsoft-dynamics-gp-0/'

(async () =>  {

  const baseUrl = 'https://pt.wikipedia.org/wiki/Lista_de_presidentes_da_Venezuela'
  const Page = new Url( baseUrl, 'Main', 1)
  const html = await Page.loadPage()

  const className = 'table.wikitable tbody'


  // Page.addSelector(new SelectorUrl(className, 'linkPresidentPage'))
  const selectorE = new SelectorElement(className, 'namePresident')
  selectorE.addSelector(new SelectorText('tr td:nth-child(5) b a', 'colName'))
  selectorE.addSelector(new SelectorUrl('tr td:nth-child(5) b a', 'colName'))
  Page.addSelector(selectorE)

  Page.addSelector(new SelectorText('h1', 'namePresident'))

  Page.getSelections()

  // elements = elements.map((element, i ) => {
  //   let textElement = (isUrl) ? element.attribs.href : $(element).text()
  //   return textElement
  // })
  // console.log(elements)


})()