import { readFile, writeFile } from 'fs/promises';
import { randomBytes } from 'crypto';

export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        return JSON.parse(contents);
    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        const id = randomBytes(5).toString('hex');
        messages[id] = { id, content };
        await writeFile('messages.json', JSON.stringify(messages));
    }
}