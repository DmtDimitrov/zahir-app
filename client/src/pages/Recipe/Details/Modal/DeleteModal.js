import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RecipeContext } from '../../../../contexts/RecipeContext';

export default function DeleteModal() {
  const { deleteRecipeHandler, show, handleClose, handleShow} = useContext(RecipeContext);

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this recipe?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => deleteRecipeHandler(e)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


