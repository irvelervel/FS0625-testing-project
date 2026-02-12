// questo è un file di test!
// proveremo le funzionalità del componente HiddenComponent senza fisicamente
// montarlo nel DOM

// tutti i miei componenti React nella loro fase di test verranno montati
// nel VIRTUAL DOM (la rappresentazione in memoria del DOM che React effettua
// internamente per velocizzare la manipolazione vera nel browser)

// andiamo ora a scrivere i nostri test per il componente HiddenSection
// andremo a fare un po' di unit & integration testing

import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// cominciamo creando una "suite" di tests (una collezione)
// le suite di tests si dichiarano con la funzione "describe"

describe('Initial Mounting', () => {
  // qui dentro andremo a scrivere individualmente i nostri tests
  it('checks if title is mounted correctly', () => {
    // qui dentro andiamo fisicamente a scrivere gli steps per il mio test
    // 1) monto il componente nel virtual DOM
    // utilizzo il metodo "render" della react-testing-library
    render(<HiddenSection />)
    // 2) vado a cercare il titolo (dovrebbe esserci!)
    // 3) interazione con l'elemento, ma in questo caso non c'è!
    // 4) mi aspetto che il titolo venga trovato!
  })
})
