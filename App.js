import React from 'react';

function App() {
  
  const studentJavaScript = ['Glaucia Rapozo', 'Gabriela Rapozo', 'Renato Silva', 'Renato Silva Jr', 'Irving Magalhães'];
  
  const names = []
  
  studentJavaScript.forEach((data) => {
    names.push(<h3 className='student_name'>{data}</h3>)
  })
  
  return (
    <div className='container'
    
    style={{
      backgroundColor: 'teal',
      borderColor: 'black',
      color: 'white',
      width: '600px',
      height: '200px',
      marginLeft:'0px',
      textAlign:'center',
      
    }}
    
    >
    {names}
    </div>
    
    )
  }
  
  export default App;
  
  
  /*Em JavaScript, o forEach() é considerado um método de array que é usado para retornar cada item de um array 
  com a ajuda de uma função de retorno de chamada. 
  Ex. const myArray = [10, 20, 30, 40, 50]
  
  myArray.forEach(()=>{
    console.log()
  })
  */