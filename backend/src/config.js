require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "De MITO NINJA";
const description = "An NFT Collection with an outstanding real an virsual utilities ";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 3500,
    layersOrder: [
      { name: "Background" },
      { name: "Wings" },
      { name: "Weapon" },
      { name: "Cloth" },
      { name: "Head" },
      { name: "Hair" },
      { name: "Eye" },
      { name: "Mask" },
      { name: "Energy drink" },
      { name: "Logo" },
      { name: "Logo fire" },
    ],
  },{
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background next" },
      { name: "Weapon next" },
      { name: "Cloth next" },
      { name: "Head next" },
      { name: "Mask next" },
      { name: "Energy drink next" },
      { name: "Logo next" },
      { name: "Logo fire next" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 626,
  height: 626,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://linktr.ee/Mitowise", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'De MITO NINJA';
const CONTRACT_SYMBOL = 'DeMINI';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xD8C0326cf257D424c4a506F401eEa71Fb69aC3C4';
const TREASURY_ADDRESS = '0xD8C0326cf257D424c4a506F401eEa71Fb69aC3C4';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 5; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-08-09T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-08-06T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xD8C0326cf257D424c4a506F401eEa71Fb69aC3C4"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xD8C0326cf257D424c4a506F401eEa71Fb69aC3C4","0x94b47b7E72Ea0d14269c50597905Bc544fa5E46b","0x9b3045B6A0143EFe0531A59A138798c9119affBE","0x7D25A364B529fdcF87007FA2acf6E2FB085B6093","0x3B019F239CE3F0064c575988Ff41c951B54dF9f4","0xf3B8D49D507E16207a0f688274Aa899874ae980D","0x89fD7C6a23583A9b0d034E06595E67Fb646c2c21","0x56623a9Bc3387c4BdBcF88ED74BBd2DA70A7B4BE","0x70B13B3e8f74b5DBCFb0cDfAaf784e38230A9d8f","0x06AD48c6250B8f0C69970de7e7EfEf36c2107134","0xA33Fc8fd7c5954880b45c204067E346813C0E1BD","0x6D2BC6c828400a98BA6A0905cF598E495BB97eB1","0x684B4b9Ac813d0a104451fb19A83a7D661309dbf","0x08f5125DbfF45eb5F49D9eE3b5bed46591324733","0x2a0D84C02C503573B6EebA1AcF028FcBbBC54487","0x1DEEA6D990DE0B799f9F81418B8fC7Fb9b88fc0C","0x7bb7FAc1337A26a45f72253756C6bD02dBD666e1","0x13B3d5D4b7ddCD930341DF69F1Cd0f842e941348","0x65c6b6899832c50080a99048c26d9f209d4fc45a","0x9487216CF8B8226381F4a8a18bBf43577506fD0B","0x021ea5c1f73cbae56db39ba138bf2cd04872b92b","0x8f55bAc4B7a7e535dA8707BE66d88426136a9b8F","0xe5Fd5E0040b87c1f9F87CFa2090B190DC3B9cA44","0xd13De349b32408FdA3484f7fD72CE567eaF831E7","0xe1667067C94739300e50A74090104bF5A849976d","0xBB3534b8f6eCbF91699a11CDA060D6A5A01D4B8b","0x105A91534483313Fe317a175201fb50E8bF3260D","0x6669b7Ab2d7250Fdd569E0f8689681262af654fb","0x216860EB3D0980b23629Bb3eED5d1B6Fe1aC5849","0xb6BFC1ae077D232F437573336cFa8aa6D8ad7583","0xBB9Cea8405240e4b161Aafbd63AE6dc90da2AD59","0xE90816C0871cc6Ae976bDd07eb7e5Ba155c94074","0xd383309244A7C7Af4180817Df48bb3b2df242bDE","0xec23dD94c79B68313c34937516E0685e53086BAE","0x9fd4bA1C3A9490F20EFF7d8B18c3CF0083402aAE"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0xE38E4AB05E428FB045C42A505d85905e9573126E"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "WHICH NINJA ARE YOU"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiaxzr2pl7dqtwzfkddwir3iswyddtmachk5fnzbmdffjwyilqxqie"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "DeMINI",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://youtube.com/channel/UC-f0777SxAuwyCit-p5q7pw",
  creators: [
    {
      address: "7LD1zCpoNAaAqfN84HFKUzgobWHBzqYsfEgf2Q7ewixn",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
