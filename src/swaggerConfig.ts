import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Mapa Sentimentos',
      version: '1.0.0',
      description: 'um projeto criado para monitorar o sentimentos diarios',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/*.ts'], 
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerUi, swaggerSpec };
