import TestimonialCard from "./components/TestimonialCard"

function App() {
  let data = [
    {
    name:"Emily Watson",
    text:"The service was amazing! Would recommend."},
    {
    name:"Henry Cavill",
    text:"Exceptional service."
  },{
    name:"Muhammed Hiddleston",
    text:"Bad service, would not recommend. 👎👎"
  },{
    name:"Jabbar Kunasnarcha",
    text:"Service was alright, not too shabby just passes expectations."
  }]
  return (
    <>
      {data.map(function(item){
        // return <div style={{
        //   border:"5px red solid"
        // }}>
          <TestimonialCard name={item.name} text={item.text}/>
        // </div>
      })}
    </>
  )
}

export default App
