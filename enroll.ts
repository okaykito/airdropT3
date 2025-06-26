import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { Program, AnchorProvider, Wallet } from "@coral-xyz/anchor";
import { IDL, Turbin3Prereq } from "/home/kito/Code/Turbine/Zero/airdrop/Turbin3_prereq";
import wallet from "./Turbin3-wallet.json";

const MPL_CORE_PROGRAM_ID = new PublicKey("CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d");

const payer = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com");

// Fix: Use Wallet correctly for AnchorProvider
const anchorWallet = {
  publicKey: payer.publicKey,
  signTransaction: async (tx: any) => {
    tx.partialSign(payer);
    return tx;
  },
  signAllTransactions: async (txs: any[]) => {
    txs.forEach((tx) => tx.partialSign(payer));
    return txs;
  },
};

const provider = new AnchorProvider(connection, anchorWallet as any, { commitment: "confirmed" });

const program: Program<Turbin3Prereq> = new Program(IDL, MPL_CORE_PROGRAM_ID, provider);

const account_seeds = [
  Buffer.from("prereqs"),
  payer.publicKey.toBuffer(),
];
const [account_key, _account_bump] = PublicKey.findProgramAddressSync(account_seeds, program.programId);

const mintCollection = new PublicKey("5ebsp5RChCGK7ssRZMVMufgVZhd2kFbNaotcZ5UvytN2");

const mintTs = Keypair.generate();

const SYSTEM_PROGRAM_ID = SystemProgram.programId;
const keypair = payer; // Use payer as keypair for consistency

// First transaction: Initialize
(async () => {
  try {
    const txhash = await program.methods
      .initialize("okaykito")
      .accounts({
        user: keypair.publicKey,
        account: account_key,
        systemProgram: SYSTEM_PROGRAM_ID,
      })
      .signers([keypair])
      .rpc();

    console.log(`✅ Initialize Success! TX: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`❌ Initialize failed: ${e}`);
  }
})();

// Second transaction: Submit TS
(async () => {
  try {
    const txhash = await program.methods
      .submitTs()
      .accounts({
        user: payer.publicKey,
        account: account_key,
        mint: mintTs.publicKey,
        collection: mintCollection,
        mplCoreProgram: MPL_CORE_PROGRAM_ID,
        systemProgram: SYSTEM_PROGRAM_ID,
      })
      .signers([payer, mintTs])
      .rpc();

    console.log(`✅ SubmitTS Success! TX: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`❌ SubmitTS failed: ${e}`);
  }
})();
