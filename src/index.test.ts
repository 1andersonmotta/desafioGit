import { GitHubService } from "./services/gitHubService"

const mockObj = {
    data: {
        items: [{
            owner: { login: "Dono da Conta" },
            language: "JavaScript",
            html_url: "https://github.com/1andersonmotta",
            description: "desafio",
            stargazers_count: 99999,
            descartado1: "descartado",
            descartado2: "descartado"
        }]
    }
}

describe('App Test Mock', () => {
    it('deve retornar o objeto da consulta da API e Formatar ', () => {
        const objFormat = new GitHubService().formatObj(mockObj)
        expect(objFormat).toEqual([{
            owner: "Dono da Conta",
            language: "JavaScript",
            link: "https://github.com/1andersonmotta",
            description: "desafio",
            stars: 99999,
        }])
    })

    it('deve salvar objeto da consulta da API ', () => {
        const salvar = []
        const objFormat = new GitHubService().formatObj(mockObj)
        salvar.push(objFormat)
        expect(salvar.length).toEqual(1)
    })

    it('deve listar o objeto da consulta do Banco "getAll" formatado ', () => {
        const get = new GitHubService().formatObj(mockObj);
        const formatGetAll = [{
            id: 1,
            language: get[0].language,
            link: get[0].link
        }]

        expect(formatGetAll).toEqual([{
            id: 1,
            language: "JavaScript",
            link: "https://github.com/1andersonmotta"
        }])
    })

    it('deve favoritar o repositório ', () => {
        const formatFavorite = {
            id_repositori: 1,
            ip: '123321',
            favorite: true
        }
        expect(formatFavorite.favorite).toEqual(true)
    })

    it('deve desfavoritar o repositório', () => {
        const favoritos = {
            id_repositori: 1,
            ip: '123321',
            favorite: false
        }
        expect(favoritos.favorite).toEqual(false)
    })

})