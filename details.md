yarn add @types/node typescript @solana/web3.js bs58
yarn add -D ts-node

touch keygen.ts
touch airdrop.ts
touch transfer.ts
touch enroll.ts
yarn tsc --init --rootDir ./ --outDir ./dist --esModuleInterop --lib
ES2019 --module commonjs --resolveJsonModule true --noImplicitAny true