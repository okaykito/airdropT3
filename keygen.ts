import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
// @ts-ignore
import promptSync from "prompt-sync";

// Initialize prompt
const prompt = promptSync();

// 🔐 Generate a new keypair
const kp = Keypair.generate();
console.log(`\nYou've generated a new Solana wallet:\nPublic Key: ${kp.publicKey.toBase58()}`);
console.log(`Secret Key (byte array): [${kp.secretKey}]`);
console.log(`Secret Key (base58 for Phantom): ${bs58.encode(kp.secretKey)}\n`);

// 🔄 Convert base58 (Phantom export) to wallet byte array
function base58ToWallet() {
  const base58 = prompt("Enter your base58 private key: ");
  const walletBytes = bs58.decode(base58);
  console.log("Decoded wallet byte array:", Array.from(walletBytes));
}

// 🔄 Convert wallet byte array (comma-separated) to base58 (Phantom format)
function walletToBase58() {
  const input = prompt("Enter your wallet byte array (comma-separated): ");
  const byteArray = Uint8Array.from(input.split(",").map(Number));
  const base58 = bs58.encode(byteArray);
  console.log("Base58 private key:", base58);
}

// Uncomment to use interactively:
// base58ToWallet();
// walletToBase58();
