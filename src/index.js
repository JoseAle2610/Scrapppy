import Url from './entities/Url.js'
import SelectorText from './selectors/SelectorText.js'
import readline from './stdin.js'

// const baseUrl = 'https://gptables.azurecurve.co.uk/products/microsoft-dynamics-gp-0/'

(async () =>  {

  const baseUrl = 'https://pt.wikipedia.org/wiki/Lista_de_presidentes_da_Venezuela'
  const Page = new Url( baseUrl, 'Main', 1)
  const html = await Page.loadPage()

  const className = 'table.wikitable b a'


  Page.addSelector(new SelectorText(className, 'namePresident'))

  console.log('selection', Page.getSelections())

  // elements = elements.map((element, i ) => {
  //   let textElement = (isUrl) ? element.attribs.href : $(element).text()
  //   return textElement
  // })
  // console.log(elements)


})()