import { Router } from 'express'
import {getbooks} from '../controller/book_controller.js'

let Bookrouter=Router();
Bookrouter.get('/',getbooks);
export default Bookrouter;