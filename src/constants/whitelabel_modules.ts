import { ModuleType } from 'entities/module'

const MODULES: ModuleType[] = [
  {
    name: 'Crypto Wallet',
    moduleImageLink: '/humanDAO/module/crypto-wallet-d576733e.png',
    description: 'This module explains how to setup and use a Crypto Wallet.',
    slug: 'crypto-wallet',
    moduleId: 'f686aa87be9644788ab424f7e472ed38',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Crypto 101',
    moduleImageLink: '/humanDAO/module/crypto-101-bd829855.png',
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
    moduleImageLink: '/humanDAO/module/what-are-blockchains-b2720112.png',
    description: 'This module explains some of the popular blockchains and how they work.',
    slug: 'what-are-blockchains',
    moduleId: '59e5eee1c08541118e7c1db6895fd63d',
    parentModule: '81de713b4f9f4008bbdcb6333400daae',
    subModules: []
  },
  {
    name: 'What is Web3?',
    moduleImageLink: '/humanDAO/module/what-is-web3-78493fae.png',
    description: 'This module takes a deep dive into the features of Web3.',
    slug: 'what-is-web3',
    moduleId: '40959b191fcc4b058e3e8049410013f9',
    parentModule: '81de713b4f9f4008bbdcb6333400daae',
    subModules: []
  },
  {
    name: 'humanDAO',
    moduleImageLink: '/humanDAO/module/humandao-7b671f0f.png',
    description: 'This module takes a deep-dive on humanDAO and the community roles.',
    slug: 'humandao',
    moduleId: 'cd36caed3ea74782a356bd02f28179bc',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Financial Literacy',
    moduleImageLink: '/humanDAO/module/financial-literacy-a92130de.png',
    description: 'This module provides a snapshot about the concept of Financial Literacy.',
    slug: 'financial-literacy',
    moduleId: 'eec24eea0e8048c29623a8a2cccd0d33',
    parentModule: null,
    subModules: []
  },
  {
    name: 'Web3 Opportunities',
    moduleImageLink: '/humanDAO/module/web3-opportunities-6313e6f8.png',
    description: 'This module explores opportunities in tech and non-tech web3 roles',
    slug: 'web3-opportunities',
    moduleId: '5e498e97002548969806ab63e57d1e20',
    parentModule: null,
    subModules: [
      '86834c89c79c427a92e6133422ba976c'
    ]
  },
  {
    name: 'Community Support',
    moduleImageLink: '/humanDAO/module/community-support-98af065b.png',
    description: 'This module serves as a training ground for a web3 support role',
    slug: 'community-support',
    moduleId: '86834c89c79c427a92e6133422ba976c',
    parentModule: '5e498e97002548969806ab63e57d1e20',
    subModules: []
  }
]

export default MODULES
