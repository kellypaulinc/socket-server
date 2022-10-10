import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'GET:: Todo está bien!!'
    })
})

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de,
        message: 'POST:: Todo está bien!!'
    })
})


router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id,
        message: 'POST:: Todo está bien!!'
    })
})


export default router;