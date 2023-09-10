"use client"
import React, { FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { Login } from './../../services/User';
import { createRoom, joinRoom } from './../../services/Room';
import Notification from './../../components/notification';

const Page: React.FC = () => {
  const router = useRouter();
  const [create, setCreate] = React.useState(false)
  const [error, setError] = React.useState('')

  const handleSubmitLogin =async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      const formData = new FormData(e.currentTarget);
      const formValues: { [key: string]: string } = {};
      // Extract form values from FormData
      formData.forEach((value, key) => {
        formValues[key] = value.toString();
      });
      if(create){
        await Login(formValues.username)
        await createRoom(formValues.roomName, formValues.username)
      }else{
        await Login(formValues.username)
        await joinRoom( formValues.roomName)
      }
      router.push('/') 
    } catch (error: any) {
      console.log(error);
      setError('Something went wrong! try again');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="col-md-6">
        <h2 className="text-center mb-4 text-white">Login Mamalon 😎</h2>
        <div className="text-white d-flex justify-content-end">
        <Form.Check
          onChange={() => { setCreate(!create) }}
          type="switch"
          checked={create}
          label="Create"
          />
        </div>
        
        <Form className='mb-5' onSubmit={ handleSubmitLogin}>
          <Form.Group controlId="RoomName">
            <Form.Label className="text-white">Room Name</Form.Label>
            <Form.Control
              name='roomName'
              placeholder="Enter the most dank room name ever"
              required
              autoComplete='false'
              className="bg-dark text-white"
            />
          </Form.Group>
          <Form.Group controlId="formUsername" className='mt-1'>
            <Form.Label className="text-white">Planeswalker name</Form.Label>
            <Form.Control
              name='username'
              placeholder="Enter username... this will be your enter key so take it serius pls"
              required
              autoComplete='false'
              className="bg-dark text-white"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className='mt-5'>
            Boton para ingresar a la maldita pagina 😘
          </Button>
        </Form>

        <Notification type='danger' show={error.length > 0} text={error} ></Notification>
      </div>
    </div>
  );
};

export default Page;
