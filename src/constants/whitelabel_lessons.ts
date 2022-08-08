import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: '/humanDAO/lesson/what-are-blockchains/poap-75963a31.png',
    lessonImageLink: '/humanDAO/lesson/what-are-blockchains/lesson-1ff9d719.jpg',
    socialImageLink: '/humanDAO/lesson/what-are-blockchains/social-1ff9d719.jpg',
    learningActions: '',
    marketingDescription: 'Understand the fundamentals of Blockchain Technology',
    poapEventId: 26971,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand the fundamentals of Blockchain Technology',
    name: 'What are Blockchains?',
    moduleId: '59e5eee1c08541118e7c1db6895fd63d',
    quest: 'humanDAOWhatAreBlockchains',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '32348c8a437f414881d42ca28b84c1d1',
    slug: 'what-are-blockchains',
    imageLinks: [
      '/humanDAO/lesson/what-are-blockchains/what-is-a-blockchain-36283a62.jpg',
      '/humanDAO/lesson/what-are-blockchains/what-makes-blockchain-different-ca4af4f3.jpg',
      '/humanDAO/lesson/what-are-blockchains/how-is-a-blockchain-structured-1abb24a3.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '70d664a8b0e143ec8a83fff88cba9e24',
        title: 'What is a blockchain?',
        content: '<div class="bloc1"><p>A blockchain is a public ledger that contains records of transactions.</p><p>Previously, to verify every transaction, we needed a third party.</p><p>With <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>, a third party (like a bank or the government) is not required.</p><p><span class=\'color-red\'>The transactional history that is stored on a blockchain can be viewed with block explorers such as Etherscan.</span></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-are-blockchains/what-is-a-blockchain-36283a62.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a5def25f86f740a095d1766e6eb087e0',
        title: 'What makes blockchain different?',
        content: '<div class="bloc1"><p>In a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>, everyone has access to the same data, so no singular party can change or tamper with the data without others knowing about it.</p><p>Data contained in a blockchain is therefore secure, transparent and trustworthy.</p><p><span class=\'color-red\'>Once a transaction is recorded on a blockchain, it can never be removed. This, in part, is what makes blockchain tech so desirable. This allows items of value, </span>such as land records, patents, copyrights and intellectual properties, to be stored on the blockchain forever.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-are-blockchains/what-makes-blockchain-different-ca4af4f3.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '35b418d8839b4da890f28f09ada9ac39',
        title: 'How is a Blockchain structured?',
        content: '<div class="bloc1"><p>In a blockchain, every recorded transaction is stored in a block. A block tells us when the data was recorded.</p><p>Each block is linked to another block, forming a chain.</p><p>This is why, the complete set is called a “Blockchain” - a chain, made up of blocks of information.</p><p>Some popular blockchain applications are cryptocurrencies like Bitcoin and Ethereum, which are considered fungible assets. <span class=\'color-red\'>This means, that like a dollar bill, if you swapped one for another, you will still own something of the same value.</span> This is in contrast to non-fungible tokens (NFTs).</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-are-blockchains/how-is-a-blockchain-structured-1abb24a3.jpg\'></div>'
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
          id: 'what-are-blockchains-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '63e9481225c54f458cc816f2f66193fb',
        title: 'Knowledge Check',
        quiz: {
          question: '<strong>What is a blockchain miner?</strong>',
          rightAnswerNumber: 4,
          answers: [
            'A type of blockchain',
            'An algorithm that predicts the next part of the chain',
            'A person doing calculations to verify a transaction',
            'Computers that validate and process blockchain transactions'
          ],
          id: 'what-are-blockchains-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'ac293bf325a04164bc4aa3128f3fd91a',
        title: 'Knowledge Check',
        quiz: {
          question: '<strong>Where is a Blockchain’s central server?</strong>',
          rightAnswerNumber: 3,
          answers: [
            'Where the blockchain is created',
            'Located with the owner of the server',
            'There is no central server, it is distributed',
            'Ordered Node'
          ],
          id: 'what-are-blockchains-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-bitcoin/poap-db64c7ea.png',
    lessonImageLink: '/humanDAO/lesson/what-is-bitcoin/lesson-3a86e4a9.png',
    socialImageLink: '/humanDAO/lesson/what-is-bitcoin/social-1d80ca25.png',
    learningActions: '',
    marketingDescription: 'A simple guide to the first cryptocurrency: Bitcoin',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A simple guide to the first cryptocurrency: Bitcoin',
    name: 'What is Bitcoin?',
    moduleId: '59e5eee1c08541118e7c1db6895fd63d',
    quest: 'humanDAOWhatIsBitcoin',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '89f42b105087450ebe151faaf2bb4f8a',
    slug: 'what-is-bitcoin',
    imageLinks: [
      '/humanDAO/lesson/what-is-bitcoin/what-is-bitcoin-454fd331.jpg',
      '/humanDAO/lesson/what-is-bitcoin/how-does-bitcoin-work-b71a06c5.jpg',
      '/humanDAO/lesson/what-is-bitcoin/why-is-bitcoin-compared-to-gold-fd301b8e.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '11caf4349fbd40ff8c46755ca4a88313',
        title: 'What is Bitcoin?',
        content: '<div class="bloc1"><p>One might ask, “how is Bitcoin exchanged?”. The most common ways would include P2P wallet transfers, exchange transfers & Over the counter deals (OTC’s) </p><p>As Bitcoin ($BTC) was created in the blockchain and cannot be manipulated by third parties, it means it is not subject to hindrances that traditional currencies are subjected to, such as inflation.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-bitcoin/what-is-bitcoin-454fd331.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7bef4842ac034e138d187516916e0b8c',
        title: 'How does Bitcoin work?',
        content: '<div class="bloc1"><p>The underlying technology of Bitcoin is called ‘peer-to-peer’ which means information is exchanged directly between two computers. Each ‘peer’ gets a reward to participate.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-bitcoin/how-does-bitcoin-work-b71a06c5.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '72463025b6bf4880a0ca19723e551571',
        title: 'Why is Bitcoin compared to Gold?',
        content: '<div class="bloc1"><p>There are only ever going to be 21 million Bitcoins that can ever be mined. Since it is scarce, it is valuable. Like Gold.</p><p>Although there are many questions as to the sustainability of using BTC transactions as a means of an everyday currency, mainly for its heavy environmental cost. We are beginning to see countries with weaker economies, such as El Salvador begin to invest and take BTC as legal tender</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-bitcoin/why-is-bitcoin-compared-to-gold-fd301b8e.jpg\'></div>'
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
        type: 'QUIZ',
        notionId: 'a3e991607c3e465b9ef8d36591929faf',
        title: 'Knowledge Check',
        quiz: {
          question: '<strong>Bitcoin is based on _________ blockchain.</strong>',
          rightAnswerNumber: 2,
          answers: [
            'Private',
            'Public',
            'Public Permissioned',
            'Permissioned'
          ],
          id: 'what-is-bitcoin-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '4aaa268ab2a04a378d4334c95bb4c797',
        title: 'Knowledge Check',
        quiz: {
          question: '<strong>Bitcoin is a solution to the double-spend problem?</strong>',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False',
            'Sometimes',
            'None of the above'
          ],
          id: 'what-is-bitcoin-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-ethereum/poap-325e1b2c.png',
    lessonImageLink: '/humanDAO/lesson/what-is-ethereum/lesson-8ffd6db6.png',
    socialImageLink: '/humanDAO/lesson/what-is-ethereum/social-b06ddfdc.png',
    learningActions: '',
    marketingDescription: 'A brief introduction to the first smart crypto - Ethereum',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A brief introduction to the first smart crypto - Ethereum',
    name: 'What is Ethereum?',
    moduleId: '59e5eee1c08541118e7c1db6895fd63d',
    quest: 'humanDAOWhatIsEthereum',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'ad2ca6dd8a7948b6af4234c75ffa1a76',
    slug: 'what-is-ethereum',
    imageLinks: [
      '/humanDAO/lesson/what-is-ethereum/meet-the-founder-of-ethereum-8dc18a25.jpeg',
      '/humanDAO/lesson/what-is-ethereum/why-was-ethereum-created-eb6ec420.png',
      '/humanDAO/lesson/what-is-ethereum/what-is-ether-4f2bc61c.jpeg',
      '/humanDAO/lesson/what-is-ethereum/what-is-gas-9c30f6ef.jpeg',
      '/humanDAO/lesson/what-is-ethereum/the-ethereum-ecosystem-07540c31.jpeg',
      '/humanDAO/lesson/what-is-ethereum/example-of-dapps-ec17d521.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'cce324f6575e411bae2c2dd34d0e09d7',
        title: 'Meet the founder of Ethereum',
        content: '<div class="bloc1"><p>Ethereum was created in 2013 by Vitalik Buterin. </p><p>Vitaly Dmitriyevich \'Vitalik\' Buterin is a Canadian programmer and writer who is best known as one of the co-founders of Ethereum. </p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/meet-the-founder-of-ethereum-8dc18a25.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ac2e35af9782413b80a403cbda971d05',
        title: 'Why Was Ethereum created?',
        content: '<div class="bloc1"><p><span class=\'color-red\'>While Bitcoin was created to challenge traditional currencies, it left a large gap within the decentralised movement. Ethereum was created as a smart-contract enabled blockchain, that allowed people to begin building permissionless ecosystems</span></p><p>Ethereum lets people interact directly with each other digitally, by allowing applications to exist without any central servers or a central company to coordinate the interactions.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/why-was-ethereum-created-eb6ec420.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7b2d85b5f4c64e30abfe2cd05cadd99f',
        title: 'What is Ether?',
        content: '<div class="bloc1"><p>Ethereum’s native token is called Ether ($ETH) and it is the second most popular cryptocurrency after Bitcoin.</p><p>Ether is used <strong>to pay for transaction fees and computational services in the form of gas fees.</strong></p><p>Users can send Ether to other users, and developers can write smart contracts that receive, hold, and send Ether. </p><p>Ether comes into existence by the validation of transactions on the Ethereum platform, through a process called<strong> mining. </strong></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/what-is-ether-4f2bc61c.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '448523c07ae341d29ccf27d919e05c56',
        title: 'What is “Gas”?',
        content: '<div class="bloc1"><p>When making a transaction in the Ethereum blockchain, one has to pay a transaction cost in ether - it’s called “gas fees”.</p><p>On the Ethereum blockchain, gas refers to <strong>the cost necessary to perform a transaction on the network. </strong></p><p><em>Miners set the price of gas based on supply and demand for the computational power of the network needed to process smart contracts and other transactions.</em></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/what-is-gas-9c30f6ef.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '3eaee644407e4facb3b1285bb5977467',
        title: 'The Ethereum Ecosystem',
        content: '<div class="bloc1"><p>Ethereum is an entire ecosystem where everyone can build various distributed applications (Dapp), smart contracts and even own cryptocurrencies. </p><p>Its ecosystem is an ever-growing one. Ethereum is <strong>a decentralized platform with its own blockchain. </strong><span class=\'color-red\'>Today a large amount of Dapps are built on Ethereum, making it the largest ecosystem in Web3.</span></p><p><span class=\'color-red\'>Other competitor smart-contract blockchains (also known as Layer 1s or L1s) include Polkadot, Cardano, Solana and Avalanche.</span></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/the-ethereum-ecosystem-07540c31.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '752116869a9e4ef2a8309b4175ddf1f5',
        title: 'Example of Dapps:',
        content: '<div class="bloc1"><p>A decentralised application is an application that can operate autonomously, typically through the use of smart contracts, that runs on a decentralized computing, blockchain or other distributed ledger system. </p><p>Like traditional applications, DApps provide some function or utility to its users.</p><p>Some examples of Dapps built on Ethereum are:</p><ol><li>Opensea (an NFT Marketplace)</li><li>Uniswap (for Token Swapping)</li><li>Compound (for Lending/Borrowing)</li><li>Axie Infinity (for Gaming)</li></ol><p>Through its ground-breaking combination of features like smart contracts, Ethereum is used for a variety of innovative applications in <em><strong>finance, web browsing, gaming, advertising, identity management, and supply chain management.</strong></em></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-ethereum/example-of-dapps-ec17d521.jpeg\'></div>'
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
        type: 'QUIZ',
        notionId: 'e880a1ee21b5401199c37383b9967b01',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is ‘gas’?',
          rightAnswerNumber: 2,
          answers: [
            'The cost of generating a correct block hash',
            'A way of pricing transactions based on their computational complexity',
            'A measurement of how many nodes are attached to the network',
            'How much power the network has securing it in Giga Hashes'
          ],
          id: 'what-is-ethereum-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'f1380e3af25a4c128f1ffdb7d95a06b5',
        title: 'Knowledge Check',
        quiz: {
          question: 'What powers the Ethereum Virtual Machine?',
          rightAnswerNumber: 1,
          answers: [
            'Gas',
            'Ether',
            'Bitcoin',
            'Block Rewards'
          ],
          id: 'what-is-ethereum-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-a-smart-contract/poap-31dbf81d.png',
    lessonImageLink: '/humanDAO/lesson/what-is-a-smart-contract/lesson-9a460e00.png',
    socialImageLink: '/humanDAO/lesson/what-is-a-smart-contract/social-5a1642d9.png',
    learningActions: '',
    marketingDescription: 'Understand the building block of Web3',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Understand the building block of Web3',
    name: 'What is a Smart Contract?',
    moduleId: '59e5eee1c08541118e7c1db6895fd63d',
    quest: 'humanDAOWhatIsASmartContract',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'a1ed1698f55a43b6aae19e72362deebc',
    slug: 'what-is-a-smart-contract',
    imageLinks: [
      '/humanDAO/lesson/what-is-a-smart-contract/what-are-smart-contracts-8f83a8a0.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-are-self-executing-e2c61da3.jpeg',
      '/humanDAO/lesson/what-is-a-smart-contract/what-are-the-use-cases-of-smart-contracts-b25f0b76.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '5640c1ab0bf5473f92c3fb210cceacea',
        title: 'What are smart contracts?',
        content: '<div class="bloc1"><p>Smart Contracts are similar to the legal contracts of old, but with one major difference - they are written on the blockchain!</p><p>A contract is a legal document that enforces involved parties to agree to a set of instructions.</p><p>A smart contract does the same, only the task of enforcement is not done by law, but by blockchain.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-smart-contract/what-are-smart-contracts-8f83a8a0.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4aaf6f0901574759ad215d2e3ee28840',
        title: 'Smart Contracts are ‘Self-Executing’',
        content: '<div class="bloc1"><p>In a Smart Contract, a program executes code on the blockchain each time specified conditions are met.</p><p>Every smart contract requires parties to provide a digital signature. This can be done through in-browser wallets like MetaMask, or multi-sig vaults like Gnosis safe.</p><p>These contracts are public documents visible to all. All smart contracts on the Ethereum blockchain can be seen on Etherscan.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-smart-contract/smart-contracts-are-self-executing-e2c61da3.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b2e4379b911147fa8c53f5c89ee51b96',
        title: 'What are the use cases of smart contracts?',
        content: '<div class="bloc1"><p>Smart Contracts can be made for something as simple as sending money to minting an NFT.</p><p>While smart-contracts are still seen as crypto-centric. Lots of use-case for expansion out of the crypto-sphere have been proposed.<br><br>these include, but are not limited to:<br>- payrolls, taxes & pensions<br>- statistics collection<br>- Real estate & Crowdfunding<br>- Identity verification</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-smart-contract/what-are-the-use-cases-of-smart-contracts-b25f0b76.jpeg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '234f2f00e3464aed82ccc460b7308d55',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a smart contract?',
          rightAnswerNumber: 1,
          answers: [
            'Programs stored on a blockchain that run when predetermined conditions are met',
            'Online contract',
            'Digital contract',
            'All the above'
          ],
          id: 'what-is-a-smart-contract-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '052de98a767848c5900cac83e130869e',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which of below is NOT a feature of Smart Contract:',
          rightAnswerNumber: 1,
          answers: [
            'Alterable',
            'Fast and cost-effective',
            'A high degree of accuracy',
            'Transparency'
          ],
          id: 'what-is-a-smart-contract-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '14c5d6d4878b4ed28e5305e8ce631d00',
        title: 'Knowledge Check',
        quiz: {
          question: 'Below is a usecase for Smart Contact',
          rightAnswerNumber: 4,
          answers: [
            'Defi Lending',
            'Crypto Gaming ',
            'Learn-to-Earn',
            'All of the Above'
          ],
          id: 'what-is-a-smart-contract-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-web3/poap-1cc461eb.png',
    lessonImageLink: '/humanDAO/lesson/what-is-web3/lesson-29d2ca8a.png',
    socialImageLink: '/humanDAO/lesson/what-is-web3/social-d2c34e3f.png',
    learningActions: '',
    marketingDescription: 'An introduction to Web3',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'An introduction to Web3',
    name: 'What is Web3?',
    moduleId: '40959b191fcc4b058e3e8049410013f9',
    quest: 'humanDAOWhatIsWeb3',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '8e47339a233c4be3bcc3fef8e3410a6d',
    slug: 'what-is-web3',
    imageLinks: [
      '/humanDAO/lesson/what-is-web3/what-is-web3-86002b4c.jpg',
      '/humanDAO/lesson/what-is-web3/comparison-between-web1web2web3-a070b5a6.jpg',
      '/humanDAO/lesson/what-is-web3/major-advantages-of-web3-2714e244.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '681d3895cdbd4d26bdf91d7f2205a6fd',
        title: 'Web3: The future of the Internet',
        content: '<div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/Z0-JpR1IY0I?start=461&feature=oembed&rel=0&start=461\'></iframe></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd60617185237486d939cfb8b5d17aa84',
        title: 'What is web3?',
        content: '<div class="bloc1"><p>The Internet or the World Wide Web allows people to share information with each other.</p><p>Since its birth, the Internet has constantly been getting better.</p><p>This is how web evolved since it was established:</p><ul><li>Web 1.0 (1991-2004) allowed us to only do one-way communications. </li><li>Web 2.0 (2004-onwards) improved it and enabled two-way communication.</li><li>Web 3.0 goes a step further and allows everyone to create and own data/assets on the Internet.</li></ul><p>Web3 is the latest version of the Internet.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-web3/what-is-web3-86002b4c.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ba0163d567a149f7a43dba7fa59d2c89',
        title: 'Comparison Between Web1/Web2/Web3',
        content: '<img src=\'/humanDAO/lesson/what-is-web3/comparison-between-web1web2web3-a070b5a6.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'ffe7071c45db4aec9abdad96763a37f5',
        title: 'Major Advantages of Web3',
        content: '<div class="bloc1"><p>While Web3.0 has many utilities, the three key features that make it very powerful are:</p><ol><li>Anyone can use the networks - it is permissionless</li><li>It provides anonymity</li><li>No one can block your payments</li></ol><p>As Web3.0 is open and rewards people, it paves new ways for the <strong>Digital Gig Economy</strong> to flourish.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-web3/major-advantages-of-web3-2714e244.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c51174b3d33e4275bfa43c0807707163',
        title: 'Knowledge Check',
        quiz: {
          question: 'Platforms like Facebook and Instagram are an example of :',
          rightAnswerNumber: 2,
          answers: [
            'Web1',
            'Web2',
            'Web3',
            'Metaverse'
          ],
          id: 'what-is-web3-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '85e1099abb3c4125bca434a0460df4b4',
        title: 'Knowledge Check',
        quiz: {
          question: 'While Web3.0 has many utilities, the three key features that make it very powerful are:',
          rightAnswerNumber: 4,
          answers: [
            'It is decentralized ',
            'It is owned by the users',
            'It provides anonymity',
            'All of the above'
          ],
          id: 'what-is-web3-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '81de022ff38a417e8866b2b21f411c66',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which of below is NOT a feature of Web3?',
          rightAnswerNumber: 3,
          answers: [
            'Decentralization',
            'Blockchain technology',
            'Pay Per Click',
            'Token-based economics.'
          ],
          id: 'what-is-web3-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-defi/poap-45137c08.png',
    lessonImageLink: '/humanDAO/lesson/what-is-defi/lesson-e43b226e.png',
    socialImageLink: '/humanDAO/lesson/what-is-defi/social-fcaa4aeb.png',
    learningActions: '',
    marketingDescription: 'Under the basics of Decentralized Finance',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Under the basics of Decentralized Finance',
    name: 'What is DeFi',
    moduleId: '40959b191fcc4b058e3e8049410013f9',
    quest: 'humanDAOWhatIsDeFi',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'c55b77e9f16c48dfbee36861f1002e62',
    slug: 'what-is-defi',
    imageLinks: [
      '/humanDAO/lesson/what-is-defi/what-is-defi-c0c0afc8.jpg',
      '/humanDAO/lesson/what-is-defi/what-is-defi-14b11369.jpg',
      '/humanDAO/lesson/what-is-defi/how-does-defi-improve-the-current-financial-system-8a97767b.jpg',
      '/humanDAO/lesson/what-is-defi/applications-of-defi-429e5ab5.jpg',
      '/humanDAO/lesson/what-is-defi/a-look-at-the-defi-ecosystem-aa12f90c.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '5428201f0c58406f8d25960efdabbdb0',
        title: 'What is DeFi?',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/what-is-defi/what-is-defi-c0c0afc8.jpg\'></div><div class="bloc-b"><p>DeFi stands for Decentralised Finance. It refers to financial services that run on smart contracts.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/what-is-defi/what-is-defi-14b11369.jpg\'></div><div class="bloc-b"><p>DeFi aims to remove the need for centralised banks or exchanges to provide financial services to people. This creates a new infrastructure parallel to existing banking systems.</p></div></div>'
      },
      {
        type: 'LEARN',
        notionId: '5c9d242a5bff4cfd90c5ea973609d308',
        title: 'How does DeFi improve the current Financial System?',
        content: '<div class="bloc1"><p>DeFi aims to create a transparent financial system where people have complete control over their finances. It brings the power of blockchain to Finance, thus paving way for greater transparency.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-defi/how-does-defi-improve-the-current-financial-system-8a97767b.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '93eb571dc5034f7ea4c6a3bfabd9799b',
        title: 'Applications of DeFi',
        content: '<div class="bloc1"><p>DeFi services can be used to do the following:</p><ul><li>Send money</li><li>Earn interest</li><li>Get loans from users directly</li></ul><p>Most DeFi protocols are owned by users, leading to users getting rewarded as the DeFi protocol grows.</p><p>While DeFi is at a nascent phase, multiple applications of DeFi have already hit the markets.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-defi/applications-of-defi-429e5ab5.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'bdf1761737da4a23aa8453bcb3bae8bf',
        title: 'A look at the DeFi Ecosystem',
        content: '<img src=\'/humanDAO/lesson/what-is-defi/a-look-at-the-defi-ecosystem-aa12f90c.jpg\'><p>The DeFi Ecosystem is growing at a break-neck pace. The below illustration catalogues the emerging players in the DeFi space.</p>'
      },
      {
        type: 'QUIZ',
        notionId: '69f8a5975b0a42ab8e016ddfdf367f19',
        title: 'Knowledge Check',
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
        type: 'QUIZ',
        notionId: '616a07da9a654ac29d23056c41d9cd0d',
        title: 'Knowledge Check',
        quiz: {
          question: 'DeFi services can be used to do the following:',
          rightAnswerNumber: null,
          answers: [
            'Send money',
            'Earn interest',
            'Get loans from users directly',
            'All of the above'
          ],
          id: 'what-is-defi-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '34957b75e44c4e58b693c49bb2cd6fc3',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which of these is NOT a part of the Defi Ecosystem',
          rightAnswerNumber: 3,
          answers: [
            'Uniswap',
            'Aave',
            'Wells Fargo ',
            'Curve Finance'
          ],
          id: 'what-is-defi-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-are-nfts/poap-b9570c8e.png',
    lessonImageLink: '/humanDAO/lesson/what-are-nfts/lesson-4cf05bbc.png',
    socialImageLink: '/humanDAO/lesson/what-are-nfts/social-bef68097.png',
    learningActions: '',
    marketingDescription: 'Under the basics of Non-Fungible Tokens',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Under the basics of Non-Fungible Tokens',
    name: 'What are NFTs?',
    moduleId: '40959b191fcc4b058e3e8049410013f9',
    quest: 'humanDAOWhatAreNFTs',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'cedfb1cc1ceb4f2091b3a1d7196d9b54',
    slug: 'what-are-nfts',
    imageLinks: [
      '/humanDAO/lesson/what-are-nfts/what-are-nfts-3f5a9c90.png',
      '/humanDAO/lesson/what-are-nfts/what-are-nfts-b92ee72b.jpeg',
      '/humanDAO/lesson/what-are-nfts/what-is-minting-57d8a6d9.jpeg',
      '/humanDAO/lesson/what-are-nfts/what-are-royalties-7a0def5e.jpeg',
      '/humanDAO/lesson/what-are-nfts/what-are-royalties-55e4a48b.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'a19ae37e21194bc5a6ae386579571bd4',
        title: 'What are NFTs?',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/what-are-nfts/what-are-nfts-3f5a9c90.png\'></div><div class="bloc-b"><p>NFTs are a unique digital proof that you own an object - whether it is physical or digital.</p><p>Most NFTs today are built around ownership of digital assets, like digital art, music video, photos, and digital lands.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/what-are-nfts/what-are-nfts-b92ee72b.jpeg\'></div><div class="bloc-b"><p>However, one can also get NFTs that represent ownership of Physical objects like land records or an artwork</p></div></div>'
      },
      {
        type: 'LEARN',
        notionId: '5166cb3da712488ea7e73c16f44f2e17',
        title: 'What is minting?',
        content: '<div class="bloc1"><p>The act of creating an NFT is called “minting”.</p><p>To mint an NFT, a digital object representing the original asset is uploaded on a blockchain. Once created, NFTs can be bought or sold on an NFT Marketplace.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-are-nfts/what-is-minting-57d8a6d9.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ab6d8a7a0f93434badacd4f11a80024b',
        title: 'What are royalties?',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'<p>A unique feature of NFTs is “Royalties” that can be built in when minting an NFT. </p><p>Royalties ensure that the original creator of the NFT will always get a part of the proceeds, whenever the NFT is sold.</p>/humanDAO/lesson/what-are-nfts/what-are-royalties-7a0def5e.jpeg\'></div><div class="bloc-b"><p>NFTs will have many applications in times to come. </p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/what-are-nfts/what-are-royalties-55e4a48b.jpeg\'></div><div class="bloc-b"><p>Some applications of NFTs which are slowly growing are proof of an exclusive membership, certification, and a symbol of social status</p></div></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c6f5e9509c9647858100b338e87b0e3c',
        title: 'Knowledge Check',
        quiz: {
          question: 'NFT is a proof of ________',
          rightAnswerNumber: 2,
          answers: [
            'Authenticity',
            'Ownership',
            'Creation',
            'Copyright'
          ],
          id: 'what-are-nfts-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '470353c9ee0142ab8a4496996983273b',
        title: 'Knowledge Check',
        quiz: {
          question: 'An NFT can be considered as a ________',
          rightAnswerNumber: 1,
          answers: [
            'Asset',
            'Liability',
            'Neither'
          ],
          id: 'what-are-nfts-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '2d4851ad4e824354b464c533ae5bdaf6',
        title: 'Knowledge Check',
        quiz: {
          question: 'To ‘mint’ an NFT, a blockchain requires:',
          rightAnswerNumber: 2,
          answers: [
            'Gas fees',
            'Smart Contract',
            'Sponsor',
            'None of the above'
          ],
          id: 'what-are-nfts-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-a-dao/poap-b4127d43.png',
    lessonImageLink: '/humanDAO/lesson/what-is-a-dao/lesson-7d140a78.png',
    socialImageLink: '/humanDAO/lesson/what-is-a-dao/social-a2075b09.png',
    learningActions: '',
    marketingDescription: 'Understand the fundamentals of the new kind of organization structure made possible by Blockchain',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Understand the fundamentals of the new kind of organization structure made possible by Blockchain',
    name: 'What is a DAO?',
    moduleId: '40959b191fcc4b058e3e8049410013f9',
    quest: 'humanDAOWhatIsADAO',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '9621d67b42744b96bc03e839aa7904cf',
    slug: 'what-is-a-dao',
    imageLinks: [
      '/humanDAO/lesson/what-is-a-dao/what-is-a-dao-3227182d.jpeg',
      '/humanDAO/lesson/what-is-a-dao/whats-it-like-to-work-in-a-dao-c468d8c3.jpeg',
      '/humanDAO/lesson/what-is-a-dao/the-dao-landscape-4a36c39f.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'd2200070d68d4ff9a37439d1b4b3c0e7',
        title: 'What is a DAO?',
        content: '<div class="bloc1"><p>A DAO stands for “Decentralised Autonomous Organization”. Simply, it’s a group of people with a shared treasury, working towards a common goal.</p><p>DAOs are a new form of organization where anyone is free to contribute and get rewards.</p><p>No one is the “owner” of a DAO - it is a community-owned and community-driven organization. When new decisions need to be made, they are taken by community voting.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-dao/what-is-a-dao-3227182d.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fe0166772e324ad0b972cbf2ac84cf24',
        title: 'What’s it like to work in a DAO?',
        content: '<div class="bloc1"><p>Workers in a DAO are freelancers who can contribute their skills to multiple DAOs at the same time. </p><p>DAOs allow workers a lot of flexibility—one can work from anywhere and anytime. However, unlike traditional jobs, DAOs are yet to provide workers with a sense of security.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-dao/whats-it-like-to-work-in-a-dao-c468d8c3.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '3636f2aa30fa465ca5857d39402fc28b',
        title: 'The DAO Landscape',
        content: '<img src=\'/humanDAO/lesson/what-is-a-dao/the-dao-landscape-4a36c39f.jpeg\'>'
      },
      {
        type: 'QUIZ',
        notionId: '621852e6530c438b857c82d2c503a065',
        title: 'Knowledge Check',
        quiz: {
          question: 'All major decision in a DAO are taken through _____________',
          rightAnswerNumber: 2,
          answers: [
            'Board Meetings',
            'Voting',
            'Delegating',
            'Decentralization'
          ],
          id: 'what-is-a-dao-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: '3b94a78ba6e247c081eb32cd8df1b472',
        title: 'Knowledge Check',
        quiz: {
          question: 'There are DAOs that work in the area of',
          rightAnswerNumber: 4,
          answers: [
            'Education and Finance',
            'Social',
            'Investment',
            'All the above'
          ],
          id: 'what-is-a-dao-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '415b049eb07541ed99a4fcdd0a6a1fff',
        title: 'Knowledge Check',
        quiz: {
          question: 'Members in a DAO need to be located in same location to work efficiently',
          rightAnswerNumber: 2,
          answers: [
            'True',
            'False'
          ],
          id: 'what-is-a-dao-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-the-metaverse/poap-b70bc573.png',
    lessonImageLink: '/humanDAO/lesson/what-is-the-metaverse/lesson-6a3fc0e6.png',
    socialImageLink: '/humanDAO/lesson/what-is-the-metaverse/social-b89f0873.png',
    learningActions: '',
    marketingDescription: 'A brief journey to the enigmatic Metaverse!',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A brief journey to the enigmatic Metaverse!',
    name: 'What is the Metaverse?',
    moduleId: '40959b191fcc4b058e3e8049410013f9',
    quest: 'humanDAOWhatIsTheMetaverse',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '74052fbd16e7404ab20531dc7a3b1c9a',
    slug: 'what-is-the-metaverse',
    imageLinks: [
      '/humanDAO/lesson/what-is-the-metaverse/what-is-the-metaverse-7ed04570.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/when-did-the-metaverse-actually-begin-b0928dd8.jpeg',
      '/humanDAO/lesson/what-is-the-metaverse/what-does-the-metaverse-look-like-now-da47138a.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '5afa37858ee84367a3ed974cbedb0ca0',
        title: 'What is the Metaverse?',
        content: '<div class="bloc1"><p>Metaverse is digital world that mimics the real world using various technologies, like Virtual Reality (VR), Augmented Reality (AR), and Blockchain.</p><p>It is being built to be the next major destination for Gaming and Social Media.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-the-metaverse/what-is-the-metaverse-7ed04570.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b5fef56e93ba4217887eccec357eec7e',
        title: 'When did the metaverse actually begin?',
        content: '<div class="bloc1"><p>The concept of Metaverse first appeared in a book called “Snowcrash” by Neal Stephenson. A rich, detailed, lively description of life in the metaverse can be found in the book or film called “Ready Player One”.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-the-metaverse/when-did-the-metaverse-actually-begin-b0928dd8.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9425ba098fbe456683e8a13be01debd5',
        title: 'What does the metaverse look like now?',
        content: '<div class="bloc1"><p>Facebook and Microsoft are building their version of the metaverse, albeit in a not fully decentralized way.</p><p>The likes of Decentrand and Sandbox are built on Ethereum, and they are existing metaverses that can be experienced right now.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-the-metaverse/what-does-the-metaverse-look-like-now-da47138a.jpeg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '693a2d5bc72146639fb5aad3fe97debe',
        title: 'Knowledge Check',
        quiz: {
          question: 'Metaverse can only be built using Blockchain technology',
          rightAnswerNumber: 2,
          answers: [
            'True',
            'False'
          ],
          id: 'what-is-the-metaverse-1'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'd34a639413284acaa1d691e008b01611',
        title: 'Knowledge Check',
        quiz: {
          question: 'Below are examples of Decentralised Metaverses',
          rightAnswerNumber: 2,
          answers: [
            'Facebook',
            'Sandbox and Decentraland',
            'Snapchat'
          ],
          id: 'what-is-the-metaverse-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '473d14ba3a2b45908d12d59b6849d784',
        title: 'Knowledge Check',
        quiz: {
          question: 'Metaverse platform can be used for',
          rightAnswerNumber: 4,
          answers: [
            'Gaming and Training',
            'Education',
            'Meetings',
            'All the above'
          ],
          id: 'what-is-the-metaverse-3'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/what-is-a-crypto-wallet/poap-8c4f951b.png',
    lessonImageLink: '/humanDAO/lesson/what-is-a-crypto-wallet/lesson-1ed1cdd3.png',
    socialImageLink: '/humanDAO/lesson/what-is-a-crypto-wallet/social-6ccdf5bc.png',
    learningActions: '',
    marketingDescription: 'Learn how to create and manage a wallet securely.',
    poapEventId: null,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'What is a Crypto Wallet?',
    moduleId: 'f686aa87be9644788ab424f7e472ed38',
    quest: 'humanDAOWhatIsACryptoWallet',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '8e45589f9cb54504bcf0a8327b796cc3',
    slug: 'what-is-a-crypto-wallet',
    imageLinks: [
      '/humanDAO/lesson/what-is-a-crypto-wallet/wallet-intro-78ae543b.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/wallet-definition-c9e479d9.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/recovery-phrase-6864d822.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/public-key-2d27c83d.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/private-key-96e1e6e2.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/custodial-wallet-4f0798e2.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/non-custodial-wallet-85c99fdc.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/hot-wallet-3b03f7cc.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/cold-wallet-7b978092.png',
      '/humanDAO/lesson/what-is-a-crypto-wallet/metamask-wallet-9edbeea1.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'e32e616adfd847a8900d398a9a474d4e',
        title: 'Wallet Intro',
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to humanDAO Academy. We’re excited to guide you on your journey into Web3. To get started, you will need some essential equipment: a digital wallet.</p><p>A digital wallet is your passport to exploring the various worlds of Web3. This tool grants you access to incredible new possibilities while safeguarding your assets and identity.</p><p>In this lesson, we’ll introduce you to digital wallets, how they work, and how to set yours up to safely embark on your Web3 journey.</p><p>Let’s get started!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/wallet-intro-78ae543b.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '72c3e439698a403aa73ca6c3db182146',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>.</p><p>Your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/wallet-definition-c9e479d9.png\'></div>'
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
          id: 'what-is-a-crypto-wallet-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ec1bba6be18d4d31a80bbd35cbd71742',
        title: 'Recovery Phrase',
        content: '<div class="bloc1"><p>When you set up a new <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, the software generates a unique recovery phrase that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phrase</em>, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the public key and private key for your wallet.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/recovery-phrase-6864d822.png\'></div>'
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
          id: 'what-is-a-crypto-wallet-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '33f6e11ad7e642d9b8dbe4ccae690972',
        title: 'Public Key',
        content: '<div class="bloc1"><p>You just learned how your recovery phrase relates to a public key and private key.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a public key like your home address. It is public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/public-key-2d27c83d.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ce266730dded4a12aa06744b08d604ea',
        title: 'Private Key',
        content: '<div class="bloc1"><p>If your public key is like your home address, then your private key is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/private-key-96e1e6e2.png\'></div>'
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
          id: 'what-is-a-crypto-wallet-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '19d5c88153564a729854cabf870173fc',
        title: 'Custodial Wallet',
        content: '<div class="bloc1"><p>Since your private key unlocks access to your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, keeping it private and secure is very important!</p><p>Not all wallets let you control your private key. With a custodial wallet, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Plus, your access to the world of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> applications will be limited. </p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/custodial-wallet-4f0798e2.png\'></div>'
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
          id: 'what-is-a-crypto-wallet-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '6f7ad720c09e4b3c894955db87eb27cd',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>Your passport to the exciting worlds of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> and Web3—and the best way to safeguard your private key is a non-custodial wallet. </p><p>Remember: if you lose your private key, you will not be able to access your wallet to spend, withdraw, or transfer your crypto assets.</p><p>Fortunately, you <em>can</em> still recover your wallet with your recovery phrase. But if you lose that too, you will lose access to your wallet FOREVER!!!</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/non-custodial-wallet-85c99fdc.png\'></div>'
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
          id: 'what-is-a-crypto-wallet-5'
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
          id: 'what-is-a-crypto-wallet-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f8523bb3d7df45609c1b93514af689a7',
        title: 'Hot Wallet',
        content: '<div class="bloc1"><p>There are two major types of non-custodial wallets: software wallets (also called hot wallets) and hardware wallets (also called cold wallets)</p><p>A software wallet is an app or browser extension that remains connected to the internet.</p><ul><li>PROS 👍: It is usually free, simple to set up, and easy to use.</li><li>CONS 👎: Because it is software connected to the internet, it\'s potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/hot-wallet-3b03f7cc.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'cd8734d3ff474e5d98558f8f8d4b13df',
        title: 'Cold Wallet',
        content: '<div class="bloc1"><p>A cold wallet, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure from threats like hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/cold-wallet-7b978092.png\'></div>'
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
          id: 'what-is-a-crypto-wallet-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '54f6a256d26b478cadcf14e29dc8c266',
        title: 'MetaMask Wallet',
        content: '<div class="bloc1"><p>There are several non-custodial hot wallets available today. We will explore the popular MetaMask Wallet for the remainder of this lesson since:</p><ul><li>It is likely to be compatible with most <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/what-is-a-crypto-wallet/metamask-wallet-9edbeea1.png\'></div>'
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
          id: 'what-is-a-crypto-wallet-8'
        }
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/humandao-an-introduction/poap-a89ca693.png',
    lessonImageLink: '/humanDAO/lesson/humandao-an-introduction/lesson-7b33803b.png',
    socialImageLink: '/humanDAO/lesson/humandao-an-introduction/social-ed4e3ca8.png',
    learningActions: '',
    marketingDescription: 'A brief guide to the DAO with a simple mission - Improving Lives Through Crypto',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'A brief guide to the DAO with a simple mission - Improving Lives Through Crypto',
    name: 'HumanDAO: An Introduction',
    moduleId: 'cd36caed3ea74782a356bd02f28179bc',
    quest: 'humanDAOHumanDAOAnIntroduction',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '7bac5a1ae55e46b6a9258da0664a1241',
    slug: 'humandao-an-introduction',
    imageLinks: [
      '/humanDAO/lesson/humandao-an-introduction/what-is-humandao-810916ee.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/humandao-roles-scholar-a7acb717.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/humandao-roles-builder-974b752c.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/humandao-roles-moderator-f1708f75.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/how-can-you-excel-at-your-role-in-humandao-0042f6c5.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/how-can-you-excel-at-your-role-in-humandao-763d915a.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/how-can-you-excel-at-your-role-in-humandao-df702714.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/for-newbies-on-discord-heres-how-you-can-start-in-hdao-cb24d9d0.jpeg',
      '/humanDAO/lesson/humandao-an-introduction/for-newbies-on-discord-heres-how-you-can-start-in-hdao-f96ed33e.jpeg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'e9632d47bd7146e0b72bac3cea25e969',
        title: 'What is humanDAO?',
        content: '<div class="bloc1"><p>humanDAO is a decentralized autonomous organization <strong>(DAO)</strong> that aspires to improve the lives of people by implementing crypto assets, non-fungible tokens <strong>(NFTs)</strong>, and <strong>Web3</strong> technology to provide new opportunities for the underserved communities of the world. </p><p>The DAO\'s four core pillars are used to achieve this:</p><ul><li><strong>Wages </strong>include opportunities such as play-to-earn scholarships and jobs board.</li><li><strong>Education</strong> includes learning modules on cryptocurrency and web3.</li><li><strong>Feed</strong> includes meal programs and partnerships</li><li><strong>Funds</strong> include grants for project proposals</li></ul><p><em>It is important to stay up to date on the DAO because there are many opportunities coming that will provide free learning and earning potential. So keep alerts on for the announcements on Discord.</em></p></div><div class="bloc2"><img src=\'/humanDAO/lesson/humandao-an-introduction/what-is-humandao-810916ee.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '78759326184e43658aa6a16cbf9d10e6',
        title: 'How did it start?',
        content: '<div class="bloc1"><p>Christopher Chase is the <strong>founder</strong> of humanDAO. This organization began as a way for him to spend more time with his children by playing these new crypto games. They were playing when he realized there was a chance to broaden cryptocurrency access beyond gamers and wealthy nations\' borders.</p><p>So he founded humanDAO at the end of September, launched it the next month and minted a token ($HDAO) at the beginning of December.</p><p>Within five days of launching the Discord server, humanDAO gained around 2,500 members just from word of mouth, and in less than six months it has grown to 50,000.</p><p>For more information about DAO’s check out the “What is a DAO” lessons in the crypto 101, web3 module</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '0c3faf441f9d4742a02103c23cef9ba1',
        title: 'How does play-to-earn (P2E) work?',
        content: '<div class="bloc1"><p><strong>Play-to-Earn </strong>is a new development in the world of gaming.</p><p>P2E games allow players to earn real world money by playing blockchain-based games.</p><p>By engaging in the game, players are able to make money while also creating value to the game developers and other players.</p><p>Axie Infinity is the most well-known P2E game. Other popular games in this category are Alien Worlds, Star Atlas, Monster Clan etc.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '48368ab87c164ae59b8ec5a4c8f0affe',
        title: 'How does learn-to-earn (L2E) work?',
        content: '<div class="bloc1"><p><strong>Learn-to-Earn (L2E)</strong> is a unique use-case of the blockchain technology.</p><p>Under L2E, users get to earn crypto assets by completing a set of tasks geared towards learning something new. The task can be as simple as watching a video and answering questions or completing on-chain tasks to learning new skills to gain a job in web3.</p><p>Projects might utilize L2E to teach users about their product, or it can simply be a tool to encourage students to learn a skill while being rewarded for it.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e8071ee5634b49359c5a0edb349071a2',
        title: 'humanDAO Roles: Scholar',
        content: '<div class="bloc1"><p><strong>Scholar</strong></p><p>To obtain this role, it is necessary to become an applicant first. An <strong>applicant</strong> accomplishes the requirements and attends friendly battles conducted by <strong>axie trainers</strong>. After doing this, the applicant will be interviewed by a <strong>scholar manager</strong> to determine if the person is eligible in getting a scholarship in humanDAO. In the future there will be scholarship programs in other games as well as other wage earning roles outside of gaming.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/humandao-an-introduction/humandao-roles-scholar-a7acb717.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7b932d5eab1f46dfa7f083217091e198',
        title: 'humanDAO Roles: Builder',
        content: '<div class="bloc1"><p>There are two ways to contribute in humanDAO—by acting as a bounty hunter or a committed builder. A <strong>bounty hunter </strong>can choose to work on specific tasks at their own pace while a <strong>committed builder</strong> puts more time and effort each month to work on long-term projects that will help the DAO grow substantially.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/humandao-an-introduction/humandao-roles-builder-974b752c.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '16d8d79aad204f31972ae34685d0138b',
        title: 'humanDAO Roles: Moderator',
        content: '<div class="bloc1"><p>The Discord server houses most of the conversations happening for both scholars and builders. This is managed by moderators and admins who have higher permissions in the server. <strong>Moderators </strong>ensure that questions and concerns are attended to while <strong>Admins</strong> perform key changes and updates in the channels.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/humandao-an-introduction/humandao-roles-moderator-f1708f75.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9d01d9ab0eba4b039512009d425c87ee',
        title: 'humanDAO Roles: Committee Member',
        content: '<div class="bloc1"><p>[needs content]</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ddbbd67942f949fa9bdc672acf25671d',
        title: 'How can you excel at your role in humanDAO?',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'<p>As a moderator, admin, or axie trainer, you can</p><ul><li>Be ready to assist applicants</li><li>Make the community feel special</li><li>Stick to the rules and show a good example</li><li>Maintain clear boundaries among members</li></ul>/humanDAO/lesson/humandao-an-introduction/how-can-you-excel-at-your-role-in-humandao-0042f6c5.jpeg\'></div><div class="bloc-b"><p> As a scholar or scholar monitor, you can</p><ul><li>Attend the assigned schedules on time</li><li>Track scholar performance on a daily basis</li><li>Approach moderators through help desk for concerns and questions</li><li>Be humble enough to train and be trained</li></ul></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/humandao-an-introduction/how-can-you-excel-at-your-role-in-humandao-763d915a.jpeg\'></div><div class="bloc-b"><p>As a builder, you can</p><ul><li>Take initiative to accomplish tasks</li><li>Consistently document your contributions</li><li>Connect with the functional leads</li><li>Reward fellow contributors fairly</li></ul></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/humanDAO/lesson/humandao-an-introduction/how-can-you-excel-at-your-role-in-humandao-df702714.jpeg\'></div><div class="bloc-b"></div></div>'
      },
      {
        type: 'LEARN',
        notionId: '3ce6bbbb27244074b5d4195269248d3d',
        title: 'For newbies on Discord, here’s how you can start in HDAO',
        content: '<div class="bloc1"><p><strong>Step 1: Installation</strong></p><ul><li>For mobile users, download the app for Android or IOS</li><li>For desktop users, run it through a web-browser or download a desktop client to use the more advanced features like game overlays. </li></ul><p><strong>Step 2: Making a Discord Account</strong></p><ul><li>The first thing to do after opening the Discord app is choosing a username for yourself. It can be any name of your choice - real or a pseudonym.</li><li>Discord automatically attaches a random string of 4 digits to the end of every username.</li><li>You’ll have to link your username with an email and password later.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/humandao-an-introduction/for-newbies-on-discord-heres-how-you-can-start-in-hdao-cb24d9d0.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7622977821864816b52a7b2a9916f12a',
        title: 'For newbies on Discord, here’s how you can start in HDAO',
        content: '<div class="bloc1"><p><strong>Step 3: Joining a server</strong></p><ul><li>Discord\'s primary forums are servers, which may be considered of as micro communities with their own set of users and regulations.</li><li>Servers are of two types: <strong>Public and Private.</strong></li><li>A public server can be joined immediately, whereas a private server requires an invitation.</li><li>There are servers for your favorite games, bands or music genres, political ideology, or just hubs for sharing some random memes. No matter what your interest, there is always a server for it.</li><li>Go ahead, try and visit <a href=\'https://discord.gg/humandao\'>https://discord.gg/humandao</a> to join our server!</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/humandao-an-introduction/for-newbies-on-discord-heres-how-you-can-start-in-hdao-f96ed33e.jpeg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '555dea54454341fa87711e8c2d9e11b8',
        title: 'How to navigate humanDAO’s Discord server?',
        content: '<div class="bloc1"><p>Here are important channels to start with</p><ul><li><strong>About us</strong> - Describes the mission and vision of humanDAO</li><li><strong>Rules </strong>- Community rules that all members should follow</li><li><strong>Official links </strong>- Includes the official website, token contracts, liquidity pools, and social media channels</li><li><strong>FAQs </strong>- Includes Community Onboarding guide and details about roles and scholarships</li><li><strong>Get-Scholarship</strong> - Provides a step-by-step process on becoming an applicant and a scholar</li><li><strong>Help-desk </strong>- This is where you can raise concerns to moderators regarding technical concerns and the application process.</li><li><strong>Report-Scam</strong> - For reporting fraud, scam, spam, and other violations in the rules</li><li><strong>Bounty Board </strong>- A place where contributors can find short and long term projects to work on.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '877f98f23c054b05817e6461aed524d8',
        title: 'Which Discord channels can help aspiring scholars?',
        content: '<div class="bloc1"><ul><li><strong>P2E-Chat</strong> - You can talk about play-to-earn games and scholarships, or meet new friends who are scholars, newbies, or applicants in the server.</li><li><strong>Applicant-Chat</strong> - If you’ve successfully applied for a scholarship, you will have access in sending messages with co-applicants and check updates for your role.</li><li><strong>Meta-Teams </strong>In this channel, you can check the available meta teams that humanDAO will let you choose to play with once you become a scholar.</li><li><strong>Resources</strong> - If you’re new to Axie Infinity, this is the best way to start learning the gameplay, axie classes, buffs and debuffs, and other strategies.</li><li><strong>Schedule </strong>- Prior to onboarding, you will be scheduled for a practice battle if you haven’t experienced playing Axie before. </li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '7d81407a272a41879d8fc7f772aa3763',
        title: 'Which Discord channels can help aspiring builders?',
        content: '<div class="bloc1"><ul><li><strong>Builder-Chat</strong> - If you want to become a contributor, core team member, advisor, or investor, share your skills and interest in this channel</li><li><strong>Build-Gen-Chat </strong>- When you are granted a builder role, make sure to visit this channel to stay updated with the latest projects the DAO is currently working on.</li><li><strong>Build-Content </strong>-<strong> </strong>Writers and social media strategists can collaborate on the content they will be creating to publish on Medium or the social media channels. On the other hand, there are also graphic designers, content creators, and UI/UX designers who can work on assets such as website interface, pubmats, and illustrations.</li><li><strong>Build-Dev</strong> - This is where front-end and back-end developers can collaborate to work on website and applications. They can work on either web2 and web3 components of a project.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a5a807cf25944f93b783d3b98edd93d7',
        title: '<strong>How to participate in humanDAO’s activities?</strong>',
        content: '<div class="bloc1"><p><strong>Buy the $HDAO governance token</strong> </p><p>One of the necessary steps in becoming a member of the $HDAO community is to acquire a token.</p><p>When you own a token, you are able to participate in staking programs and get returns. You are also able to vote for proposals that can define the future of the community.</p><p><strong>Stake your $HDAO tokens</strong></p><p>As mentioned, you can stake your tokens, and in the case of humanDAO, you can stake both on the Ethereum and Polygon chain. It will grant our community members a better chance to optimize their involvement and achieve bigger returns through longer lockup periods.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd8e774db21184c12b7efd3064796bcd4',
        title: '<strong>How to participate in humanDAO’s activities?</strong>',
        content: '<div class="bloc1"><p><strong>Participate in the forum</strong></p><p>The forum is where people can submit proposals for the community and discuss strategies, points for improvement, and other types of discussions.</p><p>The governance process follows 3 steps:</p><ol><li><strong>Sanity Check</strong>: proposal with 2 days of discussion</li><li><strong>Draft Proposal:</strong> proposal has approve, reject, or needs revision options and 70% builder approval</li><li><strong>Active Proposal:</strong> proposal is brought to Snapshot with for and against options for voting and 60% quorum</li></ol><p><strong>Vote in Snapshot</strong></p><p>When proposals become active, they are again brought to Snapshot.</p><p>This web application allows community members who own $HDAO tokens to vote on proposals without spending any tokens.</p><p>Votes on Snapshot are weighted by the number of humanDAO tokens that are either delegated or staked in their address.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b72f909d1835420f87c07b5dafcee42a',
        title: 'Current humanDAO opportunities',
        content: '<div class="bloc1"><p>humanDAO aims to become the epicentre of web3 recruitment & provision for global communities. A lofty goal, that needs to be strategically executed step by step. With the DAO finding its roots within P2E games and providing scholarships to over 1000 people, this is the sturdy foundation it has been built upon. With expansions now into services fulfilled via NFTs, it enables the DAO to be more flexible with their approach for web3 recruitment and can aim to onboard non-crypto native community members. <br><br>Alongside this, With the release of the humanDAO Academy, HDAO is working towards an industry-leading platform that will reward participants will on-chain credentials.<br><br>If any roles humanDAO currently offers interest you, reach out through the following channels:<br><br>P2E Scholar: get-scholarship channel here<br>Builder role: builder-interest channel here<br>PA role: apply here</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '20b776bb4dcb4c1da2f34ca342d72efa',
        title: 'Future humanDAO opportunities',
        content: '<div class="bloc1"><p>The road doesn’t end with the current opportunities within the DAO. The education, roles & opportunities are planned for large growth. We have seen we can pull huge numbers of participants to these projects and aim to onboard & improve the lives of as many community members as possible. </p><p>Future web3 opportunities through humanDAO will come in the form of a project dubbed “Metaverse Talent Network” (MTN). HDAO will leverage its industry connection, education platform & in-depth knowledge of the web3 space to recruit, educate & place HDAO community members into positions within the web3 space. The web3 industry is a rapidly evolving beast and demand for positions such as community support roles are at an all-time high. </p><p>To keep up to date with all goings on, make sure to monitor the announcement channel. If the support role is of interest, make sure to keep an eye on the humanDAO academy.</p></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/community-support-role/poap-4a232460.png',
    lessonImageLink: '/humanDAO/lesson/community-support-role/lesson-6d69b48a.png',
    socialImageLink: '/humanDAO/lesson/community-support-role/social-d8fc7d73.png',
    learningActions: '',
    marketingDescription: 'Getting started on the role of Community Support in web3',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Getting started on the role of Community Support in web3',
    name: 'Community Support Role',
    moduleId: 'ce77c1a30483468b965e01eb8e0921f1',
    quest: 'humanDAOCommunitySupportRole',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'ecdabc1c4c464c11b5f57c9fff40abeb',
    slug: 'community-support-role',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        notionId: '386d5e1aa092439ebc3989c7d76d4871',
        title: '<strong>What’s web3 all about?</strong>',
        content: '<div class="bloc1"><p>Web3 is “a shift in internet culture”, where data is more governed and controlled by the community rather than corporations and special interests.</p><p>This puts the focus of products and services back to the people as they have real ownership in their data, assets, and content. The technology that is used to enable this change is blockchain, which can be accessed by anyone who has access to the internet.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f1f7b38dddd546fe87add7af0e353a21',
        title: '<strong>How is this connected to my role as part of the Community Support team?</strong>',
        content: '<div class="bloc1"><p>By understanding the nature of the environment in which you work in, you are able to perceive the kind of community that you are going to handle—and that includes people from other countries, with different cultures, and different practices.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e947549901f945398b1625c1151c1676',
        title: '<strong>What are the key responsibilities of a Community Support role?</strong>',
        content: '<div class="bloc1"><ul><li>Maintain a positive and safe environment for all members</li><li>Promptly answer questions and concerns raised in the social media channels</li><li>Provide written reports on feedbacks, updates, and concerns</li><li>Assist co-workers in managing social media channels</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a97e3654e4b74f588b24c292e19bfcc0',
        title: '<strong>How can I best represent the organization I’m working in?</strong>',
        content: '<div class="bloc1"><ol><li><strong>Reach out</strong> <strong>to community members</strong>. Identify who needs support and redirect them to the right information.</li><li><strong>Be kind and respectful. </strong>Remember that your actions reflect the values of the organization.</li><li><strong>Observe proper grammar and punctuation. </strong>You can make conversations clearer by using complete sentences.</li><li><strong>Adopt cultural sensitivity. </strong>It’s best to be aware how different expressions can affect other nationalities.</li><li><strong>Stick to the rules. </strong>There should be no special treatment for other community members to avoid conflict.</li><li><strong>Escalate concerns</strong>. Don’t solve all the problems by yourself. Consult a team lead for further confirmation.</li></ol></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/steps-to-resolution/poap-767a780d.png',
    lessonImageLink: '/humanDAO/lesson/steps-to-resolution/lesson-29ebb5f8.png',
    socialImageLink: '/humanDAO/lesson/steps-to-resolution/social-a28033f3.png',
    learningActions: '',
    marketingDescription: 'Confidently handle concerns whenever it arises.',
    poapEventId: null,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Confidently handle concerns whenever it arises.',
    name: 'Steps to Resolution',
    moduleId: 'ce77c1a30483468b965e01eb8e0921f1',
    quest: 'humanDAOStepsToResolution',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'fc4db377982a4aa084e973c26279f0a6',
    slug: 'steps-to-resolution',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        notionId: '555656058b42460cbfe70b459bfdef17',
        title: '5 Steps to Resolving Concerns',
        content: '<div class="bloc1"><p><strong>By following the 5 steps in resolving a community member’s concerns, you are able to confidently handle the situation whenever it arises.</strong></p><p>**If a member asks a concern that is out of the organization’s control, it is necessary to clarify that it is not in your capacity to solve that problem, but still try your best to make them feel understood.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '112a0b7f106f4f139f3c1a4979459986',
        title: '<strong><strong>Step 1: Identify the Nature of Concern</strong></strong>',
        content: '<div class="bloc1"><p>You can try to introduce yourself first, and let them know that you’re here to help. This can assure the person, whether they are builders or newbies in a community.</p><p>Then you might ask about the subject of their concern and any information that they find complicated to understand. This is the time to gather information such as the person\'s name, email address, username, screenshots, and issue category.</p><p>Categories will depend on the type of data being handled, some of which are grouped by Issue, Request, or Department.</p><p>These are some examples of categories that you can use when identifying the nature of concern:</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '9370053893a84edea615bc2846970676',
        title: '<strong><strong>Step 2: Verify Information</strong></strong>',
        content: '<div class="bloc1"><p>After collecting the data, it is important to make sure that the data being collected is accurate and true. Most communities use a platform or additional tools to check the identity of a person.</p><p>Here are some of the sources which you can verify information:</p><ul><li><strong>Community Database</strong> - for checking member identity</li><li><strong>Member List</strong> - for verifying a person’s role or department</li><li><strong>Search Bar</strong> - for specific words and characters</li><li><strong>Audit Logs</strong> - for tracing the root of errors or action</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '5cbe8e9130c849528bce14ca80a49fcf',
        title: '<strong><strong>Step 3: Attend to the concern</strong></strong>',
        content: '<div class="bloc1"><p>Once you\'ve discovered the cause, it’s time to use the resources you have in your company or organization to find the correct solution to the problem.</p><p>If the person you are talking to isn’t satisfied, remember these tips in handling the conversation:</p><ol><li>Clarify the context</li><li>Use positive language</li><li>Be transparent with your results</li></ol></div>'
      },
      {
        type: 'LEARN',
        notionId: '0f3e25aebda14c64b9ee6738e424f89d',
        title: '<strong><strong>Step 4: Respectfully Close the Conversation</strong></strong>',
        content: '<div class="bloc1"><p>It is also critical to verify that the solution you proposed actually helped the person. To do that, you can use the phrase: “<strong>Please let me know if there’s anything else I can help you with</strong>.”.</p><p>If the problem has not been resolved, it may take some time to find a new solution. In this case, you could say something like, <strong>\'I will raise this concern to our team lead, please wait for further instructions, thank you.”</strong></p><p>Make sure when ending the conversation, your closing remarks is polite, friendly, and will leave a positive impression towards them. You may also allow members to rate the transaction to measure the overall view.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '1e196133083d47c19303aa76641d3d32',
        title: '<strong><strong>Step 5: Furnish a Transcript or Report</strong></strong>',
        content: '<div class="bloc1"><p>You might notice that there are times you get the same concern from the same community member. Saving the conversation is enough for this type of scenario. One way of doing this is by using a ticketing bot (when in Discord) or help desk systems.</p><p>However, if the same concerns are coming from different community members, it is necessary to prepare a report and list down specific problem points. There are also tools that can help you generate reports on the number of cases solved per day, average response time, and satisfaction rate.</p></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/best-tools-for-moderation-and-collaboration/poap-d01f8a1e.png',
    lessonImageLink: '/humanDAO/lesson/best-tools-for-moderation-and-collaboration/lesson-498e6120.png',
    socialImageLink: '/humanDAO/lesson/best-tools-for-moderation-and-collaboration/social-b7d47219.png',
    learningActions: '',
    marketingDescription: 'Manage a community using different platform integrations and settings',
    poapEventId: null,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Manage a community using different platform integrations and settings',
    name: 'Best tools for moderation and collaboration',
    moduleId: 'ce77c1a30483468b965e01eb8e0921f1',
    quest: 'humanDAOBestToolsForModerationAndCollaboration',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: 'a9b50baaa3384d6092fc89ed69604f15',
    slug: 'best-tools-for-moderation-and-collaboration',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        notionId: 'eb851a12c42a4a759ad4ff622070fb0f',
        title: '<strong>Which platforms are used to perform the tasks of a Community Support role?</strong>',
        content: '<div class="bloc1"><p>Many web3 communities have a designated virtual place to communicate, share ideas, and work on projects. One of those popular platforms is Discord.</p><p>Discord offers a variety of communication modes, including text channels, voice channels, and stage channels, all of which are featured on a server. To organize each community\'s systems, admins, moderators, and accompanying bots control this.</p><p>Other social media platforms including Twitter, Facebook, Instagram, and Reddit mostly are used for announcements, contests, and giveaways.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '9714cfa55e4542a4a07dd7107a287047',
        title: 'What are Discord’s most useful features?',
        content: '<div class="bloc1"><p><strong>Application commands</strong></p><p>Text channels allow users to use application commands from bots using the slash symbol <strong>( / )</strong> along with the name of the command.</p><p><strong>Discord: Pin messages</strong></p><p>Even if there’s an announcement channel, it is a good practice to pin messages using the dropdown menu in other channels. This will help you redirect members to important messages rather than repeating them.</p><p><strong>Discord: Markdown text</strong></p><p>There are times when you want to highlight some text in a message. Making use of the markdown formatting system will assist you in creating announcements that stand out.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '0d369bf7b8644dab95dcc7480ec1f145',
        title: 'Discord: Server settings',
        content: '<div class="bloc1"><p>As part of the support team, you have access to certain settings in the Discord server.</p><p>The sections below will give you an idea what data can be changed and how to customize permissions:</p><ul><li><strong>Overview</strong> - server name, banner, and invite background. Also includes system messages channel</li><li><strong>Roles</strong> - creation of role names, default permissions, and hierarchy of roles. The role with the highest permission is on top of the list, and it can be dragged upward or downward to change the hierarchy.</li><li><strong>Emoji and stickers </strong>-<strong> </strong>custom emojis, animated emojis, and stickers that can be exclusively used in the server. Members with nitro subscription can use animated emojis and emojis from other servers.</li><li><strong>Moderation</strong> - includes verification levels for members who will join a server</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f4474c82f39342c9b9f81f9c07c0a15b',
        title: 'Discord: Server settings',
        content: '<div class="bloc1"><ul><li><strong>Audit Log</strong> - shows the actions made in the server, with the most recent action on top. It can be filtered by member and type of action.</li><li><strong>Integration</strong> - shows the list of webhooks used, channels followed, and bots invited in the server.</li><li><strong>Widget </strong>- server widgets are used to integrated the server profile in a website using HTML.</li><li><strong>Server Template </strong>-<strong> </strong>it is useful for replicating the same server setup. When a template is generated, it creates an exact copy of the server containing the same channels and permissions.</li><li><strong>Members</strong> - shows the total number of members, which can be filtered by role. A search bar is also available for easier tracking of names.</li><li><strong>Invites </strong>- invite links that are created by members can be viewed here. Discord only has limited number of invite links that can be generated, so it’s best practice to delete unused invite links.</li><li><strong>Bans</strong> - Members included in this list are banned by their account and IP address.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '4b1bd36de5a342cd947687a980839712',
        title: 'Discord: Server integrations',
        content: '<div class="bloc1"><p><strong>What are Discord bots?</strong></p><p>Bots on Discord are integrations on the server which help automate tasks including (but not limited to):</p><ul><li>Moderation</li><li>Statistics</li><li>Entertainment</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b6814552db6c406e9ddb0a780262ccb2',
        title: 'What are some of the most reputable bots?',
        content: '<div class="bloc1"><p>Whether you’re looking for a solution that can help you automate moderation or provide your community with entertainment, finding the right bot is crucial to maintaining operations and creating a safe place for everyone in the server.</p><p>Here are some of the bots you can consider:</p><p><strong>MEE6 - a moderation bot with custom commands, now used in 18+ million servers </strong></p><p><strong>How it can help your community</strong></p><ol><li>Newcomers can be greeted with a welcome card and custom messaging</li><li>Members can find peers sharing their interests through custom reaction roles and commands, music and games</li><li>Members can be notified of streaming events and new uploads through social connectors</li><li>Members can reach new ranks via the leveling system where they can earn XP for engaging in the server</li></ol><p><strong>How it can help your admins and moderators</strong></p><ol><li>Bots can be renamed to fit the branding of the community</li><li>Auto-moderation only requires to be set up once and can be configured to work on some channels while be exempted from another. </li><li>Custom monthly subscriptions can bootstrap onboarding with gated channels or categories.</li></ol></div>'
      },
      {
        type: 'LEARN',
        notionId: '8d4cec88049645f6b129daee344b3f1f',
        title: 'What are some of the most reputable bots?',
        content: '<div class="bloc1"><p><strong>AutoCode </strong>- an open-source automation software suite for building custom bots </p><p><strong>How it can help your community</strong></p><ol><li></li></ol><p><strong>How it can help your admins and moderators</strong></p><ol><li>The app platform allows the server to scale with little configuration from developer side</li><li>Templates are available to get started with </li></ol><p>One of the best ways to work with Discord bots is to read the website’s documentation. It is often linked in pages with different naming conventions including <strong>Tutorials</strong>, <strong>Docs</strong>, and <strong>Commands</strong>.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a260b1bc6ea74e06b7b0ebccf3b72469',
        title: '<strong>What tools are best to use when working on projects?</strong>',
        content: '<div class="bloc1"><p>In a decentralized workplace, online tools are commonly being used to accomplish projects even in a remote setting.</p><ol><li><strong>Notion</strong></li></ol><p>Notion is an online workspace where you can take notes, build a database, create kanban boards for your to-do lists, and collaborate with peers for project management tasks.</p><p>This can be used to see what other departments are working on and to update the progress made from your end.</p><ol><li><strong>Google Workspace</strong></li></ol><p>Google Workspace offers multiple productivity tools—including email, calendar, video call, documents, spreadsheets, and a cloud storage where all the data from the productivity apps can be synced.</p><p>File-sharing is one of the major features that is used to consolidate ideas and changes in a document.</p><ol><li><strong>Figma</strong></li></ol><p>Figma is a graphics-editing and prototyping tool used to create digital designs and artworks. It is possible to collaborate with peers here by sharing access to the file.</p><p>For community support roles, having the knowledge to navigate this tool will help in assisting minor changes in social media posts.</p><ol><li><strong>Trello</strong></li></ol><p>Trello is the visual work management tool that empowers teams to ideate, plan, manage, and celebrate their work together in a collaborative, productive, and organized way.</p><p>A board represents a place to keep track of information — often for large projects, teams, or workflows. Whether you are launching a new website, tracking sales, or planning your next office party, a Trello board is the place to organize tasks, all the little details, and most importantly—collaborate with your colleagues.</p><ol><li><strong>Miro</strong></li></ol><p>Miro is an online collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows.</p><p>With Miro, you can organize teams, projects, and boards to work on documents and create logical connections to form ideas. Some use cases of Miro include workshops, research, reviews, and creating mind maps or diagrams.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '66a2b2a3e0aa42b09c81529cb9deb292',
        title: '<strong>What tools are best to use when working on projects?</strong>',
        content: '<div class="bloc1"><ol><li><strong>Coordinape</strong></li></ol><p>When it comes to rewards distribution, Coordinape is the tool that is commonly used by DAOs. It allow members to acknowledge the efforts of their teammates via the Gift Circle.</p><p>A Gift Circle is where people in the Community Support role can allocate tokens to their team members depending on their contribution.</p><ol><li><strong>Coinvise</strong></li></ol><p>Coinvise is an open platform on Ethereum where creators can launch a social & build a tokenized community. Our tools can be used to airdrop tokens, design lockups & create quests.</p><ul><li><strong>Create their own social token:</strong> on a fixed supply, bonding curve or vesting schedule, where the creators gets to <strong>own</strong> full custody of tokens minted. Additionally, there\'s no cuts for tokens minted on Coinvise.</li><li><strong>Airdrop social tokens:</strong> send and receive social tokens on social media, private channels or in bulk to multiple people, through a unique claimable link.</li><li><strong>Rewards & Bounties:</strong> Reward your community for contributions & adding value through social tokens.</li><li><strong>Open Social Graph for Creator DAOs / Tokenized Communities:</strong> Discover & grow your community, communicate and contribute towards other creators. Earn rewards for joining communities, and more.</li></ul><ol><li><strong>Discourse</strong></li></ol><p>Discourse is an open-source discussion platform used as a forum or a long-form chat by communities. It has been a home to developer communities to provide tech and community support, and a place for small communities to discuss concepts and methodologies. Discourse also caters to large communities by allowing simultaneous participation by breaking down individual topics.</p><ol><li><strong>Snapshot</strong></li></ol><p>Snapshot is a decentralized voting system. It provides flexibility on how voting power is calculated for a vote. Snapshot supports various voting types to cater to the needs of organizations. Creating proposals and voting on Snapshot is user-friendly and does not cost gas as the process is performed off-chain. In short, Snapshot is an off-chain gasless multi-governance client with easy to verify and hard to contest results.</p><ul><li>Free (gasless) to create proposals and vote on them</li><li>Votes are signed messages easily verifiable online</li><li>Multiple voting systems - Single choice, Approval voting, Quadratic voting, and more</li><li>Flexible voting strategies to calculate voting results - vote with ERC20s, NFTs, other contracts, and more</li></ul></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/best-practices/poap-4ef7ed22.png',
    lessonImageLink: '/humanDAO/lesson/best-practices/lesson-caee5017.png',
    socialImageLink: '/humanDAO/lesson/best-practices/social-71b0c6e2.png',
    learningActions: '',
    marketingDescription: 'Keep your community informed and secured with best practices',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: undefined,
    description: 'Keep your community informed and secured with best practices',
    name: 'Best Practices',
    moduleId: 'ce77c1a30483468b965e01eb8e0921f1',
    quest: 'humanDAOBestPractices',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '6edd2bdfdac34f1692892d51bb9c6b37',
    slug: 'best-practices',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        notionId: 'dca36868cf2542bdbce5581dcd75040e',
        title: 'TODO',
        content: '<div class="bloc1"><p>…</p></div>'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/humanDAO/lesson/financial-literacy-101/poap-ec65bbcc.png',
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
    moduleId: 'eec24eea0e8048c29623a8a2cccd0d33',
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
        content: '<div class="bloc1"><p>A good, happy life requires a fine balance of several factors. </p><p>Three things are key to achieve this:</p><ol><li>Physical well-being</li><li>Emotional or mental well-being</li><li><strong>Financial well-being</strong></li></ol><p>Of the three, financial well-being will be discussed to show its importance to live a balanced life.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/why-is-it-important-to-learn-financial-literacy-2d9dbeff.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'cb174387ae9044178438a193137e4b90',
        title: '<strong>Why is it important to Learn Financial Literacy:</strong>',
        content: '<div class="bloc1"><p>In our schools and colleges, we often do not come across courses that teach us how to take care of our financial well-being.</p><p>The art and science of effectively managing our financial resources to get a lifetime of financial wellbeing is known as <strong>Financial Literacy.</strong></p><p>Just as being literate helps us navigate the world better, being Financially Literate helps us have a good relationship with money.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/why-is-it-important-to-learn-financial-literacy-d453524d.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0b38521286c640f28f7b352beb58bc59',
        title: 'What happens due to lack of Financial Literacy?',
        content: '<div class="bloc1"><p>These are the perils of <strong>not</strong> being financially literate:</p><ol><li>Poor money management skills</li><li>Anxiety about retirement</li><li>Not being able to use financial products like debts, bank accounts and credit cards correctly</li><li>Not being able to meet life goals for want of money</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/what-happens-due-to-lack-of-financial-literacy-4af6cee8.jpg\'></div>'
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
        content: '<div class="bloc1"><p>The first key component of Financial Literacy is <strong>Earn</strong>.</p><p>What does it mean to earn?</p><ul><li>Having a fair understanding of incoming flow of assets every month.</li><li>Having multiple sources of income at an early age</li><li>While part of the income comes from trading off your time in the initial days, it is critical to create at least one more stream of income by putting the money to work for you [through the use of investing].</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-1-earn-57f279c9.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8a57706cd2774a88bfc842ff5c7a09ad',
        title: '<strong>Pillar 2: Spend</strong>',
        content: '<div class="bloc1"><p>The second key component of Financial Literacy is <strong>Spend</strong>.</p><p>What does it mean to spend?</p><ul><li>With clear understanding of income, the next critical factor to determine is your monthly budget.</li><li>This involves knowing what is enough—how much money per month is good for you to improve your quality of life.</li><li>An exercise on budgeting your expenses helps us figure what <strong>not</strong> to spend our money on.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-2-spend-9bb90495.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f01449b632e7447794ba12f26b98520c',
        title: '<strong>Pillar 3: Save and Invest</strong>',
        content: '<div class="bloc1"><p>The third key component of Financial Literacy is <strong>Save and Invest</strong>.</p><p>What does it mean to save and invest?</p><ul><li>With income and expenses data in place, the third critical area for us is to get rid of the traditional, old mentality around savings. </li><li>Our expenses has to be the balance left <em>after saving sufficient money</em><strong><em><em>.</em></em></strong></li><li>The critical information needed here is: what do we save for?</li></ul><p>Below are the <strong>4 Big Bucket Items</strong> for which we should save:</p><ol><li>An emergency fund: this could be around three to six (3-6) months of basic income calculated in step 1.</li><li>Retirement: so your life post active period of work doesn’t bother you.</li><li>Personal debts (if any) needs to be cleared of ASAP</li><li>Dreams/Goals: That holiday you wish to take, that gaming console you wish to buy - needs to have a specific saving plan around it to become a reality.</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-3-save-and-invest-1be53149.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2010412afd8e4c32a9fda29558baabe1',
        title: '<strong>Pillar 4: Borrow</strong>',
        content: '<div class="bloc1"><p>The fourth key component of Financial Literacy is <strong>Borrow</strong>.</p><p>What does it mean to borrow?</p><ul><li>Life is unpredictable. There can be situations when a sudden need comes up and we need to borrow some money.</li><li>The first response to the situation is to tap into your emergency funds - that’s why the fund was there in the first place!</li><li>In case there is further requirement, borrowing is the next option - as long as you know how to compare loans and maintain a healthy credit score.</li><li>In general, the higher your credit score, the interest you’ll be charged. That means if you’ve had financial difficulties in the past, you can get stuck in a vicious cycle where all your money goes to paying off interest.</li></ul><p>That’s why building a healthy credit is one of the most important steps to becoming financially literate.</p></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-4-borrow-3f7af051.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '6e5700b8e4a24029abd79e1f41d6601b',
        title: '<strong>Pillar 5: Protect</strong>',
        content: '<div class="bloc1"><p>The fifth and last key component of Financial Literacy is <strong>Protect</strong>.</p><p>The above four steps have put us in a good place - we know how to spend effectively, budget our expenses and invest our hard-earned money so our money can work for us.</p><p>The crucial step is also to protect your assets.</p><p>What does it mean to protect?</p><ul><li>Most important step of all, is to get oneself a Team Insurance. Important here to not see insurance as an investment. It’s an expense, but a very useful one - a term insurance ensures our loved ones don’t suffer a monetary disruption due to our unforeseen death.</li><li>Another good practice is to regularly review your bank accounts and credit card statements for mistakes or suspicious activity.</li><li>Finally, keeping documents and passwords secure to prevent scams and identity theft is imporant.</li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/pillar-5-protect-35d8709a.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4705a9d0dd98482fb59a775b77cf2e36',
        title: 'Financial Literacy at HumanDAO',
        content: '<div class="bloc1"><ul><li>The 5 Principles of Financial Literacy are the absolute basics which need to be ticked to get us started on our journey.</li><li>There are fascinating concepts like compounding, different forms of investment instruments which we will take up in future modules under Financial Literacy.</li><li>Being a part of the humanDAO community gives us another interesting avenue to be smart with our finances - owning and holding on to the humanDAO token $HDAO!</li><li>Take up up bounties to earn $HDAO and stake them so they grow over the long term.</li><li><strong>As the DAO grows, so will the value of the token - adding to your personal wealth building!</strong></li></ul></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/financial-literacy-at-humandao-77c83cc1.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8ca34f91481342d797759561ef3501ab',
        title: '<strong>Self-Assessment</strong>',
        content: '<div class="bloc1"><p>Having concrete answers to the questions below will establish that you are financially literate. Give them a try!</p><ol><li>Do you know how to create a personal budget?</li><li>Do you have an emergency fund that covers at least three months of basic living expenses?</li><li>Do you have a plan for retirement?</li><li>If you have debt, do you have a plan to pay it off?</li><li>Do you know your credit score and how to improve it?</li></ol></div><div class="bloc2"><img src=\'/humanDAO/lesson/financial-literacy-101/self-assessment-ad02cd83.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6708ccc251d7483a87d566185d0f3052',
        title: 'Knowledge Check',
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
        type: 'QUIZ',
        notionId: '09546608fa734a00a90937cfacff2ac8',
        title: 'Knowledge Check',
        quiz: {
          question: 'Lack of financial literacy leads to:',
          rightAnswerNumber: null,
          answers: [
            'Poor money management skills',
            'Not being able to use financial products like debts, bank accounts and credit cards correctly',
            'Not being able to meet life goals for want of money',
            'All of the above'
          ],
          id: 'financial-literacy-101-2'
        }
      },
      {
        type: 'QUIZ',
        notionId: '00e836113dbb4ac7a0b9ef5267457567',
        title: 'Knowledge Check',
        quiz: {
          question: 'After earning $HDAO token, an easy way to make the grow is:',
          rightAnswerNumber: 2,
          answers: [
            'Investing ',
            'Staking',
            'Exchanging',
            'All of the above'
          ],
          id: 'financial-literacy-101-3'
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
