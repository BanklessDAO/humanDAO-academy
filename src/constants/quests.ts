import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/bankless-academy-wallet-basic-2021-logo-1630062990990.png',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 6454,
    duration: 15,
    learnings:
      'Why do you need a wallet?<br>What is a wallet?<br>What are keys?<br>How do I protect your keys?<br>Wallet Security<br>Custodial vs non-custodial wallets',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: 'a4c2283b54eb4ab4934520886eaff744',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        title: 'Why do you need a wallet?',
        content:
          "<iframe src='https://www.youtube.com/embed/YVgfHZMFFFQ?feature=oembed'></iframe><p>TODO: create a similar video ourself</p>",
      },
      {
        type: 'LEARN',
        title: 'What is a wallet? ',
        content:
          '<p>Typically, we associate wallets with money storage. In crypto sphere a “wallet” is a metaphor, for technology that functions as a lock box, holding your access to the <span class="tooltip" definition="A peer to peer (P2P) network of computers instead of a single computer." style="color:rgba(128, 128, 128, 1)">blockchain</span>.</p><p>A simple definition of a wallet is an application or device used to interact with a blockchain.</p><p>When a wallet interacts with a blockchain, one can make purchases, transfer assets, interact with applications, and more!</p><iframe src=\'https://embed.lottiefiles.com/animation/70066\'></iframe>',
      },
      {
        type: 'QUIZ',
        title: 'What is a wallet?',
        quiz: {
          rightAnswerNumber: 4,
          answer_1: 'A device equipped with RFID technology',
          answer_2: 'A bi-fold device',
          answer_3: 'An account that protects my assets',
          answer_4: 'An app or device used to interact with a blockchain.',
          id: 'wallet-basics-1',
        },
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<p>Every wallet has a unique pair of keys. There is one <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public key</span> and there is one <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private key</span>. </p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F020c645b-001c-42d6-bc94-f47fe4e91074%2F16_0.png?table=block&id=c5e4d889-40f2-4c74-b30d-18024ca3a0a7\'>',
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<p>You can think of the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public key</span> like your home address.</p><p>It\'s called public because anyone can see it.</p><p>Public keys allow others to identify you in order to send crypto assets to your address.</p>',
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private key</span> is like your house key.</p><p>It\'s called private because <em><strong>only you</strong></em> want access to it.</p><p>Private keys allow you access to your wallet in order for you to send crypto assets out to others.</p>',
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<p>When creating a wallet, <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public keys</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private keys</span> are automatically generated.</p><p>Remember <em><strong>each wallet</strong></em> has it own pair of keys and you can think of the public key like your home address and your private key is like your house key.</p>',
      },
      {
        type: 'QUIZ',
        title:
          'In simple terms, you can think of the public key as your _____, and the private key as your _____',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'Routing Number / Account Number',
          answer_2: 'Home address / House key',
          answer_3: 'Address / Zip code',
          answer_4: 'Phone Number / Social Security Number',
          id: 'wallet-basics-2',
        },
      },
      {
        type: 'LEARN',
        title: 'Not your keys, not your crypto!',
        content:
          '<p>Recall that private keys let you access your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain." style="color:rgba(128, 128, 128, 1)">wallet</span> to send crypto. In almost all cases, you want to own and secure your wallet’s private key.</p><p>But not all wallets will let you do that. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets." style="color:rgba(255, 0, 26, 1)">custodial wallet</span>, another party controls your private keys.</p><p>You’re trusting a third party to secure your funds and return them to you if you want to trade or send them somewhere else.</p><p></p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabda02b7-850e-4f4b-9fcc-637330046e92%2F0_q_FQ4P0pA0PopIqx.png?table=block&id=9111b1f7-fbf1-4224-933c-a2628dedcfb4\'>',
      },
      {
        type: 'LEARN',
        title: 'Not your keys, not your crypto!',
        content:
          '<p>With a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgba(0, 135, 107, 1)">non-custodial wallet</span>, you have sole control of your private keys, which in turn control your crypto.</p><p>Remember, not your keys, not your crypto! That means that if you don’t control the keys of the wallet, you don’t control the crypto.</p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ba92a8d-c83e-46ad-9807-f7f19c4bac4e%2Fproof-of-keys-bitcoin.png?table=block&id=49540bd3-64bf-4e77-8967-c07b7d62bb3f\'>',
      },
      {
        type: 'QUIZ',
        title: 'I control my private keys with a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-3',
        },
      },
      {
        type: 'LEARN',
        title: 'Protect your keys, protect your crypto!',
        content:
          '<p>Since there is no third party involved in a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgba(0, 135, 107, 1)">non-custodial wallet</span>, you are solely responsible for your keys.</p><p>You must take your own precautions to protect your funds.</p><p>If you lose your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private key</span>, you can no longer access your wallet to spend, withdraw, or transfer your crypto. Your wallet is GONE FOREVER!!!</p><p>Therefore, it is imperative to save the private key in a secure location and on a durable material </p><p>.</p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F559e242d-4fa2-4fe6-8bb5-06996c6326c2%2FCopy-of-9-security-Tips-Infographic-1_1-1-min.png?table=block&id=ba9425f8-b4c9-4295-b4a5-40973b8d2c65\'>',
      },
      {
        type: 'QUIZ',
        title:
          'I am solely responsible for my private keys with a non-custodial wallet',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-4',
        },
      },
      {
        type: 'LEARN',
        title: 'How do I protect my keys?',
        content:
          '<h2>The 5 most effective ways to protect your keys:</h2><ol><li>Never share or reveal your private key to anyone.</li><li>Never save it online</li></ol>',
      },
      {
        type: 'QUIZ',
        title:
          'Which of this method is <strong>the safest way</strong> to store your private keys?',
        quiz: {
          rightAnswerNumber: 4,
          answer_1: 'Save it on my computer and print it on piece of paper.',
          answer_2:
            'Take a screenshot or a picture of the private key on my phone.',
          answer_3:
            'Save it in my Dropbox account or any similar cloud service.',
          answer_4:
            'Write it on a piece of paper or durable material and store it in a safe place.',
          id: 'wallet-basics-5',
        },
      },
      {
        type: 'LEARN',
        title: 'What is a recovery phrase?',
        content:
          '<p>When you create a <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain." style="color:rgba(128, 128, 128, 1)">wallet</span>, a <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key." style="color:rgba(128, 128, 128, 1)">recovery phrase</span> is also created that is specific to that wallet.</p><p>It stores the information that can be used to recover your wallet and crypto if:</p><ul><li>your wallet fails unexpectedly or gets damaged;</li><li>you are unable to access it due to misplacement or theft;</li></ul><p>A recovery phrase is a list of 12 to 24 words and represents a single secret piece of data that is used to generate your wallet’s <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private key</span>.</p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe57e2d52-a97e-42de-aeaf-e0b26a66e8ae%2F0_u4mBi5vxWeCTLwMP.png?table=block&id=95fb32e7-08c1-43aa-b02a-f60e2830a48b\'>',
      },
      {
        type: 'LEARN',
        title: 'What is a recovery phrase?',
        content:
          '<p>This same <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key." style="color:rgba(128, 128, 128, 1)">recovery phrase</span> can actually be used to access your wallet on different devices.</p><ul><li>Find a way to write recovery phrases on durable material such as tungsten, aluminum engraving kit, mylar, or...</li></ul><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3388312b-548e-49b4-be1c-ca48431aab9b%2Fwww.notion.so_bankless_Wallet-Basics-98405bd0f2b94bb2a3079eed504a011e.png?table=block&id=cd05051b-3274-4ae6-be67-d5cb761efdc6\'><ul><li>Write down your recovery phrase and store it in a secure location.</li></ul>',
      },
      {
        type: 'QUIZ',
        title: 'I can use a recovery phrase to _____',
        quiz: {
          rightAnswerNumber: 3,
          answer_1: 'Recover my wallet if lost, stolen, or damaged',
          answer_2: 'Access my wallet on multiple devices',
          answer_3: 'Both [1] & [2]',
          answer_4: 'None of the above',
          id: 'wallet-basics-6',
        },
      },
      {
        type: 'LEARN',
        title: 'Types of non-custodial wallets',
        content:
          '<p>There are 2 major types of <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgba(0, 135, 107, 1)">non-custodial wallets</span> : <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet." style="color:rgba(255, 0, 26, 1)">hot wallets</span> and <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection." style="color:rgba(0, 120, 223, 1)">cold wallets</span></p><p>A <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet." style="color:rgba(255, 0, 26, 1)">hot wallet</span>Perpetually connected to the internet.</p><ul><li>PROS 👍: They are usually free, simple to set up, and easy to use.</li><li>CONS 👎: They are less secure due to internet connection.</li></ul><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection." style="color:rgba(0, 120, 223, 1)">cold wallet</span>is <strong>never</strong> connected to the internet.</p><ul><li>PROS 👍: They are more secure.</li><li>CONS 👎: They aren\'t free, sometimes cumbersome to use, and are not ideal for quick transactions.</li></ul><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fab788f0c-0b84-4101-ac1d-3728d5d82385%2FWhat-is-a-hardware-wallet-1.jpg?table=block&id=de5e7b85-5535-47d8-bf15-ec8176934b6f\'>',
      },
      {
        type: 'QUIZ',
        title: 'A cold wallet is more secure than a hot wallet',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-7',
        },
      },
      {
        type: 'LEARN',
        title: 'MetaMask Wallet',
        content:
          '<p>MetaMask is one of many non-custodial hot wallets</p><ul><li>It is a widely used wallet with over 5 million monthly active users so it is more likely to be compatible with your preferred <span class="tooltip" definition="An abbreviation for decentralized finance, defi is a system by which financial products become available on a public decentralized blockchain network" style="color:rgba(128, 128, 128, 1)">DeFi</span> apps.</li><li>A browser extension is available on Chrome, Brave, Edge, and Firefox internet browsers.</li><li>Also available as mobile app for Android and IOS users.</li></ul><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F46078cc2-f25a-458a-aaca-a59e5cb6ebc6%2FScreen_Shot_2021-08-21_at_15.28.09.jpg?table=block&id=ca2e43fd-3ae7-4d1f-bf5b-ae3ce65c72e9\'>',
      },
      {
        type: 'QUIZ',
        title: 'MetaMask is a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-8',
        },
      },
      {
        type: 'LEARN',
        title: 'How to setup MetaMask',
        content:
          "<p>For convenience and ease of access throughout this course, you will need a MetaMask wallet. Next we will demonstrate how to set up a MetaMask wallet.</p><p>Download the browser extension from the official website: <a href='https://metamask.io/download'>https://metamask.io/download</a></p><iframe src='https://www.youtube.com/embed/pGO8WhDZlMo'></iframe>",
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest',
        component: 'WalletBasics',
      },
      {
        type: 'POAP',
        title: 'Collect your POAP',
      },
    ],
  },
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/bankless-academy-intro-to-defi-2021-logo-1630063060767.png',
    learningActions:
      'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    knowledgeRequirements: 'Wallet Basics: how to manage a web3 wallet',
    poapEventId: 6455,
    duration: 10,
    learnings:
      'What is Defi?<br>How DeFi works<br>The DeFi stack<br>The security layer<br>What are the possibilities with DeFi',
    difficulty: 'Easy',
    description: 'Understand the basics of Decentralized Finance',
    name: 'Intro to DeFi',
    notionId: '1ba937a629a343c6b82df2a682f311f6',
    slug: 'intro-to-defi',
    slides: [
      {
        type: 'LEARN',
        title: 'What is DeFi?',
        content:
          "<ul><li>DeFi is an abbreviation for decentralized finance. It is a system by which financial products become available on a public decentralized blockchain network.</li><li>The nature of decentralization utilizes peer to peer transaction, enabling anyone to use DeFi permissionlessly. </li><li>Peer to peer transaction are conducted directly between 2 parties, rather than using middlemen like exchanges, banks, or brokerages.</li><li>The skill cube is our map of the DeFi ecosystem. The objective: to maximize crypto wealth and become a bankless <span class='color-red'>jedi</span>.</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F719d145c-f19f-4a0c-b643-a8ee9215a17e%2Fskill_cube.png?table=block&id=f13a05f5-b2b1-45e3-ac8b-08620c77a632'>",
      },
      {
        type: 'LEARN',
        title: 'How Defi works',
        content:
          '<ul><li><span class="tooltip" definition="An abbreviation for decentralized finance, defi is a system by which financial products become available on a public decentralized blockchain network" style="color:rgba(128, 128, 128, 1)">DeFi</span> revolves around decentralized applications, also known as <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority." style="color:rgba(128, 128, 128, 1)">DApps</span></li><li>DApps are digital applications or programs that exist and run on a blockchain.<span class=\'color-yellow\'> </span>They are outside the purview and control of a single authority.</li><li><span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority." style="color:rgba(128, 128, 128, 1)">DApps</span> are typically accessed through a <span class="tooltip" definition="Refers to dApps that run on the blockchain and allow anyone to participate without monetizing their personal data." style="color:rgba(128, 128, 128, 1)">Web3</span> enabled browser extension or application, such as MetaMask</li><li>Web3 refers to <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority." style="color:rgba(128, 128, 128, 1)">DApps</span> that run on the blockchain and allow anyone to participate without monetizing their personal data.</li></ul>',
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi',
        content:
          "<ul><li>The skill cube contains all the money verbs. </li><li>Money Verbs are the things you can do in legacy finance, but more efficiently in DeFi because there is no middleman. </li><li>Instead of paying the middleman, you can pay yourself! </li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0670f557-ad79-4d1c-ad80-8bd70ff5af6e%2Fhttps___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_84b02006-3141-4b62-b1e9-009739064efb_896x690.png?table=block&id=232154ee-1b4a-47b7-9e3d-957b0f20cd85'>",
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi - Hold',
        content:
          "<ul><li>Crypto prices are highly volatile, they go up and down. </li><li>The HODL mentality is the idea of retaining assets even through short to medium term price fluctuations. By holding long term, the HODLer experiences more price appreciation. </li><li><strong>HODL</strong> is an acronym for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc025c790-c443-4f1e-8822-7b84d4056e7c%2FScreen_Shot_2021-08-27_at_13.33.32.jpg?table=block&id=f7600420-e639-442e-9e43-7905579008d0'>",
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi - Lend/Borrow',
        content:
          "<ul><li>In DeFi, anyone can borrow and anyone can become a lender.</li><li>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a peer-to-peer level.</li><li>Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest within a set amount of time.</li><li>Peer-to-peer loans means that long-term investors can earn interest from the loan and it enables users to access loans at lower rates with DeFi than if they went through exchanges or through traditional loans.</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe76d6096-70a3-47b9-a0f8-a3dc644829b5%2FLending02.png?table=block&id=8b874817-d679-4a60-ac45-adae8980c870'>",
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Stake',
        content:
          "<ul><li>Staking in Defi is similar to lending, however it's a special type of lending.</li><li>Instead of lending your crypto to another user on a peer-to-peer basis, you can lend your crypto to a network or protocol to help bolster its ability to process transactions.</li><li>In exchange for helping secure the network or protocol, you can earn rewards by staking.</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c8cb40e-82dd-4629-943a-5e2d790fd580%2Fstaking.png?table=block&id=c1afdbc3-ec82-4001-ae3c-3d6458272455'>",
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Spend',
        content:
          "<ul><li><strong>Spend—</strong>use your crypto in exchange for goods or services. </li><li>Be aware that when you spend your crypto, you're transferring ownership and you are no longer exposed to price movement. </li><li>For example, in 2010 a man paid 10,000 BTC, valued at $41, for 2 pizzas. Right now, 10,000 BTC is valued at $430M. Make sure that you really want whatever you are buying with your crypto since after you spend it.</li></ul>",
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Invest',
        content:
          "<ul><li>Equal opportunity does not exist in traditional finance. Investors may be limited due to time constraints, income levels, voting power, etc.</li><li>In DeFi, there are no preferred or common shareholders. Everyone has the same right to vote in governance.</li><li>Anyone can purchase any asset, you don't need a specified income level to purchase assets.</li><li>You can also invest anytime, anywhere in DeFi. You are not limited to trading during restricted hours or location</li></ul>",
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Earn',
        content:
          '<ul><li>Earning in defi is when you<strong> </strong>do something of value in exchange for crypto rewards</li><li>The best thing is <strong>no upfront capital required</strong> for some earning actions</li><li>Examples include completing tasks for projects or participating in contests </li><li>You can claim a bounty and complete open tasks from DAOs and other projects </li></ul>',
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Trade',
        content:
          "<ul><li>DeFi lets you trade any asset in a peer to peer environment. There is no middleman and you don't need permission.</li><li>Trading cryptocurrency is also available on centralized exchanges. However, because they own your private keys, there's a greater risk of stolen funds, frozen accounts, and/or censored transactions. </li><li>Trading in DeFi is permissionless and available 24/7 globally with no restrictions for any reason including name, age, gender, location, race, religion, or anything. DeFi is completely open and free for anybody to use. </li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5af70635-303d-4322-9c4d-4d310631885b%2FScreenshot_from_2021-09-22_11-52-39.png?table=block&id=15c3b997-80ee-4c28-836a-e32e6c83305e'>",
      },
      {
        type: 'LEARN',
        title: '<strong>Bet—</strong>risk and earn money by making a bet',
        content:
          '<ul><li>A Bet is a Trade in a Cornered Market/ Traditionally in the dominant culture, betting is monopolized in a Cornered Market</li><li>In a Cornered Market like a casino, there is a predetermined risk of loss in favor of the middle man</li><li>In DeFi, when the middle man influence is reduced or removed risk of loss can be more fairly distributed or mitigated completely</li><li>Game Theory is used in DeFi to test and experiment with Community Owned and Governed Sports betting, Prediction Markets, and Lotteries.</li></ul>',
      },
      {
        type: 'QUEST',
        title: 'Intro to DeFi Quest',
        component: 'IntroToDeFi',
      },
      {
        type: 'POAP',
        title: 'Collect your POAP',
      },
    ],
  },
]

export default QUESTS