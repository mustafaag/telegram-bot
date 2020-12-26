import axios from 'axios';
import React, {useState} from 'react'
import { MESSAGE_LIST_API, SEND_MESSAGE_API } from "../api-constants";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export const  ChatList = () =>{

    const [messageList, setMessageList] = useState([]);
    
    axios.get(MESSAGE_LIST_API).then(resp =>{
        if(resp.status === 200 && resp.data){
            setMessageList(resp.data.result)
        }
    }).catch(err => {
        console.error(err);
    })
    const classes = useStyles();

    const sendMessage = (chatId: number) =>{
        // TODO send api
        axios.get(SEND_MESSAGE_API(chatId, 'hello <br/> World')).then(resp =>{
            if(resp.status === 200 && resp.data){
                console.log("succesfull");
            }
        }).catch(err => {
            console.error(err);
        })
        console.log();
    } 
    const renderMessageList = () => {        
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Group ID</TableCell>
                        <TableCell align="left">Group Name</TableCell>
                        <TableCell align="left">Send Message</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {messageList.map((message: any) => (
                        <TableRow key={message.update_id}>
                            <TableCell component="th" scope="row">
                                {message.update_id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {message.message.chat.title}
                            </TableCell>
                            <TableCell align="right">
                            <Button variant="contained" color="primary" onClick={() => { sendMessage(message.message.chat.id) }}>
                                Send Message
                            </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
   
    return (       
        <div>
            
            {renderMessageList()}
        </div>
    )
}
