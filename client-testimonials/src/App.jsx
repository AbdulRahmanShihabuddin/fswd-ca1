import TestimonialCard from "./components/TestimonialCard"

function App() {
  let data = [
    {
    name:"Emily Watson",
    text:"The service was amazing! Would recommend."},
    {
    name:"Henry Cavill",
    text:"Exceptional service."
  }]
  return (
    <>
      {data.map(function(item){
        return <TestimonialCard name={item.name} text={item.text}/>
      })}
    </>
  )
}

export default App
