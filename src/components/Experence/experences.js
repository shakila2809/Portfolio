import React, {Component} from 'react'
import {Element} from'react-scroll';
import "./experences.css"
import Modal from "react-modal";


class Experences extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false
           
          };
    }

    toggleModal(e) {
        this.setState ({
            isOpen: true
        } )
    }

    handleClose(e){
        this.setState ({
            isOpen: false
        } )

    }


    
      
    
    
    render(){
        return (
            <Element className="Experence_container" name="experence">
                <div className="container_block">
                <Modal isOpen={this.state.isOpen}>
                    <h1>sample</h1>
                </Modal>
               
               
                <div className="box">
                    <span></span>
                    <div className="content">
                    <h2>Web Developer</h2>
                    <p>Certified in Html, CSS, React, nodejs, mongodb.</p>
                    <button onClick={e=>this.toggleModal()} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Edit</button>
                    </div>
                    
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                    <h2>Technocal copyeditor</h2>
                    <p>Extensive experience in performing typesetting to ensure that written text is 
                        concise, consistent, grammatically & factually correct.</p>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                    <h2>Proofreader</h2>
                    <p>Expertise in epub based proofing skills. Analysing manuscript with specification and solve the techincal problem on it.</p>
                    </div>
                </div>
                </div>
    
            </Element>
            
        );

    }
    
}

export default Experences
