import { createClient } from 'next-sanity'

export const config = {
    dataset: 'production',
    projectId: 'bd6tqs3y',
    apiVersion: '2021-03-25',
    token: 'skDtmQtfgF4G6tSZ8EwfziPywliMYkphj4fjth0vh1RP4RyOFhioBpgo3k1QbmEQV2GcUsfp8QT4UZvoisytNpmNtP04Sod4IAycNz6weDalKqalEq2gBZGN8BUm7ZnJHxlttVz63xcCAZA3ZNSETED44aQYh5FAqalfQZ5WJkmUVuyQDnGr',
    useCdn: false
}

export const sanityClient = createClient(config)