const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};

console.log(createPerson("Eric", 25, "Male"));