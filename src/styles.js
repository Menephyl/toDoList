import styled from 'styled-components'
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
export const Container = styled.div`
background:linear-gradient(90deg,#383838 0%,#000000 81.25%);

width:100vw;
height: 100vh;
display: flex;
justify-content:center;
align-items: center;
`

export const ToDoList = styled.div`
background:white;
padding: 30px 20px;
width:500px;
height: 458px;
top:196px;
left:449px;
border-radius: 10px;


`


export const Input = styled.input`
width: 340px;
height: 40px;
top: 30px;
left: 20px;
border-radius: 5px;
border-width: 2px;
margin-right: 15px;


`

export const Button = styled.button`
width: 120px;
height: 30px;
top: 30px;
left: 390px;
border-radius: 2px;
background: #8052EC;
color:white;
font-weight: 700;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
}

`

export const ListItem =styled.div`
background-color:${props=> props.isFinished ? 'lightblue' :'#E4E4E4'};
box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
border-radius:5px;
height: 60px;
  margin-left: -40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;

ul{
    padding:0px;
    margin-top: 60px;
}


    li{
        list-style: none;
        padding:0;
      
    }
`

export const Trash = styled(FcEmptyTrash)`

cursor: pointer;
`


export const Check = styled(FcCheckmark)`

cursor:pointer;
`

export const Aviso = styled.h3`
background:red;
text-align: center;
width: 100%;
height: auto;
padding: 0;
margin: 0;
color: white;




`

