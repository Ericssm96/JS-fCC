class Person {
    constructor(firstAndLast) {
        this.fullName = firstAndLast;
        let arrayOfNames = this.fullName.split();

        this.getFirstName = () => arrayOfNames[0];

        this.getLastName = () => arrayOfNames[1];

        this.getFullName = () => this.fullName;

        this.setFirstName = firstName => {
            this.fullName = `${firstName} ${arrayOfNames[1]}`;
        };

        this.setLastName = lastName => {
            this.fullName = `${lastName} ${arrayOfNames[1]}`;
        };

        this.setFullName = (name) => {
            this.fullName = name;
        };

        return firstAndLast;
    }
}

const bob = new Person('Bob Ross');
bob.getFullName();