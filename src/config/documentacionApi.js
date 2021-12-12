const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Documentation Prueba Ecobot",
            version: "1.0.0"
        },
        servers: [
            {
                url:"http://localhost:7000"
            }
        ]
    },
    apis: ['./src/config/documentacionApi.js']
}

const documents = (app) => {
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)));
}

module.exports = documents;

//Creacion del esquema de la documentacion
/**
 * @swagger
 * components:
 *   schemas:
 *      products:
 *        type: object
 *        properties:
 *          nombre:
 *              type: string
 *              description: Nombre del producto
 *          categoria:
 *              type: string
 *              description: Clasificacion del producto
 *          sabor:
 *              type: string
 *              description: Sabor del producto
 *          precio:
 *              type: number
 *              description: Costo del producto
 *          estado: 
 *              type: boolean
 *              description: Disponibilidad del producto
 *        required:
 *            -nombre
 *            -categoria
 *            -sabor
 *            -precio    
 *        example:
 *              nombre: pera
 *              categoria: frutas
 *              sabor: dulce
 *              precio: 3200
 */

//Creacion del esquema de borrado logico
/**
 * @swagger
 * components:
 *   schemas:
 *      product:
 *        type: object
 *        properties:
 *          estado: 
 *              type: boolean
 *              description: Disponibilidad del producto
 *        required:
 *            -estado    
 *        example:
 *              estado: true
 */


//Endpoint para crear nuevos productos
/**
 * @swagger
 * /api/v1/products:
 *  post:
 *      summary: Create new product
 *      tags: [products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/products'
 *      responses:
 *          200:
 *              description: New product create!
 */

//Endpoint para obtener todos los productos
/**
 * @swagger
 * /api/v1/products:
 *  get:
 *      summary: Return all products
 *      tags: [products]                
 *      responses:
 *          200:
 *              description: All products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/products'
 */


//Obtener una producto mediante el id
/**
 * @swagger
 * /api/v1/products/{id}:
 *  get:
 *      summary: Return a product for identifier unique
 *      tags: [products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: A product
 *      responses:
 *          200:
 *              description: A product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/products'
 *          404:
 *              description: Product not found
 */

//Editar la informacion de un producto
/**
 * @swagger
 * /api/v1/products/{id}:
 *  put:
 *      summary: Update a product
 *      tags: [products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update a product
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/products'
 *      responses:
 *          200:
 *              description: update product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/products'
 *          404:
 *              description: Product not found
 */

//Editar informacion del estado para darle borrado logico
/**
 * @swagger
 * /api/v1/products/{id}:
 *  patch:
 *      summary: Update  estado a product
 *      tags: [products]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update estado a product
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/product'
 *      responses:
 *          200:
 *              description: update product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/product'
 *          404:
 *              description: Product not found
 */