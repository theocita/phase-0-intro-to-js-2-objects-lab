// Write your solution in this file!
let employee = { name:'Sara', streetAddress: '12 Broadway'}

function updateEmployeeWithKeyAndValue (employee, key, value ){
    let updateEmployeeWithKeyAndValue = {...employee};
    updateEmployeeWithKeyAndValue[key] = value;
    return updateEmployeeWithKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newArray = {...employee};
    delete newArray.name;
    return newArray;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}