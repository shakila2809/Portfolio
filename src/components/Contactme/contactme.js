
import React, { Component } from 'react'
import './contactme.css'
import Popup from "./popup"
import axios from "axios"

export default class form extends Component {

    constructor(props){
        super(props)
        this.state={

            name :"",
            email :"",
            message:"",
            sent : false,
            showpopup : false

        }
    }

    handleFullname = e =>{
        this.setState({
            name : e.target.value
        })
    }

    handleemail = e =>{
        this.setState({
            email : e.target.value
        })
    }

    handlemessage = e =>{
        this.setState({
            message : e.target.value
        })
    }

    handlesubmit = async e => {
        e.preventDefault()
        // console.log(this.state)
        // this.setState({
        //     showpopup: true,
        //     sent: true,
        // })
        await axios.post("/api/sendEmail", this.state).then(res =>{
            this.setState({
                sent: true
            })
        }).then(()=>this.setState({
            showpopup: true
        })).catch(()=> this.setState({
            showpopup: true
        }))

        
    }

    resetFrom = () => {

        this.setState({
            name:" ",
            email:" ",
            message:" ",
            sent: false,
            showpopup: false
        })

    }




    render() {
        return (
            <>
            <div className="container">
                <form action="" onSubmit={this.handlesubmit}>
                    <label className="Lable">Name</label><br/>
                    <input type="text"  placeholder="Name*" required onChange={this.handleFullname} value={this.state.name}/><br/>

                    <label className="Lable">Email</label><br/>
                    <input type="email" placeholder="Enter emial" required onChange={this.handleemail} value={this.state.email}/><br/>

                    <label  className="Lable">Subject</label><br/>
                    <textarea className="text" type="text" placeholder="Write something.." required onChange={this.handlemessage} value={this.state.message}></textarea><br/>
                    <input type="submit" value="Submit"/><br/>
                </form>
            </div>
            {
                this.state.sent && this.state.showpopup ? <Popup msg = "Message has been sent succesfully!!!" resetfrom = {this.resetFrom}/> : this.state.showpopup ? <Popup msg = " Message has not been sent something went wrong"
                resetfrom = {this.resetFrom} /> : null
            }
            </>
        )
    }
}

