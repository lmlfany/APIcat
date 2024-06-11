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

      <button onClick={handleClick} style={{ fontSize: 18 }}>New fact</button>

      <card>
        {fact && <p style={{ fontSize: 18 }}> {fact} </p>}
        <div style={{ justifyContent: 'center' }}>
          {imageUrl && <img src={imageUrl} alt={`Image using three words ${fact}`} style={{ borderRadius: 16 }} />}
        </div>
      </card>
    </main>
  )
}
