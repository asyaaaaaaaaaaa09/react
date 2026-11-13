import School from './components/School'
 
 
 
 
function App() {
 
  return (
    <>
      <h1>Demo</h1>
      <School name="My School" subjects={['mathe', 'english', 'deutsch']} />
      <School name="Another School" subjects={['biologie', 'chemie', 'physik']} />
 
    </>
  )
}
 
export default App