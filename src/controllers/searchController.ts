import {Request , Response} from 'express'
import { PetS } from '../helpers/pet'
import { createMenuObject } from '../helpers/createMenuObjects'


export const search = (req:Request, res:Response) =>{

    let query: string = req.query.q as string
    let list = PetS.getFromName(query)

    res.render('pages/pages',{
        list  
    })
}