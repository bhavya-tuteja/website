//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
      <p>HTML Headings and Paragraph</p>
      <h1>Hello Good Day</h1>
      <h2>HTML INTRODUCTION (PAGE1)</h2>
      <h2>Oh! Yes, Good Day</h2>
      <p>Introduction Para</p>
      <p><strong>How to work in react </strong></p>
      <p>Use of ul and ol tags</p>
      <pre>To write a poem
           We use 'pre' tag
           It is the way 
           To write a poem 
      </pre>
      <pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
      <p>Ul- Unordered List and Ol - Ordered List</p>
      <ul>
           <li>Now, work in this folder only.</li>
           <li>The path is - D:\GIT\website\lesson\letslearn\my-website</li>
           <li>To work in html do in App.js and save the file.</li>
           <li>GO to cmd by 'Terminal>New Terminal'</li>
           <li>Use cd in cmd and attain the path - D:\GIT\website\lesson\letslearn\my-website  </li>
           <li>Type 'npm start' and get the result (OUTPUT)</li>
         </ul>
         <ol>
           <li>Let us see</li>
           <li>Does it work or not</li>
           <li>Yes, it worked. Wait for some time to get the output</li>
         </ol>
            <h2>HTML PAGE 2(IMAGES) </h2> 
         <h2>Adding image</h2>
         <img src ="https://unsplash.it/600/400" alt="Img No 1"/>
         <h2>HTML PAGE 3( FONT )</h2>
          <h1>Bold, Italics and Underline and Font Style </h1>
           <ul>
               <li>Bold - Crrl B 'To Bold the text'.</li> 
            
                   <p>To Bold the embed the text with tag 'B'</p>
                   <p><b> Bold the text output with tag 'B'</b></p>
                   <li>Bold - Crrl B 'To Bold the text'.</li>
                   <p>To give Italics effect embed the text with tag 'I'</p>
                   <p><i> Italics effect given to the text with tag 'I</i></p>
                   <p><i><b>Italics  and Boldness effect given to the text with tag 'I' and 'B'</b> </i></p>
                   <li>Underline - Crrl U 'To Underline the text'.</li> 
                    <p>To Underline the embed the text with tag 'U'</p>
                    <p>To give Italics effect embed the text with tag 'I'</p>
                    <p><i> Italics effect given to the text with tag 'I</i></p>
                    <p><i><b>Italics  and Boldness effect given to the text with tag 'I' and 'B' tags</b> </i></p>
                    <p><i><b><u>Italics  and Boldness effect given to the text with tag 'I' and 'B' tags</u></b> </i></p>
               
           </ul>
           <h2>HTML STYLE (PAGE 4) </h2>
           <ul>
                Style in html includes font, size, color etc.
                <li>Text Formating - mark, em, ins, del, sup, sub ec.</li>
                 <li>Adding color to text in a paragraph</li>
                        <p style={{color:"red"}}>It is line number 1 with red color</p>
                        <p style={{background:"blue",color:"white", fontSize:"25px"}} >It is line number 2 with background color pink text blue and size 25px</p>
                        <p style={{align:"center"}}> The text is aligned center</p>
                 
                 <li>Adding other effets - mark, em, ins, del</li>
                         <p>It is a text is the way it marked  <mark> " THE MARKED PART OF THE TEXT "</mark>.</p>
                         <p>It is a text with del effect <del><mark>" THE PART OF THE TEXT IS DEL " with mark</mark></del></p>
                         <p>It is a text with em effet <em><mark>" THE PART OF THE TEXT IS EM " with mark.</mark></em></p>
                 <li>Adding effect of subscript and superscript</li>
                         <p>It is a text with both sub and and sup effects " <sub>TEXT IS SUBSCRIPT</sub>AND THE OTHER EFFECT <sup>LAST PART IS SUPERSCRIPT . </sup></p>
                 <li></li>
                 <li></li>
           </ul>
                <style>
                         
                </style>
                <center><h1>How to Bind Color into Select Option (dropdown)</h1>
                        <h2>HTLM - CSS STYLE</h2>
                        <hr></hr>
                        </center>
                         <select>
                                  <option value="" selected disabled hidden style={{fontSize:"25px"}}>--SELECT COLOR--</option>
                                  <option style={{fontSize:"1.5rem", color:"pink"}}>PINK</option>
                                  <option style={{fontSize:"1.5rem", color:"red"}}>RED</option>
                                  <option style={{fontSize:"1.5rem", color:"blue"}}>BLUE</option>
                                  <option style={{fontSize:"1.5rem", colopr:"green"}}>GREEN</option>
                                  <option style={{fontSize:"1.5rem" , color:"orange"}}>ORANGE</option>
                          </select>
                

                  
    </div>
   
  );
}

export default App;

// 
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Good Day, Sir.</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */