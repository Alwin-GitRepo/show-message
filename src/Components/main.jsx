import React, { useState } from 'react'


function main() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [content,SetContent]=useState(``);
  function ShowMessage()
  {
    SetContent(`Hello, React!`);
  }

  function HideMessage()
  {
    SetContent(``);
  }
  return (
    <div>
      <div className="container my-5">
        <div className='border border-5 border-dark bg-warning p-5' style={{borderRadius : 10 + '%'}}>
          <h1>MESSAGE BOX</h1>
          <button className='my-5 mx-5 bg-success btn-rounded' onClick={ShowMessage}>Show</button>
          <button className='my-5 mx-5 bg-danger btn-rounded' onClick={HideMessage}>Hide</button>
          <p className='text-light'>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default main