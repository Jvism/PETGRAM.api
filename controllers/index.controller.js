import { response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '124',
    database: 'refugioMascotas',
    port: '5432'
})

// select todas las mascotas
const getPets = (req,res) => {
    pool.query('SELECT * FROM mascota')
        .then(response => res.json(response.rows))
        .catch(err => console.log(err))
}

// select mascota por id
const getPetById = (req,res) => {
    
    const id = req.params.id;

    pool.query(`SELECT * FROM mascota WHERE id = ${id}`)
    .then(response => res.json(response.rows[0]) )
    .catch(err => console.log(err))
}

// select todos los tipos de mascotas
const getTypes = (req,res) => {
    pool.query('SELECT * FROM tipo_animal ORDER BY nombre')
        .then(response => res.json(response.rows))
        .catch(err => console.log(err))
}

// select mascotas por tipo
const getTypeById = (req,res) => {

    const type = req.params.type;

    pool.query(`SELECT * FROM mascota WHERE tipo = ${type}`)
        .then(response => res.json(response.rows))
        .catch(err => console.log(err))
}

const newPet = (req,res) => {

    const {nombre, tipo, urlimg } = req.body;

    pool.query(`INSERT INTO mascota(nombre, tipo, urlimg) VALUES('${nombre}','${tipo}','${urlimg}')`)
        .then(response => res.send('Mascota agregada'))
        .catch(err => console.log(err))
}

const deletePet = (req,res) => {

    const id = req.params.id;

    pool.query(`DELETE FROM mascota WHERE id = ${id}`)
    .then(response => res.send('Mascota eliminada'))
    .catch(err => console.log(err))
}

const updatePet = (req,res) => {

    const id = req.params.id;
    const {nombre, tipo, urlimg } = req.body;

    pool.query(`UPDATE mascota SET nombre = '${nombre}', tipo = '${tipo}', urlimg = '${urlimg}' WHERE id = ${id} `)
        .then(response => res.json('Mascota actualizada'))
        .catch(err => console.log(err))
}


module.exports = {
    getPets,
    getPetById,
    newPet,
    deletePet,
    updatePet,
    getTypes,
    getTypeById
}