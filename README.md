# 🗳️ SuperJadu Vote

**Private. Fun. Transparent — Your Vote, Your Privacy.**

SuperJadu Vote is a confidential voting dApp demo built for the Zama Builder Track.
This demo uses a simple frontend (HTML/CSS/JS) and a sample Solidity contract to demonstrate voting flow.
Note: This demo currently stores votes in-memory on the frontend; integration with FHEVM testnet is next.

## Demo
https://superjadu.fun  <!-- nanti jika sudah deploy, isi dengan URL final -->

## Files
- `index.html` - main page (create + vote)
- `script.js` - frontend logic (demo)
- `style.css` - styling
- `contract/SuperJaduVote.sol` - sample solidity contract

## How to run (local)
1. Put files in a folder and open `index.html` in browser (no server needed for demo).
2. To use a simple static server: `npx http-server .` (install http-server globally if perlu)

## Next steps
- Connect frontend to smart contract via Web3 and MetaMask.
- Deploy contract to Zama FHEVM testnet and implement encrypted vote flow.

## License
MIT © 2025 SuperJadu
