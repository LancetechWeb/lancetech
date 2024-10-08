import { Response } from "express";

interface ResponseObject {
    [key: string]: any;
}

/**
 * 
 * @param res, Response
 * @param statusCode, number 
 * @param responseObj, ResponseObject 
 * @returns 
 */
export const handleHttpStatus = (res: Response, statusCode: number, responseObj?: ResponseObject) => {
    switch (statusCode) {
        case 200:
            return res.status(200).send( { message: 'OK', ...responseObj });
        case 201:
            return res.status(201).send( { message: 'Created', ...responseObj });
        case 204:
            return res.status(204).send();
        case 400:
            return res.status(400).send(  { message: 'Bad Request', ...responseObj });
        case 401:
            return res.status(401).send(  { message: 'Not Authorized', ...responseObj });
        case 403:
            return res.status(403).send( { message: 'Forbidden', ...responseObj });
        case 404:
            return res.status(404).send(  { message: 'Not Found', ...responseObj });
        case 422:
            return res.status(422).send(  { message: 'Unprocessable Entity', ...responseObj });
        case 500:
            return res.status(500).send(  { message: 'Internal Server Error', ...responseObj });
        case 502:
            return res.status(502).send(  { message: 'Bad Gateway', ...responseObj });
        case 503:
            return res.status(503).send(  { message: 'Service Unavailable', ...responseObj });
        default:
            return res.status(500).send(  { message: 'Unknown Error', ...responseObj });
    }
};
