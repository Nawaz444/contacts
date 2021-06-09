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
            name: '',
            number:'',
          
        };
        this.addNew = this.addNew.bind(this);
        this.mycontact = this.mycontact.bind(this);
     
        
    }
    
    async componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const queryParams = qs.parse(search.slice(1));
        if (queryParams.admissionsId); {
            const { data } = await axios.get(`http://localhost:3000/contacts/${queryParams.contactId}`);
            this.setState({
                contactId: queryParams.contactId,
                name: data.value.name,
                number:data.value.number,
               
            });
        }
    }
   
   async mycontact(){

    const { history } = this.props;
        history.push('/');
    }

  async addNew() {
    
    const {name,number} = this.state;
    await axios.post('http://localhost:3000/contacts', { name,number });
    
};


    render() {

        return (
            <div>
                 <AppBar position="static">
                    <Toolbar>   
                    
                   
                 
                    <Typography variant="h6" >
                    Create A Contact  <button type="button" onClick={this.mycontact}>contact list</button>
                     </Typography>
                    
                  </Toolbar>
              </AppBar>
           
                 <input
                    type="text"
                    placeholder=" name"
                    onChange={(event) => this.setState((prev) => ({
                        
                        name: event.target.value,
                    }))}
                />
                <input
                    type="text"
                    placeholder=" number"
                    onChange={(event) => this.setState((prev) => ({
                        
                        number: event.target.value,
                    }))}
                />
                     
                
                <button type="button" onClick={this.addNew}>save contact</button>
               
             
            </div>
        );
    }
}


export default withRouter(home);
