// questo è un file di test!
// proveremo le funzionalità del componente HiddenComponent senza fisicamente
// montarlo nel DOM

// tutti i miei componenti React nella loro fase di test verranno montati
// nel VIRTUAL DOM (la rappresentazione in memoria del DOM che React effettua
// internamente per velocizzare la manipolazione vera nel browser)

// andiamo ora a scrivere i nostri test per il componente HiddenSection
// andremo a fare un po' di unit & integration testing

import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// cominciamo creando una "suite" di tests (una collezione)
// le suite di tests si dichiarano con la funzione "describe"

describe('Initial Mounting', () => {
  // qui dentro andremo a scrivere individualmente i nostri tests
  it('checks if title is mounted correctly', () => {
    // qui dentro andiamo fisicamente a scrivere gli steps per il mio test
    // 1) monto il componente nel virtual DOM
    // utilizzo il metodo "render" della react-testing-library
    render(<HiddenSection />) // viene montato nel VIRTUAL DOM
    // 2) vado a cercare il titolo (dovrebbe esserci!) -> scrivo le IPOTESI
    //   a) devo verificarne la PRESENZA -> dovrò usare getBy o findBy
    //   b) l'elemento fa parte del PRIMO RENDER -> dovrò usare getBy*
    // screen interpretatelo come "DOM VIRTUALE"
    const title = screen.getByText('Componente da testare')
    // variante con RegEx case insensitive
    // const title = screen.getByText(/componente da testare/i)
    // 3) interazione con l'elemento, ma in questo caso non c'è!
    // -> si salta
    // 4) mi aspetto che il titolo venga trovato!
    // VERIFICA DELLE ASPETTATIVE
    expect(title).toBeInTheDocument()
  })

  //   verifichiamo ora l'etichetta INIZIALE del bottone
  it('checks that initial button label is "MOSTRA"', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const buttonLabel = screen.getByText(/mostra/i) // cercherà anche "MOSTRA"
    const wrongLabel = screen.queryByText(/nascondi/i) // NON DOVREBBE ESISTERE :o
    // 3)
    // non ci clicco per ora, quindi skip
    // 4)
    expect(buttonLabel).toBeInTheDocument()
    expect(wrongLabel).not.toBeInTheDocument()

    expect(buttonLabel).toHaveClass('btn') // <-- comodo per verificare classi CSS
    // expect(buttonLabel).toHaveStyle() // <-- comodo per verificare stili inline
  })

  //   ultimo test di questa suite: verifichiamo che la card non ci sia
  it('checks that kitten is not in the page inizially', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const cardImage = screen.queryByAltText('gattino')
    // 3)
    // skip
    // 4)
    expect(cardImage).not.toBeInTheDocument()
  })
})

// ora clicchiamo il bottone :)
describe('checks button click', () => {
  it('changes the button label when button is clicked', () => {
    // 1)
    render(<HiddenSection />)
    // 2) cerco il bottone con etichetta iniziale, 'MOSTRA'
    const button = screen.getByText(/mostra/i)
    // 3)
    // FASE DI INTERAZIONE -> clicco il bottone!
    fireEvent.click(button) // <-- clicca il bottone 1 volta
    // ora RI-CERCHIAMO IL BOTTONE, con la nuova etichetta
    const newButton = screen.getByText(/nascondi/i)
    // newButton dovrebbe venire trovato nella pagina ora!
    // 4)
    expect(newButton).toBeInTheDocument()
  })

  it('should render the card with the kitten', () => {
    // 1)
    render(<HiddenSection />)
    // 2) cerco il bottone con etichetta iniziale, 'MOSTRA'
    const button = screen.getByText(/mostra/i)
    // 3)
    // FASE DI INTERAZIONE -> clicco il bottone!
    fireEvent.click(button) // <-- clicca il bottone 1 volta
    const cardImage = screen.getByAltText('gattino')
    // 4)
    expect(cardImage).toBeInTheDocument()
  })
})
