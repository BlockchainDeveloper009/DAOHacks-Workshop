// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Array{
    uint[] public arr1;
    constructor() {}
    function addToArr(uint num) external {
        arr1.push(num);
    }

    function popToArr() external {
        arr1.pop();
    }
    function removeFromArr(uint idx) external {
        delete arr1[idx];
    }
    function examples () external pure {
        uint[] memory a = new uint[](5);
    }
}

contract Structure{
    struct usrStruct{
        string name;
        uint age;
        address account;
        bool boy;
    }
    usrStruct[] public users;
    function func1(string memory _name,uint _age, bool _boy) external{
        users.push(usrStruct(_name,_age, msg.sender,_boy));
    }
    function func2(string memory _name,uint _age, bool _boy) external{
        users.push(usrStruct(_name,_age, msg.sender,_boy));
    }
    function func3(string memory _name,uint _age, bool _boy) external{
        users.push(usrStruct(_name,_age, msg.sender,_boy));
    }

}

contract Enum {
    enum Phases {
        off,
        free,
        earlySale,
        preSale,
        publicSale,
        paused
    }
    Phases public contractPhase;
    constructor() {
        contractPhase = Phases.off;
    }

    function changeState(Phases _state) external {
        contractPhase = _state;
    }
}
contract Errors {
    address public owner;
    constructor() {}
    error NumberLessThan5();

    function func1(uint _num) external pure {
        require(_num > 5, "Number is less than 5.");
    }
    function func2(uint _num) external pure {
        if(_num < 5){
            revert ("Number is less than 5.");
        }
    }
    function func3(uint _num) external view {
        assert(owner == address(0));
    }
    function func4(uint _num) external pure {
        if(_num < 5){
            revert NumberLessThan5();
        }
    }
}