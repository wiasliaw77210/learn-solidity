pragma solidity ^0.5.8;

contract SimpleStorage {
    uint256 public storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256 retVal) {
        return storedData;
    }
}
