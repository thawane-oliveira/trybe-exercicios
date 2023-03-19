var Student = /** @class */ (function () {
    function Student(enrollment, name, examGrades, assignmentsGrades) {
        this._enrollment = enrollment;
        this._name = name;
        this._examGrades = examGrades;
        this._assignmentsGrades = assignmentsGrades;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examGrades", {
        get: function () {
            return this._examGrades;
        },
        set: function (value) {
            this._examGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "assignmentsGrades", {
        get: function () {
            return this._assignmentsGrades;
        },
        set: function (value) {
            this._assignmentsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var studentOne = new Student('49', 'Giorno', [7, 9, 8, 7], [7, 9, 10]);
console.log(studentOne);
var studentTwo = new Student('7', 'Narancito', [5, 6, 8, 6], [4, 3, 10]);
console.log(studentTwo);
