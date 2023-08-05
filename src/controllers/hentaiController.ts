import * as akaneko from 'akaneko';
import { Response } from 'express';

async function getMaidHentai(_: any, res: Response): Promise<Response> {
    try {
        const hentai = await akaneko.nsfw.maid();
        return res.status(200).send(hentai);
    } catch(err) {
        console.log(`Error in getMaidHentai at ${new Date} ERROR: `, err);
        return res.status(500).send("Internal Server Error");
    }
}

export { getMaidHentai };
