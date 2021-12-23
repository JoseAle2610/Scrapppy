import cheerio from 'cheerio'
import rp from 'request-promise'
import readline from './stdin.js'

// const baseUrl = 'https://gptables.azurecurve.co.uk/products/microsoft-dynamics-gp-0/'

(async () =>  {

  const baseUrl = await readline('Set URL:')
  const html = rp(baseUrl)
  const className = await readline('what are you locking for?')
  let isUrl = await readline('are you locking a url? (S/n)')
  isUrl = (isUrl.toUpperCase() == 'S') ? true : false

  const $ = cheerio.load(await html)
  let elements = [... $(className)].map(e => $(e).text())
  // elements = elements.map((element, i ) => {
  //   let textElement = (isUrl) ? element.attribs.href : $(element).text()
  //   return textElement
  // })
  // console.log(elements)

  console.log(elements)

})()