import { Schema,Document, model } from "mongoose";

interface iProps {
    task: string;
    onGoing: string;
    done: boolean;
} 

interface iCommit extends iProps, Document{}

const commit = new Schema<iCommit>({
    task:{
        type: String
    },
    onGoing:{
        type: String
    },
    done:{
        type: Boolean
    },
},{timestamps: true});

export default model<iCommit>("task", commit)