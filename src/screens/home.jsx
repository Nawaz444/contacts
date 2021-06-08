/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 

 

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: '',
            title:'',
          
        };
        this.addNew = this.addNew.bind(this);
        this.mynotes = this.mynotes.bind(this);
     
        
    }
    
    async componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const queryParams = qs.parse(search.slice(1));
        if (queryParams.admissionsId); {
            const { data } = await axios.get(`http://localhost:4000/contact/${queryParams.contactId}`);
            this.setState({
                contactId: queryParams.contactId,
                note: data.value.note,
                title:data.value.title,
               
            });
        }
    }
   
   async mynotes(){

    const { history } = this.props;
        history.push('/Display');
    }

  async addNew() {
    
    const {note,title} = this.state;
    await axios.post('http://localhost:4000/contact', { note,title });
    
};


    render() {

        return (
            <div>
                 <AppBar position="static">
                    <Toolbar>   
                    
                   
                 
                    <Typography variant="h6" >
                    contact
                     </Typography>
                    
                  </Toolbar>
              </AppBar>
           
                 <input
                    type="text"
                    placeholder=" Title"
                    onChange={(event) => this.setState((prev) => ({
                        
                        title: event.target.value,
                    }))}
                />
                      <textarea
                    placeholder="note"
                    rows="30"
                    cols="100"
                    onChange={(event) => this.setState((prev) => ({
                        note: event.target.value,
                        
                    }))}
                />
                
                <button type="button" onClick={this.addNew}>save note</button>
                <button type="button" onClick={this.mynotes}>saved notes</button>
             
            </div>
        );
    }
}


export default withRouter(home);
