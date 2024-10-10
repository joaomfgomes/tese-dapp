export const MY_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const abi = [
	{
      "inputs": [
        {
          "internalType": "string",
          "name": "initialSentence",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getSentence",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newSentence",
          "type": "string"
        }
      ],
      "name": "setSentence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
	}
];