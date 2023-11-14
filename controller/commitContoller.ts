import { Request, Response } from "express"
import commitModel from "../model/commitModel"

export const create = async (req: Request, res: Response) =>{
    try {
        const {task, onGoing, done} =req.body

        const data = await commitModel.create({task,onGoing, done})

        return res.status(200).json({
            message: "Created",
            data: data
        })
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}
export const readAll = async (req: Request, res: Response) =>{
    try {
        const {task} =req.body

        const data = await commitModel.find()

        return res.status(200).json({
            message: "Created",
            data: data
        })
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}
export const read = async (req: Request, res: Response) =>{
    try {
        const {task} =req.body
        const {taskID} = req.params 

        const data = await commitModel.findById({taskID})

        return res.status(200).json({
            message: "Created",
            data: data
        })
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}