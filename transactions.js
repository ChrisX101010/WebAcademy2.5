const crypto = require('crypto');

class Block {
    constructor(index, timestamp, data) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto
            .createHash('sha256')
            .update(this.index.toString())
            .update(this.timestamp.toString())
            .update(this.data)
            .digest('hex');
    }

    toString() {
        return `Block #${this.index}\nTimestamp: ${this.timestamp}\nData: ${this.data}\nHash: ${this.hash}\n`;
    }
}

class Blockchain {
    constructor() {
        this.chain = [
            this.createGenesisBlock()
        ];
    }

    createGenesisBlock() {
        return new Block(0, new Date().toISOString(), "Genesis Block");
    }

    addBlock(newBlock) {
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

// Test the blockchain with transactions
const blockchain = new Blockchain();

blockchain.addBlock(new Block(1, new Date().toISOString(), "Transaction Data 1"));
blockchain.addBlock(new Block(2, new Date().toISOString(), "Transaction Data 2"));
blockchain.addBlock(new Block(3, new Date().toISOString(), "Transaction Data 3"));

// Output blocks
blockchain.chain.forEach(block => {
    console.log(block.toString());
});
