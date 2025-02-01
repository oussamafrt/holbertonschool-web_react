interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const teacher1: Teacher = {
    firstName: 'Alice',
    lastName: 'Johnson',
    fullTimeEmployee: true,
    location: 'San Francisco',
    contract: true
};

const teacher2: Teacher = {
    firstName: 'Bob',
    lastName: 'Brown',
    fullTimeEmployee: false,
    yearsOfExperience: 10,
    location: 'Chicago',
    contract: false
};

const director1: Directors = {
    firstName: 'Charlie',
    lastName: 'Williams',
    fullTimeEmployee: true,
    location: 'New York',
    numberOfReports: 5
};

const director2: Directors = {
    firstName: 'Dana',
    lastName: 'White',
    fullTimeEmployee: false,
    yearsOfExperience: 15,
    location: 'Los Angeles',
    numberOfReports: 10
};

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());

console.log(printTeacher("John", "Doe"));