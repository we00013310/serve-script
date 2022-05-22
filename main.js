const abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const gatchaAbi = [
  {
    inputs: [
      { internalType: "address", name: "_prizeFundingWallet", type: "address" },
      { internalType: "address", name: "_fundingWallet", type: "address" },
      { internalType: "contract IBEP20", name: "_inputToken", type: "address" },
      { internalType: "uint256", name: "_price", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IBEP20",
        name: "inputToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IBEP20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "prizeRefIndex",
        type: "uint8",
      },
    ],
    name: "BuyGatcha",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IBEP20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CollectReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      { internalType: "contract IBEP20", name: "_token", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint16", name: "_totalNumber", type: "uint16" },
    ],
    name: "addPrizeRef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_number", type: "uint256" }],
    name: "batchBuyGatcha",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyGatcha",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collectReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundingWallet",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inputToken",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prizeFundingWallet",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    name: "prizeRefs",
    outputs: [
      { internalType: "contract IBEP20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint16", name: "totalNumber", type: "uint16" },
      { internalType: "uint16", name: "available", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prizeRefsLength",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomContract",
    outputs: [{ internalType: "contract IRandom", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_fundingWallet", type: "address" },
    ],
    name: "setFundingWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IBEP20", name: "_inputToken", type: "address" },
    ],
    name: "setInputToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_price", type: "uint256" }],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_prizeFundingWallet", type: "address" },
    ],
    name: "setPrizeFundingWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRandom",
        name: "_randomContract",
        type: "address",
      },
    ],
    name: "setRandomContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "_index", type: "uint8" },
      { internalType: "contract IBEP20", name: "_token", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint16", name: "_totalNumber", type: "uint16" },
      { internalType: "uint16", name: "_available", type: "uint16" },
    ],
    name: "updatePrizeRef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewAvailableGatchaNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "contract IBEP20", name: "_token", type: "address" },
    ],
    name: "viewUserCollectedAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint256", name: "_index", type: "uint256" },
    ],
    name: "viewUserPrizes",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "viewUserPrizesLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "contract IBEP20", name: "_token", type: "address" },
    ],
    name: "viewUserTotalAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

const configs = {
  mainnnet: {
    rpcUrl: "https://bsc-dataseed.binance.org/",
    chainId: 56,
    gatchaAddress: "",
    mgkAddress: "0xa1daa25016d83895f215ee724c78fcc1085accb2",
    mgkDecimals: 18,
  },
  testnet: {
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    chainId: 97,
    gatchaAddress: "0xd8cce39be1a3fb15c648dbf13ba4c47b77e1d873",
    mgkAddress: "0xa1daa25016d83895f215ee724c78fcc1085accb2",
    mgkDecimals: 18,
  },
};

const currentConfigs = configs.testnet;

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
const web3ReadOnly = new Web3(
  new Web3.providers.HttpProvider(currentConfigs.rpcUrl)
);

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;

// PUBLIC INFO
let rewardTypes = [];
let rewardTokensAddress = [];
let totalGacha = 0;
let availableGacha = 0;
let tokens = [];
let gatchaContract;

/**
 * Setup the orchestra
 */
async function init() {
  // TODO: Should implement a loading screen start
  // START INIT LOADING STATE
  document.querySelector("#title").textContent = "LOADING ....";

  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
  if (location.protocol !== "https:") {
    return console.log("https is required!");
  }

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
  await fetchPublicInfo();
  // END INIT LOADING STATE
  document.querySelector("#title").textContent = "Manga Token Gacha Contest";
}

async function fetchPublicInfo(isPrivate) {
  gatchaContract = new web3ReadOnly.eth.Contract(
    gatchaAbi,
    currentConfigs.gatchaAddress
  );
  const numberOfRewardTypes = await gatchaContract.methods
    .prizeRefsLength()
    .call();

  totalGacha = 0;
  availableGacha = 0;
  rewardTypes = [];
  tokens = [];
  for (let i = 0; i < numberOfRewardTypes; i++) {
    const rewardType = await gatchaContract.methods.prizeRefs(i).call();
    rewardTypes.push(rewardType);
    totalGacha += +rewardType.totalNumber;
    availableGacha += +rewardType.available;
    if (!rewardTokensAddress.includes(rewardType.token)) {
      rewardTokensAddress.push(rewardType.token);
    }
  }
  tokens = await Promise.all(
    rewardTokensAddress.map(async (o) => {
      const tokenContract = new web3ReadOnly.eth.Contract(abi, o);
      const symbol = await tokenContract.methods.symbol().call();
      const decimals = await tokenContract.methods.decimals().call();
      const name = await tokenContract.methods.name().call();
      return {
        name,
        address: o,
        symbol,
        decimals,
      };
    })
  );
  updatePublicInfoView();
  if (isPrivate) {
    updatePrivateInfoView();
  }
}

function updatePublicInfoView() {
  let rewardWrapper = document.querySelector("#reward-wrapper");
  rewardWrapper.innerHTML = "";

  rewardTypes.forEach((o) => {
    const token = tokens.find((tok) => (tok.address = o.token));
    const amount = new BigNumber(o.amount).div(
      new BigNumber(10).pow(token.decimals)
    );
    const entry = document.createElement("p");
    entry.appendChild(document.createTextNode(`${token.symbol} ${amount}`));
    rewardWrapper.appendChild(entry);
  });
}

function setLoadingTx(val) {
  if (val) {
    document.querySelector(".popup-pending-transaction").style.display =
      "block";
  } else {
    document.querySelector(".popup-pending-transaction").style.display = "none";
  }
}

function showGachaResult(reward) {
  document.querySelector(".modal-wrapper").style.display = "flex";
  document.querySelector(".gacha-animation").style.display = "block";
  document.querySelector(".gacha-check-prize-modal").style.display = "none";
  setTimeout(() => {
    document.querySelector(".gacha-animation").style.display = "none";
    document.querySelector(".gacha-win-modal").style.display = "block";

    const gatchaOpenResult = () => {
      document.querySelector(".gacha-win-modal").style.display = "none";
      document.querySelector(".gacha-open-animation").style.display = "block";
      setTimeout(() => {
        document.querySelector(".gacha-open-animation").style.display = "none";
        document.querySelector(".gacha-check-prize-modal").style.display =
          "block";
        document.querySelector("#price-value").textContent = `x ${reward}`;
      }, 3000);
    };

    let tmp = document.querySelector(".open-gacha-button");
    tmp.replaceWith(tmp.cloneNode(true));
    document
      .querySelector(".open-gacha-button")
      .addEventListener("click", gatchaOpenResult);
  }, 3000);
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
  // document.querySelector("#network-name").textContent = chainData.name;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  document.querySelector("#connected").style.display = "block";
  const mgkTokenContract = new web3.eth.Contract(
    abi,
    currentConfigs.mgkAddress
  );
  const allowance = await mgkTokenContract.methods
    .allowance(selectedAccount, currentConfigs.gatchaAddress)
    .call();

  if (!new BigNumber(allowance).isEqualTo(0)) {
    document.querySelector("#gacha-buy-buttons").style.display = "grid";
    document.querySelector("#btn-approve").style.display = "none";
  }

  const onBuy = (number) => async () => {
    if (number === 1) {
      const writableGatchaContract = new web3.eth.Contract(
        gatchaAbi,
        currentConfigs.gatchaAddress
      );
      // set loading
      document.querySelectorAll(".gacha-buy-button").forEach((o) => {
        o.setAttribute("disabled", true);
      });
      try {
        setLoadingTx(true);
        const res = await writableGatchaContract.methods
          .buyGatcha()
          .send({ from: selectedAccount });
        console.log("bought", res);
        document.querySelectorAll(".gacha-buy-button").forEach((o) => {
          o.setAttribute("disabled", false);
        });
        let prize = res.events.BuyGatcha.returnValues.amount;
        const tokenPrice = tokens.find(
          (o) =>
            o.address.toLowerCase() ===
            res.events.BuyGatcha.returnValues.token.toLowerCase()
        );
        prize = new BigNumber(prize).div(
          new BigNumber(10).pow(tokenPrice.decimals)
        );
        showGachaResult(prize);
        fetchPublicInfo(true);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingTx(false);
      }
    }
  };

  const onApprove = async () => {
    const res = await mgkTokenContract.methods
      .approve(currentConfigs.gatchaAddress, "9999999999999999999999999999999")
      .send({ from: selectedAccount });

    document.querySelector("#gacha-buy-buttons").style.display = "grid";
    document.querySelector("#btn-approve").style.display = "none";
  };

  document.querySelector("#btn-approve").addEventListener("click", onApprove);
  let tmp = document.querySelector("#btn-buy-1");
  tmp.replaceWith(tmp.cloneNode(true));
  document.querySelector("#btn-buy-1").addEventListener("click", onBuy(1));
  tmp = document.querySelector("#btn-buy-5");
  tmp.replaceWith(tmp.cloneNode(true));
  tmp = document.querySelector("#btn-buy-10");
  tmp.replaceWith(tmp.cloneNode(true));
  document.querySelector(
    "#your-wallet"
  ).textContent = `Your Wallet: ${selectedAccount}`;
  updatePrivateInfoView();
}

function updatePrivateInfoView() {
  let rewardWrapper = document.querySelector("#gatcha-rewards-container");
  rewardWrapper.innerHTML = "";
  rewardTypes.forEach((o) => {
    const token = tokens.find((tok) => (tok.address = o.token));
    const amount = new BigNumber(o.amount).div(
      new BigNumber(10).pow(token.decimals)
    );
    const entry = document.createElement("p");
    entry.appendChild(document.createTextNode(`${token.symbol} ${amount}`));
    rewardWrapper.appendChild(entry);
  });
  document.querySelector("#available-gatcha").textContent = availableGacha;
  document.querySelector("#total-gatcha").textContent = totalGacha;
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {
  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  // document.querySelector("#connected").style.display = "none";
  // document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").style.display = "none";
  await fetchAccountData(provider);
  // document.querySelector("#btn-connect").removeAttribute("disabled");
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if (provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  // document.querySelector("#prepare").style.display = "block";
  document.querySelector("#btn-connect").style.display = "block";
  document.querySelector("#btn-disconnect").style.display = "none";
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#not-connected").style.display = "block";
  console.log("disconnected");
}

/**
 * Main entry point.
 */
window.addEventListener("load", async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  // document
  //   .querySelector("#btn-disconnect")
  //   .addEventListener("click", onDisconnect);
});
