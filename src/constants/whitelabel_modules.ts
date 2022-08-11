import { ModuleType } from 'entities/module'

const MODULES: ModuleType[] = [
  {
    name: 'Crypto Wallet',
    moduleImageLink: '/humanDAO/module/crypto-wallet-f068aa4a.png',
    description: 'This module explains how to setup and use a Crypto Wallet.',
    slug: 'crypto-wallet',
    moduleId: 'f686aa87be9644788ab424f7e472ed38',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Crypto 101',
    moduleImageLink: '/humanDAO/module/crypto-101-ea338c43.png',
    description: 'This module covers the basic concepts in Crypto.',
    slug: 'crypto-101',
    moduleId: '81de713b4f9f4008bbdcb6333400daae',
    parentModule: null,
    subModules: [
      '59e5eee1c08541118e7c1db6895fd63d',
      '40959b191fcc4b058e3e8049410013f9'
    ]
  },
  {
    name: 'What are Blockchains?',
    moduleImageLink: '/humanDAO/module/what-are-blockchains-b43ef8ac.png',
    description: 'This module explains some of the popular blockchains and how they work.',
    slug: 'what-are-blockchains',
    moduleId: '59e5eee1c08541118e7c1db6895fd63d',
    parentModule: '81de713b4f9f4008bbdcb6333400daae',
    subModules: []
  },
  {
    name: 'What is Web3?',
    moduleImageLink: '/humanDAO/module/what-is-web3-b664b503.png',
    description: 'This module takes a deep dive into the features of Web3.',
    slug: 'what-is-web3',
    moduleId: '40959b191fcc4b058e3e8049410013f9',
    parentModule: '81de713b4f9f4008bbdcb6333400daae',
    subModules: []
  },
  {
    name: 'humanDAO',
    moduleImageLink: '/humanDAO/module/humandao-b5213c7b.png',
    description: 'This module takes a deep-dive on humanDAO and the community roles.',
    slug: 'humandao',
    moduleId: 'cd36caed3ea74782a356bd02f28179bc',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Financial Literacy',
    moduleImageLink: '/humanDAO/module/financial-literacy-0f219d47.png',
    description: 'This module provides a snapshot about the concept of Financial Literacy.',
    slug: 'financial-literacy',
    moduleId: 'eec24eea0e8048c29623a8a2cccd0d33',
    parentModule: null,
    subModules: []
  }
]

export default MODULES
