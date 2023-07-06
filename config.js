import { stringToPath } from "@cosmjs/crypto";
import "dotenv/config";
process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.MNO_KEY; // "development"

export default {
  port: 8088, // http port
  db: {
    path: "./db/faucet.db", // save request states
  },
  project: {
    name: "vince_1903",
    logo: "https://raw.githubusercontent.com/AyrisDev/vinceChainAssets/main/logo-white.png",
    deployer: `<a href="https://ayris.dev">ayris.dev</a>`,
  },
  blockchains: [
    {
      type: "Ethermint",
      ids: {
        chainId: 1903,
        cosmosChainId: "vince_1903-1",
      },
      name: "VinceChain Testnet",
      endpoint: {
        // make sure that CORS is enabled in rpc section in config.toml
        // cors_allowed_origins = ["*"]
        rpc_endpoint: "http://154.53.47.14:26657/",
        evm_endpoint: "http://154.53.47.14:8545/",
      },
      sender: {
        option: {
          hdPaths: [stringToPath("m/44'/60/0'/0/0")],
          prefix: "vce",
        },
      },
      tx: {
        amount: {
          denom: "avce",
          amount: "5000000000000000000",
        },
        fee: {
          amount: [
            {
              amount: "100000",
              denom: "avce",
            },
          ],
          gas: "10000000000000",
        },
      },
      limit: {
        // how many times each wallet address is allowed in a window(24h)
        address: 1,
        // how many times each ip is allowed in a window(24h),
        // if you use proxy, double check if the req.ip is return client's ip.
        ip: 1,
      },
    },
  ],
};
