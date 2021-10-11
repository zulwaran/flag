import Web3 from 'web3'
import Web4 from '@cryptonteam/web4'
import BigNumber from 'bignumber.js';
import { ERC20Abi } from './abis'

const { ethereum } = window;
let web4 = new Web4();
let web3Wallet;
let web3Guest
let userAddress;
let chainId;

const tokenAddressArray = [
    '0x4b107a23361770534bd1839171bbf4b0eb56485c',
    '0xc13da4146d381c7032ca1ed6050024b4e324f4ef',
    '0x8d0c36c8842d1dc9e49fbd31b81623c1902b7819',
    '0xa364f66f40b8117bbdb772c13ca6a3d36fe95b13',
]

export const connectWallet = async () => {
    try {
        if (!ethereum) {
            console.log('metamask is not install')
            return false;
        }
        web3Wallet = new Web3(ethereum); // init web3
        if (await web3Wallet.eth.getCoinbase() === null) { // проверяем подключен ли metamask
            await ethereum.enable(); // подключить metamask
        }
        userAddress = await web3Wallet.eth.getCoinbase(); // получить адрес пользователя
        chainId = await web3Wallet.eth.net.getId(); // запись сети
        if (+chainId !== 4) {
            console.log('current project work on rinkeby network')
            return false;
        }
        await web4.setProvider(ethereum, userAddress);
        return true;
    } catch (err) {
        return false;
    }
};

export const connectNode = () => {
    try {
        let bscUrl
        if (process.env.IS_MAINNET === 'true') {
            bscUrl = 'wss://mainnet.infura.io/ws/v3/a146e88019d34a119d7487d43116551f'
        } else {
            bscUrl = 'wss://rinkeby.infura.io/ws/v3/a146e88019d34a119d7487d43116551f'
        }
        const provider = new Web3.providers.WebsocketProvider(bscUrl)
        web3Guest = new Web3(provider)
        return true
    } catch (e) {
        return false
    }
}

export const fetchContractData = async (method, abi, address, params) => {
    try {
        const contract = new web3Guest.eth.Contract(abi, address)
        return await contract.methods[method].apply(this, params).call()
    } catch (e) {
        console.log(e)
        return ''
    }
}

export const getTokens = async () => {
    const absErc20 = web4.getContractAbstraction(ERC20Abi);
    let objectArray = []
    for (let i = 0; i < tokenAddressArray.length; i++) {
        const symbol = await fetchContractData('symbol', ERC20Abi, tokenAddressArray[i])
        const name = await fetchContractData('name', ERC20Abi, tokenAddressArray[i])
        const decimals = await fetchContractData('decimals', ERC20Abi, tokenAddressArray[i])
        const instToken = await absErc20.getInstance(tokenAddressArray[i]);
        const object = {
            symbol: symbol,
            name: name,
            decimals: decimals,
            address: tokenAddressArray[i],
            inst: instToken,
        }
        console.log(objectArray);
        objectArray = [...objectArray, object]
    }
    return objectArray
}