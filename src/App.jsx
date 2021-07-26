import React from 'react'
import { Header } from './Components'
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { LoginPage } from './Page'

export const App = () => {
    return (
        <div style={{background:"url(https://unsplash.it/1200/1200)",height:'100vh',backgroundSize:'cover'}}>
            <Splitter gutterSize={0} layout="vertical" style={{height:'100vh',backgroundColor:'transparent'}}>
                <SplitterPanel size={30} >
                   
                </SplitterPanel>
                <SplitterPanel size={40}  style={{backgroundColor:'transparent'}}>
                     <Splitter gutterSize={0}   style={{backgroundColor:'transparent'}}>
                    <SplitterPanel size={25}></SplitterPanel>
                    <SplitterPanel size={50} style={{backgroundColor:'#fff',padding:'1em'}}><LoginPage /></SplitterPanel>
                    <SplitterPanel size={25}></SplitterPanel>
                    </Splitter>
                </SplitterPanel>
                <SplitterPanel size={30}>
                   
                </SplitterPanel>
            </Splitter>
            {/* <Header title="My Title" subTitle="My Subtitle" /> */}
           
            {/* <h1>Solved....!!!!</h1> */}
        </div>
    )
}
