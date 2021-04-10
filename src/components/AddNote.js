import React, { useState } from 'react';
import axios from 'axios';

import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

import { NOTES_URL } from '../api/constants';
import { getConfig } from '../utils/getConfig';
import { ErrorHandler } from '../utils/ErrorHandler';
import { VscNewFile } from 'react-icons/vsc';

function AddNote() {
  const generateBoardID = () => {
    var ref = window.firebase.database().ref();
    ref = ref.push();
    const boardID = '/#' + ref.key;
    return boardID;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        NOTES_URL,
        {
          title: state.title,
          description: state.description,
          boardID: generateBoardID(),
        },
        getConfig()
      )
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(ErrorHandler(err));
      });

    handleClose();
  };

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        style={{ textAlign: 'center', alignSelf: 'center' }}
      >
        Make new notes <VscNewFile />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size='sm' className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='inputGroup-sizing-sm'>Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id='title'
              aria-label='Small'
              aria-describedby='inputGroup-sizing-sm'
              value={state.title}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup size='sm'>
            <InputGroup.Prepend>
              <InputGroup.Text>Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id='description'
              as='textarea'
              aria-label='With textarea'
              value={state.description}
              onChange={handleChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddNote;
