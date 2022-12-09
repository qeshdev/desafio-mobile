import { colors, countries } from './infosHardcoded'

describe('infosHardcoded', () => {
  test('#colors returns list of colors', () => {
    expect(colors).toEqual([
      { color: '#27AE60' },
      { color: '#42C1C7' },
      { color: '#2D9CDB' },
      { color: '#2F80ED' },
      { color: '#9B51E0' },
      { color: '#F2C94C' },
      { color: '#F2994A' },
      { color: '#EB5757' },
      { color: '#F25F5C' }
    ])
  })

  test('#countries returns list of countries', () => {
    expect(countries).toEqual([
      { label: 'Afegão' },
      { label: 'Sul-Africano' },
      { label: 'Albanês' },
      { label: 'Alemão' },
      { label: 'Andorrano' },
      { label: 'Angolano' },
      { label: 'Antiguano' },
      { label: 'Saudita' },
      { label: 'Argelino' },
      { label: 'Argentino' },
      { label: 'Armênio' },
      { label: 'Australiano' },
      { label: 'Brasileiro' }
    ])
  })
})
