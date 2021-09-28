import { MenuEntry } from 'dito-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://ditoswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://ditoswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://ditoswap.com/pools',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: '/nft-marketplace',
  },
  // {
  //   label: 'Lottery (Coming Soon)',
  //   icon: 'TicketIcon',
  //   href: '',
  //   // href: '',
  // },
  // {
  //   label: 'IFO (Coming Soon)',
  //   icon: 'IfoIcon',
  //   href: '',
  //   // href: '',
  // },
  // {
  //   label: 'Referrals (Coming Soon)',
  //   icon: 'HandshakeIcon',
  //   href: '',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://ditoswap.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xAAC271161c2a8283DfAAbb1b9696C6EFF031e980',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xAAC271161c2a8283DfAAbb1b9696C6EFF031e980',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/ditoswap/',
      },
      {
        label: 'Docs',
        href: 'https://ditoswap.gitbook.io/dito-swap/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@ditoswap',
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href:
      '',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: '',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: '',
  },
]

export default config
