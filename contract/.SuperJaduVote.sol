// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SuperJaduVote {
    struct Poll {
        string question;
        string optionA;
        string optionB;
        uint voteA;
        uint voteB;
    }

    mapping(uint => Poll) public polls;
    uint public pollCount;

    function createPoll(string memory _question, string memory _optionA, string memory _optionB) public {
        polls[pollCount] = Poll(_question, _optionA, _optionB, 0, 0);
        pollCount++;
    }

    function vote(uint _pollId, bool _voteForA) public {
        Poll storage poll = polls[_pollId];
        if (_voteForA) {
            poll.voteA++;
        } else {
            poll.voteB++;
        }
    }

    function getPoll(uint _pollId) public view returns (string memory, string memory, string memory, uint, uint) {
        Poll memory poll = polls[_pollId];
        return (poll.question, poll.optionA, poll.optionB, poll.voteA, poll.voteB);
    }
}
