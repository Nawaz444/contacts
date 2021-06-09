/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const useStyles = {
    table: {
        minWidth: 0,
    },
};

class main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contacts: [],
        };
        this.deletecontact = this.deletecontact.bind(this);
        
        this.applynow = this.applynow.bind(this);
        
        
    }

    async componentDidMount() {
        this.fetch();
    }

    async fetch() {
        const { data } = await axios.get('http://localhost:3000/contacts');
        this.setState({ contacts: data, isLoading: false });
    }

    async deletecontact(contactsId) {
        await axios.delete(`http://localhost:3000/contacts/${contactsId}`);
        await this.fetch();
    }
    updatcontact(contactsId) {
        const { history } = this.props;
        history.push(`/page/?contactsId=${contactsId}`);
    }

    applynow() {
        
            
        const { history } = this.props;
        history.push('/home');
    }
    deletecontact() {
        
            
        const { history } = this.props;
        history.push('/Display');
    }
    
    

    render() {
        const { classes } = this.props;
        const { contacts, isLoading } = this.state;

        if (isLoading === true) {
            return <h1>Loading...</h1>;
        }

      
        return (
            
   
    <div className={classes.root}>
      <AppBar position="static"> <Typography variant="h4" >Contact Numbers              
                         <Button variant="contained"onClick={this.applynow} color="secondary">
               Add new contact</Button><button type="button" onClick={this.deletecontact}>Delete Contact </button>
               </Typography>              
            
               </AppBar>
               
     
                  <TableContainer component={Paper}> 
                    <Table className={classes} aria-label="simple table">
                        
                            <TableRow>
                                
                            </TableRow>
                    
                        <TableBody>
                            {contacts.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.number}</TableCell>
                                    <TableCell align="left"> 
                                       
                                      
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
                      
          
             </div>  
        );
    }
}

export default withRouter(withStyles(useStyles)(main));

    