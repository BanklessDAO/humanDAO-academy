import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: '/humanDAO/lesson/what-is-a-blockchain/poap-1ec71b34.png',
    lessonImageLink: '/humanDAO/lesson/what-is-a-blockchain/lesson-1ff9d719.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-a-blockchain/social-1ff9d719.jpg',
    learningActions: '',
    marketingDescription: 'Understand the fundamentals of Blockchain Technology',
    poapEventId: 26971,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand the fundamentals of Blockchain Technology',
    name: 'What is a Blockchain?',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsABlockchain',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '32348c8a437f414881d42ca28b84c1d1',
    slug: 'what-is-a-blockchain',
    imageLinks: [
      '/humanDAO/lesson/what-is-a-blockchain/what-is-bitcoin-3d0c26d9.jpg',
      '/humanDAO/lesson/what-is-a-blockchain/do-you-need-a-third-party-36283a62.jpg',
      '/humanDAO/lesson/what-is-a-blockchain/who-can-see-the-data-with-a-blockchain-ca4af4f3.jpg',
      '/humanDAO/lesson/what-is-a-blockchain/what-can-you-store-on-a-blockchain-8e544f69.jpg',
      '/humanDAO/lesson/what-is-a-blockchain/how-is-a-blockchain-structured-1abb24a3.jpg',
      '/humanDAO/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-b3851b89.jpg',
      '/humanDAO/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-bb38d24f.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '0ca6e1e09fca4f77972efb776ef42000',
        title: 'What is Bitcoin?',
        content: '<img src=\'/humanDAO/lesson/what-is-a-blockchain/what-is-bitcoin-3d0c26d9.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'aedb6d711ed04f8799b8e1ce07b9dc77',
        title: 'Do you need a third party?',
        content: '<div class="bloc1"><p>Earlier, to verify every transaction, we needed a third party.</p><p>With <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>, a third party (like a bank or the government) is not required.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-blockchain/do-you-need-a-third-party-36283a62.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4ccc2e72593444e8bd1b41cf4abf02bd',
        title: 'Knowledge Check',
        quiz: {
          question: 'Do you need a third party to verify blockchain transactions?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          id: 'what-is-a-blockchain-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a5def25f86f740a095d1766e6eb087e0',
        title: 'Who can see the data with a blockchain?',
        content: '<div class="bloc1"><p>In a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>, everyone has access to the same data, so no one party can change or tamper the data without others knowing about it.</p><p>Data contained in a blockchain is therefore secure, transparent and trustworthy.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-blockchain/who-can-see-the-data-with-a-blockchain-ca4af4f3.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '63e9481225c54f458cc816f2f66193fb',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is a blockchain transparent?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'what-is-a-blockchain-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ea984553e2c341faabd2a00ca70696c8',
        title: 'What can you store on a blockchain?',
        content: '<div class="bloc1"><p>Due to its secure nature, blockchain can be used to store anything of value, such as , land records, patents, copyrights, intellectual properties, etc.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-blockchain/what-can-you-store-on-a-blockchain-8e544f69.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '35b418d8839b4da890f28f09ada9ac39',
        title: 'How is a Blockchain structured?',
        content: '<div class="bloc1"><p>In a blockchain, every recorded transaction is store in a block. A block tells us when the data was recorded.</p><p>Each block is linked to another block on the basis of time, forming a chain.</p><p>This is why, the complete set is called a “Blockchain” - a chain, made up of blocks of information.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-blockchain/how-is-a-blockchain-structured-1abb24a3.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ac293bf325a04164bc4aa3128f3fd91a',
        title: 'Knowledge Check',
        quiz: {
          question: 'What are stored in a block?',
          rightAnswerNumber: 2,
          answers: [
            'keys',
            'transactions'
          ],
          id: 'what-is-a-blockchain-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'e17fbf4bd9504ddebf365a9cc7fc0ad1',
        title: 'Popular applications of blockchains are:',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-b3851b89.jpg\'></div><div class="bloc-b"><p>Cryptocurrencies like Bitcoin and Ethereum</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-bb38d24f.jpg\'></div><div class="bloc-b"><p>NFTs</p></div></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-bitcoin/poap-45733d6f.png',
    lessonImageLink: '/humanDAO/lesson/what-is-bitcoin/lesson-fd4e5636.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-bitcoin/social-a4e546c6.jpg',
    learningActions: '',
    marketingDescription: 'A simple guide to the first cryptocurrency: Bitcoin',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A simple guide to the first cryptocurrency: Bitcoin',
    name: 'What is Bitcoin?',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsBitcoin',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '89f42b105087450ebe151faaf2bb4f8a',
    slug: 'what-is-bitcoin',
    imageLinks: [
      '/humanDAO/lesson/what-is-bitcoin/introduction-0e5f7fb7.jpg',
      '/humanDAO/lesson/what-is-bitcoin/who-controls-bitcoin-3b288f4a.jpg',
      '/humanDAO/lesson/what-is-bitcoin/how-is-bitcoin-exchanged-454fd331.jpg',
      '/humanDAO/lesson/what-is-bitcoin/bitcoin-trust-caeffda5.jpg',
      '/humanDAO/lesson/what-is-bitcoin/how-does-bitcoin-work-b71a06c5.jpg',
      '/humanDAO/lesson/what-is-bitcoin/why-is-bitcoin-compared-to-gold-fd301b8e.jpg',
      '/humanDAO/lesson/what-is-bitcoin/end-of-lesson-47b462da.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '11caf4349fbd40ff8c46755ca4a88313',
        title: '<strong>INTRODUCTION</strong>',
        content: '<div class="bloc1"><p>What is Bitcoin?</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-bitcoin/introduction-0e5f7fb7.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '44ebf2534cc245409c6f0c7584f9f2d9',
        title: 'Who Controls Bitcoin?',
        content: '<img src=\'/humanDAO/lesson/what-is-bitcoin/who-controls-bitcoin-3b288f4a.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'cf8f518621674a07934dc949679baed4',
        title: 'How is Bitcoin exchanged?',
        content: '<img src=\'/humanDAO/lesson/what-is-bitcoin/how-is-bitcoin-exchanged-454fd331.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'ea8ac084253c429b8174c1b8e75abd1b',
        title: 'Bitcoin = Trust',
        content: '<img src=\'/humanDAO/lesson/what-is-bitcoin/bitcoin-trust-caeffda5.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '7bef4842ac034e138d187516916e0b8c',
        title: 'How does Bitcoin work?',
        content: '<img src=\'/humanDAO/lesson/what-is-bitcoin/how-does-bitcoin-work-b71a06c5.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '72463025b6bf4880a0ca19723e551571',
        title: 'Why is Bitcoin compared to Gold?',
        content: '<img src=\'/humanDAO/lesson/what-is-bitcoin/why-is-bitcoin-compared-to-gold-fd301b8e.jpg\'>'
      },
      {
        type: 'QUIZ',
        notionId: '429d6bd074ba4914b157ac4b6cbd0e5b',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is the maximum number of Bitcoin that can be in circulation?',
          rightAnswerNumber: 2,
          answers: [
            '11 Million',
            '21 Million',
            '41 Million',
            '61 Million'
          ],
          id: 'what-is-bitcoin-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'cef68464f6ce4e7988b16236b2ac24ab',
        title: 'End of Lesson',
        content: '<img src=\'/humanDAO/lesson/what-is-bitcoin/end-of-lesson-47b462da.jpg\'>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-web3/poap-3c0a5ff6.png',
    lessonImageLink: '/humanDAO/lesson/what-is-web3/lesson-c12ac5cd.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-web3/social-4f66a3b3.jpg',
    learningActions: '',
    marketingDescription: 'An introduction to Web3',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'An introduction to Web3',
    name: 'What is Web3?',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsWeb3',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '8e47339a233c4be3bcc3fef8e3410a6d',
    slug: 'what-is-web3',
    imageLinks: [
      '/humanDAO/lesson/what-is-web3/introduction-5abbfffe.jpg',
      '/humanDAO/lesson/what-is-web3/definition-of-web3-b8dbec59.jpg',
      '/humanDAO/lesson/what-is-web3/what-is-web1-2137b3ad.jpg',
      '/humanDAO/lesson/what-is-web3/comparison-between-web1web2web3-a070b5a6.jpg',
      '/humanDAO/lesson/what-is-web3/what-is-web20-6e95a2be.jpg',
      '/humanDAO/lesson/what-is-web3/the-web3-advantage-86002b4c.jpg',
      '/humanDAO/lesson/what-is-web3/major-advantages-of-web3-d8ade75d.jpg',
      '/humanDAO/lesson/what-is-web3/how-web30-will-impact-society-2714e244.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'e533f0d7c8a7458b8d9aa5cb332ee904',
        title: 'Introduction',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/introduction-5abbfffe.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'de8956ccde6948998e3938aa68fd480a',
        title: 'Definition of Web3',
        content: '<div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/Z0-JpR1IY0I?start=461&feature=oembed&rel=0&start=461\'></iframe></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd60617185237486d939cfb8b5d17aa84',
        title: 'Definition of Web3',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/definition-of-web3-b8dbec59.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'ba0163d567a149f7a43dba7fa59d2c89',
        title: 'What is Web1?',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/what-is-web1-2137b3ad.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '06ae6d89c77f43979af63f1a3e576329',
        title: 'Comparison Between Web1/Web2/Web3',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/comparison-between-web1web2web3-a070b5a6.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '19b6e7e980c440eb815e3d604502e848',
        title: 'What is Web2.0?',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/what-is-web20-6e95a2be.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '751fa47227ab47d490e31be707e5f340',
        title: 'The Web3 Advantage',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/the-web3-advantage-86002b4c.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'ffe7071c45db4aec9abdad96763a37f5',
        title: 'Major Advantages of Web3',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/major-advantages-of-web3-d8ade75d.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '132ee0d3451c4d6e857b3854e1a8b60a',
        title: 'How Web3.0 will impact society',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/how-web30-will-impact-society-2714e244.jpg\'>'
      },
      {
        type: 'QUIZ',
        notionId: 'c51174b3d33e4275bfa43c0807707163',
        title: 'Knowledge Check',
        quiz: {
          question: 'text',
          rightAnswerNumber: null,
          answers: [
            'A',
            'b',
            'c',
            'd'
          ],
          id: 'what-is-web3-1'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-a-smart-contract/poap-99809df1.png',
    lessonImageLink: '/humanDAO/lesson/what-is-a-smart-contract/lesson-0140e924.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-a-smart-contract/social-ac71e9dd.jpg',
    learningActions: '',
    marketingDescription: 'Understand the building block of Web3',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Understand the building block of Web3',
    name: 'What is a Smart Contract?',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsASmartContract',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'a1ed1698f55a43b6aae19e72362deebc',
    slug: 'what-is-a-smart-contract',
    imageLinks: [
      '/humanDAO/lesson/what-is-a-smart-contract/introduction-4ee8dca8.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/definition--8f83a8a0.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-are-self-executing-e2c61da3.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-application-1-a6c9e8dc.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/need-for-a-signature-9e5e196c.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-are-public-documents-4a55b355.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/conclusion-b25f0b76.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/end-of-lesson-1c69bf5d.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '94cee0a1b14d42d58a25bdccf9c2a2fd',
        title: 'Introduction',
        content: '<img src=\'/humanDAO/lesson/what-is-a-smart-contract/introduction-4ee8dca8.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '3198b0131f954267a91f53de673e6aba',
        title: 'Definition ',
        content: '<div class="bloc1"><p>Smart Contracts are similar to the legal contracts of old, but with one major difference - they are written on the blockchain!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-smart-contract/definition--8f83a8a0.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4aaf6f0901574759ad215d2e3ee28840',
        title: 'Smart Contracts are ‘Self-Executing’',
        content: '<img src=\'/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-are-self-executing-e2c61da3.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '446c27a2cbef4279a63d14d01d887117',
        title: 'Smart Contracts: Application #1',
        content: '<img src=\'/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-application-1-a6c9e8dc.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '23f679ee7ecb4bd69791c09b4541cbac',
        title: 'Need for a Signature',
        content: '<img src=\'/humanDAO/lesson/what-is-a-smart-contract/need-for-a-signature-9e5e196c.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'c3c77088746d4aec89eef542f3350993',
        title: 'Smart Contracts are Public Documents',
        content: '<img src=\'/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-are-public-documents-4a55b355.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '336ca90f12384929b1a79771e0f15b72',
        title: 'Conclusion',
        content: '<img src=\'/humanDAO/lesson/what-is-a-smart-contract/conclusion-b25f0b76.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '451fc17dda6b4269892192da2a3c8588',
        title: 'End of Lesson',
        content: '<img src=\'/humanDAO/lesson/what-is-a-smart-contract/end-of-lesson-1c69bf5d.jpeg\'>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-ethereum/poap-05ea8c6a.png',
    lessonImageLink: '/humanDAO/lesson/what-is-ethereum/lesson-f240c65e.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-ethereum/social-30be1fea.jpg',
    learningActions: '',
    marketingDescription: 'A brief introduction to the first smart crypto - Ethereum',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A brief introduction to the first smart crypto - Ethereum',
    name: 'What is Ethereum?',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsEthereum',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'ad2ca6dd8a7948b6af4234c75ffa1a76',
    slug: 'what-is-ethereum',
    imageLinks: [
      '/humanDAO/lesson/what-is-ethereum/introduction-1d544325.jpeg',
      '/humanDAO/lesson/what-is-ethereum/meet-the-founder-8dc18a25.jpeg',
      '/humanDAO/lesson/what-is-ethereum/why-was-ethereum-created-eb6ec420.png',
      '/humanDAO/lesson/what-is-ethereum/what-is-ether-4f2bc61c.jpeg',
      '/humanDAO/lesson/what-is-ethereum/what-is-gas-9c30f6ef.jpeg',
      '/humanDAO/lesson/what-is-ethereum/the-ethereum-ecosystem-07540c31.jpeg',
      '/humanDAO/lesson/what-is-ethereum/example-of-dapps-ec17d521.jpeg',
      '/humanDAO/lesson/what-is-ethereum/end-of-lesson-8a0db880.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '6827a03f690245d187e4dd4a281f260f',
        title: 'Introduction',
        content: '<img src=\'/humanDAO/lesson/what-is-ethereum/introduction-1d544325.jpeg\'><p>Testing Module Ethereum</p>'
      },
      {
        type: 'LEARN',
        notionId: 'ba446a10c6b94a6f835cb5f79e4afd80',
        title: 'Meet the Founder!',
        content: '<div class="bloc1"><p>Vitaly Dmitriyevich \'Vitalik\' Buterin is a Canadian programmer and writer who is best known as one of the co-founders of Ethereum. Buterin became involved with cryptocurrency early in its inception, co-founding Bitcoin Magazine in 2011</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/meet-the-founder-8dc18a25.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ac2e35af9782413b80a403cbda971d05',
        title: 'Why Was Ethereum created?',
        content: '<div class="bloc1"><p>Ethereum allows people to interact with people. It solves other problems too, but for me this is the big one- it solves the problem of <strong>indirect digital interactions.</strong></p><p>It allows people to interact directly with each other digitally by allowing applications to exist without any central servers or central company.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/why-was-ethereum-created-eb6ec420.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7b2d85b5f4c64e30abfe2cd05cadd99f',
        title: 'What is Ether?',
        content: '<div class="bloc1"><p>Ether is used <strong>to pay for transaction fees and computational services.</strong></p><p>Users can send Ether to other users, and developers can write smart contracts that receive, hold, and send Ether. Ether comes into existence by the validation of transactions on the Ethereum platform, through a process called mining.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/what-is-ether-4f2bc61c.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '448523c07ae341d29ccf27d919e05c56',
        title: 'What is “Gas”?',
        content: '<div class="bloc1"><p>On the Ethereum blockchain, gas refers to <strong>the cost necessary to perform a transaction on the network. </strong></p><p><em>Miners set the price of gas based on supply and demand for the computational power of the network needed to process smart contracts and other transactions.</em></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/what-is-gas-9c30f6ef.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '3eaee644407e4facb3b1285bb5977467',
        title: 'The Ethereum Ecosystem',
        content: '<div class="bloc1"><p>Ethereum ecosystem is an ever growing one. Ethereum is <strong>a decentralized platform with its own /blockchain. </strong></p><p>Ethereum is an entire ecosystem where everyone can build various distributed applications (Dapp), smart contracts and even own cryptocurrencies. </p><p>All of these aim to be safe to use and reliable, and there is no need for middlemen such as banks or agencies.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/the-ethereum-ecosystem-07540c31.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '752116869a9e4ef2a8309b4175ddf1f5',
        title: 'Example of Dapps:',
        content: '<div class="bloc1"><p>A decentralised application is an application that can operate autonomously, typically through the use of smart contracts, that runs on a decentralized computing, blockchain or other distributed ledger system. </p><p>Like traditional applications, DApps provide some function or utility to its users.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/example-of-dapps-ec17d521.jpeg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '263459f6527c4d82b6d2e13bc1af0de8',
        title: 'Knowledge Check',
        quiz: {
          question: 'Ethereum is the first blockchain with ___________',
          rightAnswerNumber: 2,
          answers: [
            ' Faster Speed',
            'Smart Contracts',
            'NFTs',
            'Tokens'
          ],
          id: 'what-is-ethereum-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'afc1d0dccb444107871081e8e7aa0c7d',
        title: 'End of Lesson',
        content: '<div class="bloc1"><p>Through its ground-breaking combination of features like smart contracts, Ethereum is used for a variety of innovative applications in <em><strong>finance, web browsing, gaming, advertising, identity management, and supply chain management</strong></em><br></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/end-of-lesson-8a0db880.jpeg\'></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-defi/poap-0f81c025.png',
    lessonImageLink: '/humanDAO/lesson/what-is-defi/lesson-89e40db8.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-defi/social-c0198426.jpg',
    learningActions: '',
    marketingDescription: 'Under the basics of Decentralized Finance',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Under the basics of Decentralized Finance',
    name: 'What is Defi',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsDefi',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'c55b77e9f16c48dfbee36861f1002e62',
    slug: 'what-is-defi',
    imageLinks: [
      '/humanDAO/lesson/what-is-defi/what-is-defi-c0c0afc8.jpg',
      '/humanDAO/lesson/what-is-defi/what-problem-does-defi-aim-to-solve-14b11369.jpg',
      '/humanDAO/lesson/what-is-defi/how-does-defi-improve-the-current-financial-system-8a97767b.jpg',
      '/humanDAO/lesson/what-is-defi/applications-of-defi-429e5ab5.jpg',
      '/humanDAO/lesson/what-is-defi/a-look-at-the-defi-ecosystem-aa12f90c.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '5428201f0c58406f8d25960efdabbdb0',
        title: 'What is DeFi?',
        content: '<img src=\'/humanDAO/lesson/what-is-defi/what-is-defi-c0c0afc8.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '797042e3c5654c889f90837717c47887',
        title: 'What problem does DeFi aim to solve?',
        content: '<div class="bloc1"><p>DeFi creates a new infrastructure parallel to the existing banking systems</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-defi/what-problem-does-defi-aim-to-solve-14b11369.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5c9d242a5bff4cfd90c5ea973609d308',
        title: 'How does DeFi improve the current Financial System?',
        content: '<div class="bloc1"><p>DeFi brings the power of blockchain in Finance, thus paving way for greater transparency</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-defi/how-does-defi-improve-the-current-financial-system-8a97767b.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '93eb571dc5034f7ea4c6a3bfabd9799b',
        title: 'Applications of DeFi',
        content: '<div class="bloc1"><p>While Defi is at a nascent phase, multiple applications of DeFi has already hit the markets</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-defi/applications-of-defi-429e5ab5.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'bdf1761737da4a23aa8453bcb3bae8bf',
        title: 'A look at the DeFi Ecosystem',
        content: '<div class="bloc1"><p>The DeFi Ecosystme is growing at a break-neck pace. Below illustration catalogues the emerging players in the DeFi space.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-defi/a-look-at-the-defi-ecosystem-aa12f90c.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '69f8a5975b0a42ab8e016ddfdf367f19',
        title: 'Quiz on Defi',
        quiz: {
          question: 'DeFi can potentially replace?',
          rightAnswerNumber: 3,
          answers: [
            'Investment Banks',
            'Stock Markets',
            'Private Banks',
            'Reserve Banks'
          ],
          id: 'what-is-defi-1'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-are-nfts/poap-ee0c2b31.png',
    lessonImageLink: '/humanDAO/lesson/what-are-nfts/lesson-110e24cc.jpg',
    socialImageLink: '/humanDAO/lesson/what-are-nfts/social-92104899.jpg',
    learningActions: '',
    marketingDescription: 'Under the basics of Non-Fungible Tokens',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Under the basics of Non-Fungible Tokens',
    name: 'What are NFTs?',
    module: 'crypto-101',
    quest: 'humanDAOWhatAreNFTs',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'cedfb1cc1ceb4f2091b3a1d7196d9b54',
    slug: 'what-are-nfts',
    imageLinks: [
      '/humanDAO/lesson/what-are-nfts/what-are-nfts-74dd1b3f.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-85bd69cd.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-bceb2573.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-c18971e3.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-b92ee72b.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-57d8a6d9.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-7a0def5e.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-55e4a48b.jpeg',
      '/humanDAO/lesson/what-are-nfts/title-fa198398.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '704bea59d03d4fdcb7d07c497523c7d4',
        title: 'What are NFTs?',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/what-are-nfts-74dd1b3f.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'a19ae37e21194bc5a6ae386579571bd4',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-85bd69cd.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'f985652b4f66427e80baf7880b57a536',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-bceb2573.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '15c22aad9ccd4d959fcace8805977f38',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-c18971e3.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '86e57d5b952f4c14a02094a613b0431b',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-b92ee72b.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '5166cb3da712488ea7e73c16f44f2e17',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-57d8a6d9.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'ab6d8a7a0f93434badacd4f11a80024b',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-7a0def5e.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '7c78a2b4715b4b7589df103fe8cb8113',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-55e4a48b.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'bd0adf12466a40baa9df2e858957eb20',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-are-nfts/title-fa198398.jpeg\'>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-the-metaverse/poap-fa38a56e.png',
    lessonImageLink: '/humanDAO/lesson/what-is-the-metaverse/lesson-f1e5d953.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-the-metaverse/social-03b042fc.jpg',
    learningActions: '',
    marketingDescription: 'A brief journey to the enigmatic Metaverse!',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A brief journey to the enigmatic Metaverse!',
    name: 'What is the Metaverse?',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsTheMetaverse',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '74052fbd16e7404ab20531dc7a3b1c9a',
    slug: 'what-is-the-metaverse',
    imageLinks: [
      '/humanDAO/lesson/what-is-the-metaverse/introduction-7645ff4c.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/what-is-the-metaverse-a3e73be8.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/title-7ed04570.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/title-b0928dd8.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/title-da47138a.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/title-72ff4f97.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/title-6ee34eb4.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '5afa37858ee84367a3ed974cbedb0ca0',
        title: 'Introduction',
        content: '<img src=\'/humanDAO/lesson/what-is-the-metaverse/introduction-7645ff4c.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'aa9853c53cf0488691168ae995124cf8',
        title: 'What is the Metaverse?',
        content: '<img src=\'/humanDAO/lesson/what-is-the-metaverse/what-is-the-metaverse-a3e73be8.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '570c4362a91c41569d3cc66ebd3c1520',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-the-metaverse/title-7ed04570.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'b5fef56e93ba4217887eccec357eec7e',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-the-metaverse/title-b0928dd8.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '9425ba098fbe456683e8a13be01debd5',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-the-metaverse/title-da47138a.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '8f686db52a314592974495364d2a5d51',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-the-metaverse/title-72ff4f97.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'ae2121e67c4d4c7d93880c2708eb510e',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-the-metaverse/title-6ee34eb4.jpeg\'>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-a-dao/poap-82ee2263.png',
    lessonImageLink: '/humanDAO/lesson/what-is-a-dao/lesson-115fb7b4.jpg',
    socialImageLink: '/humanDAO/lesson/what-is-a-dao/social-71c98165.jpg',
    learningActions: '',
    marketingDescription: 'Understand the fundamentals of the new kind of organization structure made possible by Blockchain',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Understand the fundamentals of the new kind of organization structure made possible by Blockchain',
    name: 'What is a DAO?',
    module: 'crypto-101',
    quest: 'humanDAOWhatIsADAO',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '9621d67b42744b96bc03e839aa7904cf',
    slug: 'what-is-a-dao',
    imageLinks: [
      '/humanDAO/lesson/what-is-a-dao/what-is-a-dao-4a71516e.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-61165314.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-33230006.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-9bea025d.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-ea2a918d.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-3227182d.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-b6cac4e1.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-c468d8c3.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-4a36c39f.jpeg',
      '/humanDAO/lesson/what-is-a-dao/title-4f986534.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'd2200070d68d4ff9a37439d1b4b3c0e7',
        title: 'What is a DAO?',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/what-is-a-dao-4a71516e.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '447274efe38a4ab28ae4f05ff2937403',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-61165314.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '7071ce39091040acb37b5ffb8f44251c',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-33230006.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'f48ed78ca970495a8a149b5a6a8055b5',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-9bea025d.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '35c4543e465b4109ae1f2f8d39ea6209',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-ea2a918d.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '31d3552ae2eb4bedac1240f66911b54e',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-3227182d.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'fe0166772e324ad0b972cbf2ac84cf24',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-b6cac4e1.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '593af1541eae46298598b95bbd6bf89e',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-c468d8c3.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '3636f2aa30fa465ca5857d39402fc28b',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-4a36c39f.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '1f87ee45ba6340cab6e5c17a1b761ee3',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/title-4f986534.jpeg\'>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/humandao-an-introduction/poap-298f271c.png',
    lessonImageLink: '/humanDAO/lesson/humandao-an-introduction/lesson-1085399e.jpg',
    socialImageLink: '/humanDAO/lesson/humandao-an-introduction/social-77276034.jpg',
    learningActions: '',
    marketingDescription: 'A brief guide to the DAO with a simple mission - Improving Lives Through Crypto',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A brief guide to the DAO with a simple mission - Improving Lives Through Crypto',
    name: 'HumanDAO: An Introduction',
    module: 'humandao-101',
    quest: 'humanDAOHumanDAOAnIntroduction',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '7bac5a1ae55e46b6a9258da0664a1241',
    slug: 'humandao-an-introduction',
    imageLinks: [
      '/humanDAO/lesson/humandao-an-introduction/humandao-an-introduction-23d1d93b.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-1ac1d964.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-810916ee.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-a7acb717.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-974b752c.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-f1708f75.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-0042f6c5.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-763d915a.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-df702714.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-4fff843e.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-cb24d9d0.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-f96ed33e.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/title-68f6d494.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'e9632d47bd7146e0b72bac3cea25e969',
        title: 'HumanDAO: An Introduction',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/humandao-an-introduction-23d1d93b.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'cb96a7295dcd4f3ba81af27f9bb345ca',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-1ac1d964.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '8b71956536ac4323893bd7bf5bfa5943',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-810916ee.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '907d0fdf408046c985cb8edc8d7f5e31',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-a7acb717.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'a0d60cded06b4ceeaafc9c74f0b29b48',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-974b752c.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '16d8d79aad204f31972ae34685d0138b',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-f1708f75.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '9d01d9ab0eba4b039512009d425c87ee',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-0042f6c5.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'f24c8312096c4bbda2295f146d0fbb9e',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-763d915a.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'f49d8a68b989409d9c24e664d90df65a',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-df702714.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '3ce6bbbb27244074b5d4195269248d3d',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-4fff843e.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: '91af0cb325cc4990bef0e1aa55de2d52',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-cb24d9d0.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'b264a648106c444380fff54e6cde92c1',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-f96ed33e.jpeg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'bd58de5422074e0d889eb61d3f7e57c8',
        title: 'title',
        content: '<img src=\'/humanDAO/lesson/humandao-an-introduction/title-68f6d494.jpeg\'>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/financial-literacy-101/poap-63e65847.jpg',
    lessonImageLink: '/humanDAO/lesson/financial-literacy-101/lesson-7bcb46a8.jpg',
    socialImageLink: '/humanDAO/lesson/financial-literacy-101/social-c39ade19.jpg',
    learningActions: '',
    marketingDescription: 'This module covers the basic concepts of Financial Literacy',
    poapEventId: null,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'This module covers the basic concepts of Financial Literacy',
    name: 'Financial Literacy 101',
    quest: 'humanDAOFinancialLiteracy101',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: 'How did you like the module? What more would you like to learn? Put your suggestions in the comments!',
    notionId: '4ea9b2c3e52246269a0573bd051e3b4d',
    slug: 'financial-literacy-101',
    imageLinks: [
      '/humanDAO/lesson/financial-literacy-101/why-is-it-important-to-learn-financial-literacy-2d9dbeff.jpg',
      '/humanDAO/lesson/financial-literacy-101/why-is-it-important-to-learn-financial-literacy-d453524d.jpg',
      '/humanDAO/lesson/financial-literacy-101/what-happens-due-to-lack-of-financial-literacy-4af6cee8.jpg',
      '/humanDAO/lesson/financial-literacy-101/major-pillars-of-financial-literacy-8ea023e6.jpg',
      '/humanDAO/lesson/financial-literacy-101/pillar-1-earn-57f279c9.jpg',
      '/humanDAO/lesson/financial-literacy-101/pillar-2-spend-9bb90495.jpg',
      '/humanDAO/lesson/financial-literacy-101/pillar-3-save-and-invest-1be53149.jpg',
      '/humanDAO/lesson/financial-literacy-101/pillar-4-borrow-3f7af051.jpg',
      '/humanDAO/lesson/financial-literacy-101/pillar-5-protect-35d8709a.jpg',
      '/humanDAO/lesson/financial-literacy-101/financial-literacy-at-humandao-77c83cc1.jpg',
      '/humanDAO/lesson/financial-literacy-101/self-assessment-ad02cd83.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '8b03a8edaccb44228ff03906bc5a4335',
        title: '<strong>Why is it important to Learn Financial Literacy?</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/why-is-it-important-to-learn-financial-literacy-2d9dbeff.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'cb174387ae9044178438a193137e4b90',
        title: '<strong>Why is it important to Learn Financial Literacy:</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/why-is-it-important-to-learn-financial-literacy-d453524d.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '0b38521286c640f28f7b352beb58bc59',
        title: 'What happens due to lack of Financial Literacy?',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/what-happens-due-to-lack-of-financial-literacy-4af6cee8.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '45fa000e9a584fa19bc3cb96c4cdb74b',
        title: 'Major <strong>Pillars of Financial Literacy</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/major-pillars-of-financial-literacy-8ea023e6.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '5ef22610912c4ef18076b8cd44d4828a',
        title: '<strong>Pillar 1: Earn</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/pillar-1-earn-57f279c9.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '8a57706cd2774a88bfc842ff5c7a09ad',
        title: '<strong>Pillar 2: Spend</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/pillar-2-spend-9bb90495.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'f01449b632e7447794ba12f26b98520c',
        title: '<strong>Pillar 3: Save and Invest</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/pillar-3-save-and-invest-1be53149.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '2010412afd8e4c32a9fda29558baabe1',
        title: '<strong>Pillar 4: Borrow</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/pillar-4-borrow-3f7af051.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '6e5700b8e4a24029abd79e1f41d6601b',
        title: '<strong>Pillar 5: Protect</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/pillar-5-protect-35d8709a.jpg\'>'
      },
      {
        type: 'QUIZ',
        notionId: '5de3e9a2376f4f0d8007ac376bac4c9d',
        title: 'Fact Check',
        quiz: {
          question: 'Chose the right equation:',
          rightAnswerNumber: 2,
          answers: [
            'Income - Expense = Savings',
            'Income - Savings = Expenses',
            'Both are wrong',
            'Both are right'
          ],
          id: 'financial-literacy-101-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '4705a9d0dd98482fb59a775b77cf2e36',
        title: 'Financial Literacy at HumanDAO',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/financial-literacy-at-humandao-77c83cc1.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '8ca34f91481342d797759561ef3501ab',
        title: '<strong>Self-Assessment</strong>',
        content: '<img src=\'/humanDAO/lesson/financial-literacy-101/self-assessment-ad02cd83.jpg\'>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/wallet-basics/poap-ad0be5c6.png',
    lessonImageLink: '/humanDAO/lesson/wallet-basics/lesson-34e08540.jpg',
    socialImageLink: '/humanDAO/lesson/wallet-basics/social-56c9ce5b.jpg',
    learningActions: '',
    marketingDescription: 'Learn how to create and manage a wallet securely.',
    poapEventId: null,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    module: 'crypto-101',
    quest: 'humanDAOWalletBasics',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '8e45589f9cb54504bcf0a8327b796cc3',
    slug: 'wallet-basics',
    imageLinks: [
      '/humanDAO/lesson/wallet-basics/wallet-intro-78ae543b.png',
      '/humanDAO/lesson/wallet-basics/wallet-definition-c9e479d9.png',
      '/humanDAO/lesson/wallet-basics/recovery-phrase-6864d822.png',
      '/humanDAO/lesson/wallet-basics/public-key-2d27c83d.png',
      '/humanDAO/lesson/wallet-basics/private-key-96e1e6e2.png',
      '/humanDAO/lesson/wallet-basics/custodial-wallet-4f0798e2.png',
      '/humanDAO/lesson/wallet-basics/non-custodial-wallet-85c99fdc.png',
      '/humanDAO/lesson/wallet-basics/hot-wallet-3b03f7cc.png',
      '/humanDAO/lesson/wallet-basics/cold-wallet-7b978092.png',
      '/humanDAO/lesson/wallet-basics/metamask-wallet-9edbeea1.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'e32e616adfd847a8900d398a9a474d4e',
        title: 'Wallet Intro',
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to Bankless Academy. We’re excited to guide you on your journey into Web3. To get started, you will need some essential equipment: a digital wallet.</p><p>A digital wallet is your passport to exploring the various worlds of Web3. This tool grants you access to incredible new possibilities while safeguarding your assets and identity.</p><p>In this lesson, we’ll introduce you to digital wallets, how they work, and how to set yours up to safely embark on your Web3 journey.</p><p>Let’s get started!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/wallet-intro-78ae543b.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '72c3e439698a403aa73ca6c3db182146',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>.</p><p>Your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/wallet-definition-c9e479d9.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '24b3910ddbb841f88eeb86508495a007',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a wallet?',
          rightAnswerNumber: 4,
          answers: [
            'A device equipped with RFID technology',
            'A velcro bi-fold device',
            'An account that protects my assets',
            'An app or device used to interact with a blockchain'
          ],
          id: 'wallet-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ec1bba6be18d4d31a80bbd35cbd71742',
        title: 'Recovery Phrase',
        content: '<div class="bloc1"><p>When you set up a new <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, the software generates a unique recovery phrase that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phrase</em>, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the public key and private key for your wallet.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/recovery-phrase-6864d822.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd102d2cc3ed64759ab8235c36a0a87ac',
        title: 'Knowledge Check',
        quiz: {
          question: 'What can you do with your recovery phrase?',
          rightAnswerNumber: 3,
          answers: [
            '[A] Recover your wallet if lost, stolen, or damaged',
            '[B] Access your wallet on multiple devices',
            '[C] Both A & B',
            '[D] None of the above'
          ],
          id: 'wallet-basics-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '33f6e11ad7e642d9b8dbe4ccae690972',
        title: 'Public Key',
        content: '<div class="bloc1"><p>You just learned how your recovery phrase relates to a public key and private key.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a public key like your home address. It is public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/public-key-2d27c83d.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ce266730dded4a12aa06744b08d604ea',
        title: 'Private Key',
        content: '<div class="bloc1"><p>If your public key is like your home address, then your private key is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/private-key-96e1e6e2.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a5079b7f3520485191a2a04e1d7b8d96',
        title: 'Knowledge Check',
        quiz: {
          question: 'Your public key is like your _____ and your private key is like your _____',
          rightAnswerNumber: 2,
          answers: [
            'Routing Number / Account Number',
            'Home address / House key',
            'Address / Zip code',
            'Phone Number / Social Security Number'
          ],
          id: 'wallet-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '19d5c88153564a729854cabf870173fc',
        title: 'Custodial Wallet',
        content: '<div class="bloc1"><p>Since your private key unlocks access to your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, keeping it private and secure is very important!</p><p>Not all wallets let you control your private key. With a custodial wallet, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Plus, your access to the world of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> applications will be limited. </p></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/custodial-wallet-4f0798e2.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8e561e756255466bb6ea6cb1daa00651',
        title: 'Knowledge Check',
        quiz: {
          question: 'Do you control your private key with a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '6f7ad720c09e4b3c894955db87eb27cd',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>Your passport to the exciting worlds of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> and Web3—and the best way to safeguard your private key is a non-custodial wallet. </p><p>Remember: if you lose your private key, you will not be able to access your wallet to spend, withdraw, or transfer your crypto assets.</p><p>Fortunately, you <em>can</em> still recover your wallet with your recovery phrase. But if you lose that too, you will lose access to your wallet FOREVER!!!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/non-custodial-wallet-85c99fdc.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9d3aabacba65457ab9548c6663915296',
        title: 'Knowledge Check',
        quiz: {
          question: 'Are you responsible for your private key with a non-custodial wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '8f2c1e19125b437083d8eaf604961c77',
        title: 'Wallet Security',
        content: '<div class="bloc1"><h2>ALWAYS do this to protect your recovery phrase:</h2><p>✅ write it down</p><p>✅ use a durable material</p><p>✅ store it in a safe place</p><h2>NEVER do this to protect your recovery phrase:</h2><p>🛑 save your recovery in an online drive</p><p>🛑 screenshot your private key</p><p>🛑 reveal your recovery key to anyone</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'dccb00f2c1214c9a962a1a27638b10ee',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is the safest way to protect your recovery phrase?',
          rightAnswerNumber: 4,
          answers: [
            'Save it on your computer and print it out.',
            'Take a screenshot and save it on your phone.',
            'Save it in your Dropbox account.',
            'Write it on a durable material and store it in a safe place.'
          ],
          id: 'wallet-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f8523bb3d7df45609c1b93514af689a7',
        title: 'Hot Wallet',
        content: '<div class="bloc1"><p>There are two major types of non-custodial wallets: software wallets (also called hot wallets) and hardware wallets (also called cold wallets)</p><p>A software wallet is an app or browser extension that remains connected to the internet.</p><ul><li>PROS 👍: It is usually free, simple to set up, and easy to use.</li><li>CONS 👎: Because it is software connected to the internet, it\'s potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/hot-wallet-3b03f7cc.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'cd8734d3ff474e5d98558f8f8d4b13df',
        title: 'Cold Wallet',
        content: '<div class="bloc1"><p>A cold wallet, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure from threats like hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/cold-wallet-7b978092.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0ea96ebf19ee431a9d015647b8cccf72',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is a cold wallet more secure than a hot wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '54f6a256d26b478cadcf14e29dc8c266',
        title: 'MetaMask Wallet',
        content: '<div class="bloc1"><p>There are several non-custodial hot wallets available today. We will explore the popular MetaMask Wallet for the remainder of this lesson since:</p><ul><li>It is likely to be compatible with most <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/wallet-basics/metamask-wallet-9edbeea1.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c43d2fed4ac74fdebfe4c98e29634a60',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is MetaMask a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-8'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  }
]

export default LESSONS
