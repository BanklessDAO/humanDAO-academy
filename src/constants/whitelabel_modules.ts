import { ModuleType } from 'entities/module'

const MODULES: ModuleType[] = [
  {
    name: 'Crypto 101',
    description: 'This module covers the basic concepts in Crypto.',
    slug: 'crypto-101',
    moduleImageLink: '/humanDAO/module/crypto-101.png',
    submodules: [
      {
        name: 'What are Blockchains?',
        description:
          'This module explains some of the popular blockchains and how they work.',
        slug: 'crypto-101-what-are-blockchains',
        moduleImageLink: '/humanDAO/module/crypto-101-what-are-blockchains.png',
      },
      {
        name: 'What is Web3?',
        description: 'This module takes a deep dive into the features of Web3.',
        slug: 'crypto-101-what-is-web3',
        moduleImageLink: '/humanDAO/module/crypto-101-what-is-web3.png',
      },
      {
        name: 'What is a Crypto Wallet?',
        description:
          'This module explains how to setup and use a Crypto Wallet.',
        slug: 'crypto-101-what-is-a-crypto-wallet',
        moduleImageLink:
          '/humanDAO/module/crypto-101-what-is-a-crypto-wallet.png',
      },
    ],
  },
  {
    name: 'humanDAO',
    description:
      'This module takes a deep-dive on humanDAO and the community roles.',
    slug: 'humandao',
    moduleImageLink: '/humanDAO/module/humandao.png',
  },
  {
    name: 'Financial Literacy',
    description:
      'This module provides a snapshot about the concept of Financial Literacy.',
    slug: 'financial-literacy',
    moduleImageLink: '/humanDAO/module/financial-literacy.png',
  },
]

export default MODULES
