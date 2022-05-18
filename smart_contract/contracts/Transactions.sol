<<<<<<< HEAD
// SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address receiver; 
        uint amount;
        string message;
        uint256 timestamp;
=======
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp,  string account, string keyword);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string account;
        string keyword;
>>>>>>> 6057248bbaf87df8fbd92f7c599ca12569c0790c
    }

    TransferStruct[] transactions;

<<<<<<< HEAD
    function addToBlockchain(address payable receiver, uint amount, string memory message) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
=======
    function transfer(address payable receiver, uint amount, string memory message, string memory account, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, account, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, account, keyword);

        receiver.transfer(amount);
>>>>>>> 6057248bbaf87df8fbd92f7c599ca12569c0790c
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
<<<<<<< HEAD

=======
>>>>>>> 6057248bbaf87df8fbd92f7c599ca12569c0790c
}