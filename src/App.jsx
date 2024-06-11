import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatos</h1>

      <button onClick={handleClick}>New fact</button>

      {fact && <p> {fact} </p>}
      {imageUrl && <img src={imageUrl} alt={`Image using three words ${fact}`} />}
    </main>
  )
}
