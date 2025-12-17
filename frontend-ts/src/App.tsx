import { Button } from './components/Button'
import './App.css'
import { PlusIcon } from './icons/plus'

function App() {
  return (
    <>
      <Button variant='primary' size='md' text='Primary Button' startIcon={<PlusIcon />}/>
      <Button variant='secondary' size='md' text='Secondary Button' />
    </>
  )
}

export default App
