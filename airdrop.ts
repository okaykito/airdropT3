import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import wallet from "./dev-wallet.json"
// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
// Create a Solana devnet connection to devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

// coming back in 5 mins with the actual wallet keys (have to dualboot to get them)
// till now we have updated the dev-wallet.json file with the keypair from the Phantom wallet
// and wrote code before the claim 2 devnet SOL tokens part

(async () => {
try {
// We're going to claim 2 devnet SOL tokens
const txhash = await
connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);

console.log(`Success! Check out your TX here:
https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
} catch(e) {
console.error(`Oops, something went wrong: ${e}`)
}
})();
