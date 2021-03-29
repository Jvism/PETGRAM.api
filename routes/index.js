import { Router } from 'express';
import { getPets, newPet, getPetById, deletePet, updatePet, getTypes, getTypeById } from '../controllers/index.controller';


const router = Router();

router.get('/mascotas', getPets )

router.get('/mascotas/:id', getPetById )

router.post('/mascotas', newPet )

router.delete('/mascotas/:id', deletePet )

router.put('/mascotas/:id', updatePet)

router.get('/tipos', getTypes )

router.get('/tipos/:type', getTypeById )

module.exports = router;