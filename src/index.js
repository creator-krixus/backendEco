const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
const apiRouter = require('../src/products/router/router');
const connection = require('../src/config/connectionDB');
const documents = require('../src/config/documentacionApi')
const cors = require('cors');
const helmet = require('helmet')

app.set('port', process.env.PORT || 7000);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet())

documents(app)
connection(app);
apiRouter(app);



app.listen(app.get('port'), () => 
    console.log(`Server running on port ${app.get('port')}`)
)