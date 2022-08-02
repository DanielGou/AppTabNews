import { publishedAt } from "../publishedAt";

describe('publishedAt', () => {
    it('should return 1 minute ago', () => {
        let result = publishedAt(new Date('2022-06-28T17:28:11.679Z'), new Date('2022-06-28T17:29:11.679Z'));

        expect(result).toBe('1 minuto atrás')
    })

    it('should return 1 hour ago', () => {
        let result = publishedAt(new Date('2022-06-28T16:29:11.679Z'), new Date('2022-06-28T17:29:11.679Z'));

        expect(result).toBe('1 hora atrás')
    })

    it('should return 1 day ago', () => {
        let result = publishedAt(new Date('2022-06-27T16:29:11.679Z'), new Date('2022-06-28T17:29:11.679Z'));

        expect(result).toBe('1 dia atrás')
    })

    it('should return an message when the published_at param is bigger on then actualDate', () => {
        let result = publishedAt(new Date('2022-06-29T16:29:11.679Z'), new Date('2022-06-28T17:29:11.679Z'));

        expect(result).toBe('Do you have a time machine? published_at is bigger on then actualDate')
    })

    it('should return 0 minuto atrás', () => {
        let result = publishedAt(new Date('2022-06-28T17:29:11.679Z'), new Date('2022-06-28T17:29:11.679Z'));

        expect(result).toBe('0 minuto atrás')
    })

    it("should return a error msg when don't pass params", () => {
        let result = publishedAt();

        expect(result).toBe('published_at is a mandatory parameter')
    })

    it('should return a error msg when one of the params is invalid', () => {
        let result = publishedAt('2022-06-28T17:29:11.679Z');

        expect(result).toBe('the parameters do not have a Date type')
    })
})
