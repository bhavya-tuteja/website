//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
      <center><h1 id="INTRODUCTION">PAGE: INTRODUCTION </h1>
      <p>HTML Headings and Paragraph</p>
      <h1>Hello Good Day</h1></center>
      <a href="#PAGE1">Go to Page1</a><br></br><br></br>
      <a href="#PAGE2">Go to Page2</a><br></br><br></br>
      <a href="#PAGE3">Go to Page3</a><br></br><br></br>
      <a href="#PAGE4">Go to Page4</a><br></br><br></br>
      <a href="#PAGE5">Go to Page5</a><br></br><br></br>
      <a href="#PAGE6">Go to Page6</a><br></br><br></br>
      <a href="#PAGE4">Go to Page4</a><br></br><br></br>
     <center> <h2 id="PAGE1">HTML INTRODUCTION-PAGE1</h2></center>
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
         <a href="#INTRODUCTION">Go to Intoduction</a><br></br><br></br>
         <h2 id="PAGE2">HTML PAGE2</h2>
            <center><h2>HTML PAGE 2(IMAGES) </h2></center> 
         <h2>Adding image</h2>
         <img src ="https://unsplash.it/600/400" alt="Img No 1"/><br></br><br></br>
         <a href="#INTRODUCTION">Go to Intoduction</a><br></br><br></br>
           <h2 id="PAGE3">HTML PAGE3</h2>

           <center><h2>HTML PAGE 3( FONT )</h2></center>
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
               
           </ul><br></br><br></br>
           <a href="#INTRODUCTION">Go to Intoduction</a><br></br><br></br>
           <center> <h2 id="PAGE4">HTML INTRODUCTION-PAGE4</h2></center>
          <center> <h2>HTML STYLE (PAGE 4) </h2>
                   <h2>STYLE IN HTLM - FONT, SIZE, COLOR </h2></center>
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
           <br></br><br></br>
           <a href="#INTRODUCTION">Go to Intoduction</a><br></br><br></br>
                {/* <style> */}
                         {/* .pink{ */}
                                {/* background-color */}
                                {/* :"pink"; */}
                         {/* } */}
                        
                         {/* .red{ */}
                                {/* background-color:red; */}
                         {/* } */}
                         {/* .blue{ */}
                                {/* background-color:blue; */}
                         {/* } */}
                         {/* .green{ */}
                                {/* background-color:green; */}
                         {/* } */}
                         {/* .orange{ */}
                                {/* background-color:orange; */}
                         {/* } */}
                {/* </style> */}
                <h2 id="PAGE5">HTML INTRODUCTION-PAGE5</h2>
                <center><h1>How to Bind Color into Select Option (dropdown)</h1>
                        <h2>HTLM - CSS STYLE</h2>
                        <hr></hr>
                        
                         <select>
                                  <option value="" selected disabled hidden style={{fontSize:"25px"}}>--SELECT COLOR--</option>
                                  <option style={{fontSize:"1.5rem", color:"pink"}} class="pink">PINK</option>
                                  <option style={{fontSize:"1.5rem", color:"red"}} class="red">RED</option>
                                  <option style={{fontSize:"1.5rem", color:"blue"}} class="blue">BLUE</option>
                                  <option style={{fontSize:"1.5rem", color:"green"}} class="green">GREEN</option>
                                  <option style={{fontSize:"1.5rem", color:"orange"}} class="orange">ORANGE</option>
                          </select>
                     </center>
                     <hr></hr>
                     <h1>We will study the other part of the lesson in next part</h1>
                    <center> <h1>HTML PAGE 5</h1>
                     <h2>Html-lesson in color</h2></center>
                     <h2>Text in Rainbow color background</h2>
                             <h1 style={{background:"violet", color:"blue"}}> VIOLET (limit) wavelength 400nm; frequency	7.50X10<sup>14</sup>Hz ;Energy-level:3.10 eV</h1>
                             <h1 style={{background:"indigo", color:"red"}}> INDIGO wavelength 450 nm  ; frequency 6.6X10<sup>14</sup>Hz  ;Energy-level 2.75 eV </h1>
                             <h1 style= {{background:"blue", color:"yellow"}}> BLUE wavelength 500 nm  ; frequency  5.99X10<sup>14</sup>Hz ;Energy-level 2.48 eV</h1>     
                             <h1 style={{background:"green", color:"red"}}>GREEN wavelength 550 nm ; frequency 5.45X10<sup>14</sup>Hz ;Energy-value 2.25 eV </h1>
                             <h1 style={{background:"yellow", color:"blue"}}>YELLOW wavelength 500 nm; frequency 5.00x10<sup>14</sup> Hz ; Energy-level 2.06 eV</h1>
                             <h1 style={{background:"orange", color:"green"}}>ORANGE wavelengh 650 nm; frequency 4.62x10<sup>14</sup> Hz; Energy-level 1.96 ev</h1>
                             <h1 style={{background:"red", color:"blue"}}>RED  wavelength 700 nm; frequency 4.29x10<sup>14</sup> Hz; Energy-level 1.77 eV</h1>
                      <h2>Html - lesson Border Color</h2>
                           <h1 style={{border:"0.5rem solid blue", background:"pink", color:"blue"}}>Border is blue, with pink background</h1>
                           <h1 style={{border:"0.5rem solid red", background:"cyan", color:"red"}}>Borderd is red, with cyan background</h1>
                           <h1 style={{border:"0.5rem solid orange", background:"green", color:"orange"}}>Border is orange, with green background</h1>
                           <h1></h1><h1></h1><h1></h1><h1></h1><h1></h1>
                           <br></br><br></br>
           <a href="#INTRODUCTION">Go to Intoduction</a><br></br><br></br>
           <h2 id="PAGE6">HTML INTRODUCTION-PAGE6</h2><br></br><br></br>
                      <center><h1>HTML PAGE 6</h1>
                      <h2>HTML LIST</h2></center>
                       <h2>Description List</h2>
                       <dl>
                             <dt>
                                   Ordered List
                                   <dd>* First tag is 'ol'</dd>
                                   <dd>* Tag ol contains 'li'</dd>
                                   <dd>* Ordered LIst has Numbers, Roman Numners, etc</dd>
                             </dt>
                             <dt>
                                    Unodered List 
                                          <dd># First tag is 'ul'</dd> 
                                          <dd># Tag ul contains 'li'</dd> 
                                          <dd># Undered List has some disc, formats etc.</dd>
                             </dt>
                             <dt>
                                   Detailed List
                                   <dd>* In detailed List opening tag is 'dl'</dd>
                                   <dd>* Tag dl contains 'dt' - Term of List</dd>
                                   <dd>* Tag 'dd' means detailed discription</dd>
                             </dt>
                       </dl>
                       <br></br><br></br>
           <a href="#INTRODUCTION">Go to Intoduction</a><br></br><br></br>
           <br></br><br></br>
           <h2 id="PAGE7">HTML INTRODUCTION-PAGE7</h2><br></br><br></br>
           <center><h1>HTML PAGE 7</h1>
                      <h2>HTML DIV (TAG)</h2></center>
                       <h2>GENERAL INTRODUCTION OF DIV (TAG)</h2>
                       <p>Point No 1 : Div tag means division of a document<br></br>
                          Point No 2 : Div tag creates sections of a document<br></br>
                          Point No 3 : Div tag can be identified by 'id'<br></br>
                          Point No 4 : In 'id' we can create further parts called class</p>
                          <br></br><br></br>
           <a href="#INTRODUCTION">Go to Intoduction</a><br></br><br></br>              
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