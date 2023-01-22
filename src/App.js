import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css';
function App() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="500" pageNumber={pageNumber} />
        </Document>
        <p className='p'> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <button className='button' onClick={changePageBack}>Previous</button>
        }
        {
          pageNumber < numPages &&
          <button className='button' onClick={changePageNext}>Next</button>
        }
      </header>
      <center>
        <div>
         
        </div>
      </center>
    </div>
  );
}

export default App;
