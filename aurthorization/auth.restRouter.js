import express from "express";
import {
    getStudents,
    getEditStudents,
    studentInsert,
    studentUpdate,
    studentDelete
} from './auth.controller'
export const authRouter = express.Router();

authRouter.get('/getStudents', getStudents);
authRouter.get('/getEditStudents', getEditStudents);
authRouter.post('/studentInsert', studentInsert);
authRouter.post('/studentUpdate', studentUpdate);
authRouter.post("/studentDelete", studentDelete);
